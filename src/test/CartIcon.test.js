import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartIcon from '../components/CartIcon';

describe("CartIcon component", () => {
    it("renders correct quantity", () => {
        let randomQty = Math.ceil(Math.random() * 10);
        render(<CartIcon cartQuantity={randomQty} />);
        expect(screen.getByText(randomQty).textContent).toMatch(randomQty.toString());
        
    });

    it("has correct img src and alt", () => {
        render(<CartIcon cartQuantity={10} />);
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'cart');
        expect(screen.getByRole('img')).toHaveAttribute('src', 'cart-outline.svg');
    });
});