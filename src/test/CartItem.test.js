import { render, screen } from '@testing-library/react';
import CartItem from '../components/CartItem';

const mockItem = {
    name: 'Flatlander',
    company: "PT's Coffee Roasting Co.",
    price: 20,
    id: 12345,
    img: 'afqrtebpoa6w4mhhdwtx'
};

describe("CartItem component", () => {
    it("renders correct item", () => {
        render(<CartItem item={mockItem} quantity={1} />);
        expect(screen.getByText('Flatlander').textContent).toMatch(/flatlander/i);
        expect(screen.getByText("$20").textContent).toMatch(/\$20/i);
        expect(screen.getByText("Qty: 1").textContent).toMatch(/Qty\: 1/i);
        expect(screen.getByText("($20 each)").textContent).toMatch(/(\$20 each)/i);
    });
});