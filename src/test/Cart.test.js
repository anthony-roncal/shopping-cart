import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

describe("Cart component", () => {
  it("renders correct heading", () => {
    render(<Cart cartItems={[]} />);
    expect(screen.getByRole("heading", { name: "Cart" }).textContent).toMatch(/cart/i);
  });

  it("renders correct empty text", () => {
    render(<Cart cartItems={[]} />);
    expect(screen.getByText("Your cart is empty!").textContent).toMatch(/Your cart is empty!/i);
  });

  it("renders correctly with 1 cart item", () => {
    const mockCartOneItem = [{
      item: {
        name: 'Flatlander',
        company: "PT's Coffee Roasting Co.",
        price: 20,
        id: 12345,
        img: 'afqrtebpoa6w4mhhdwtx'
      },
      quantity: 1
    }];
    render(<Cart cartItems={mockCartOneItem} cartQuantity={1} />);

    // cart item price and total price are the same
    const allPriceElements = screen.getAllByText("$20");

    expect(screen.getByText("Total").textContent).toMatch(/total/i);
    expect(allPriceElements[allPriceElements.length - 1].textContent).toMatch(/\$20/i);
    expect(screen.getByText("item", { exact: false }).textContent).toMatch(/(1 item)/i);
  });

  it("renders correctly with 2 cart items", () => {
    const mockCartTwoItems = [{
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
    }];
    render(<Cart cartItems={mockCartTwoItems} cartQuantity={3} />);
    expect(screen.getByText("Total").textContent).toMatch(/total/i);
    let totalPrice = mockCartTwoItems[0].item.price + (mockCartTwoItems[1].item.price * 2);
    expect(screen.getByText('$' + totalPrice).textContent).toMatch('$' + totalPrice);
    expect(screen.getByText("items", { exact: false }).textContent).toMatch(/(3 items)/i);
  });
});