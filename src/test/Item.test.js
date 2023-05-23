import { render, screen } from '@testing-library/react';
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
    });
});