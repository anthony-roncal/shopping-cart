import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';

describe("Shop component", () => {
    it("renders correct heading", () => {
      render(<Shop setCartQuantity={jest.fn()}/>);
      expect(screen.getByRole("heading", { name: "Shop Beans" }).textContent).toMatch(/shop beans/i);
    });
  });