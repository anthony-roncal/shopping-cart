import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import Nav from '../components/Nav';

describe("Nav component", () => {
  it("renders all elements correctly", () => {
    const cartQuantity = 10;
    render(<MemoryRouter><Nav cartQuantity={cartQuantity}/></MemoryRouter>);
    expect(screen.getByRole("heading", { name: "Logo Coffee" }).textContent).toMatch(/logo coffee/i);
    expect(screen.getByText("Home").textContent).toMatch(/home/i);
    expect(screen.getByText("Shop").textContent).toMatch(/shop/i);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText('10').textContent).toMatch(cartQuantity.toString());
  });
});