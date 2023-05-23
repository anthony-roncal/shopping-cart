import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

const mockCartItems = [
  {
    item: {
      name: 'Flatlander',
      company: "PT's Coffee Roasting Co.",
      price: Math.floor(Math.random() * 10) + 20,
      id: 12345,
      img: 'afqrtebpoa6w4mhhdwtx'
    },
    quantity: 1
  },
  {
    item: {
      name: 'Milk & Honey Blend',
      company: "Feast",
      price: Math.floor(Math.random() * 10) + 20,
      id: 67890,
      img: 'oz8dktlpdj3xbahhkdlz'
    },
    quantity: 2
  }
];

describe("Cart component", () => {
  it("renders correct heading", () => {
    render(<Cart cartItems={mockCartItems}/>);
    expect(screen.getByRole("heading", { name: "Cart" }).textContent).toMatch(/cart/i);
  });
});