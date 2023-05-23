import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from '../components/CartItem';

const mockItem = {
    name: 'Flatlander',
    company: "PT's Coffee Roasting Co.",
    price: 20,
    id: 12345,
    img: 'afqrtebpoa6w4mhhdwtx'
};

describe("CartItem component", () => {
    it("renders correct values with quantity 1", () => {
        render(<CartItem item={mockItem} quantity={1} />);
        expect(screen.getByText('Flatlander').textContent).toMatch(/flatlander/i);
        expect(screen.getByText('$' + mockItem.price).textContent).toMatch('$' + mockItem.price);
        expect(screen.getByText("Qty: 1").textContent).toMatch(/Qty\: 1/i);
        expect(screen.getByText("($" + mockItem.price + " each)").textContent).toMatch("($" + mockItem.price + " each)");
        expect(screen.getByRole('img')).toHaveAttribute('src', 'afqrtebpoa6w4mhhdwtx.png');
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Flatlander');
    });

    it("renders correct values with quantity 2", () => {
        render(<CartItem item={mockItem} quantity={2} />);
        expect(screen.getByText('Flatlander').textContent).toMatch(/flatlander/i);
        expect(screen.getByText('$' + (mockItem.price * 2)).textContent).toMatch('$' + (mockItem.price * 2));
        expect(screen.getByText("Qty: 2").textContent).toMatch(/Qty\: 2/i);
        expect(screen.getByText("($" + mockItem.price + " each)").textContent).toMatch("($" + mockItem.price + " each)");
        expect(screen.getByRole('img')).toHaveAttribute('src', 'afqrtebpoa6w4mhhdwtx.png');
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'Flatlander');
    });
});