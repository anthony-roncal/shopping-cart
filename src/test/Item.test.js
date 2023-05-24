import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Item from '../components/Item';

const mockItem = {
    name: 'Flatlander',
    company: "PT's Coffee Roasting Co.",
    price: Math.floor(Math.random() * 10) + 20,
    id: 12345,
    img: 'afqrtebpoa6w4mhhdwtx'
};

describe("Item component", () => {
    it("renders correct item", () => {
        render(<Item item={mockItem} addToCart={jest.fn()} />);
        expect(screen.getByText('Flatlander').textContent).toMatch(/flatlander/i);
        expect(screen.getByText("PT's Coffee Roasting Co.").textContent).toMatch(/pt's coffee roasting co./i);
        expect(screen.getByText('$' + mockItem.price).textContent).toMatch('$' + mockItem.price.toString());
        let itemButtons = screen.queryAllByRole('button');
        itemButtons.forEach(button => {
            expect(button).not.toBeInTheDocument();
        });
        expect(screen.queryByRole('input')).not.toBeInTheDocument();
    });

    it("renders form on hover", async () => {
        const user = userEvent.setup();

        render(<Item item={mockItem} addToCart={jest.fn()} />);
        const item = screen.getByTestId('shop-item');

        await user.hover(item);
        let itemButtons = screen.queryAllByRole('button');
        itemButtons.forEach(button => {
            expect(button).toBeInTheDocument();
        });
        expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    });

    it("increments and decrements quantity when + and - buttons are clicked", async () => {
        const user = userEvent.setup();

        render(<Item item={mockItem} addToCart={jest.fn()} />);
        const item = screen.getByTestId('shop-item');

        await user.hover(item);
        let itemButtons = screen.queryAllByRole('button');
        const decrementBtn = itemButtons[0];
        const incrementBtn = itemButtons[1];
        const quantity = screen.getByRole('spinbutton');

        await user.click(incrementBtn);
        expect(quantity.value).toMatch('2');
        await user.click(decrementBtn);
        expect(quantity.value).toMatch('1');
    });

    it("calls addToCart when add to cart button is clicked", async () => {
        const onAddToCart = jest.fn();
        const user = userEvent.setup();

        render(<Item item={mockItem} addToCart={onAddToCart} />);
        const item = screen.getByTestId('shop-item');

        await user.hover(item);
        let itemButtons = screen.queryAllByRole('button');
        const addToCartBtn = itemButtons[2];

        await user.click(addToCartBtn);
        expect(onAddToCart).toBeCalledTimes(1);
    });
});