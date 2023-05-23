import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartIcon from '../components/CartIcon';

describe("CartIcon component", () => {
    it("renders correct quantity", () => {
        render(<CartIcon cartQuantity={10} />);
        expect(screen.getByText('10').textContent).toMatch(/10/i);
        
    });

    it("has correct img src and alt", () => {
        render(<CartIcon cartQuantity={10} />);
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'cart');
        expect(screen.getByRole('img')).toHaveAttribute('src', 'cart-outline.svg');
    });
});