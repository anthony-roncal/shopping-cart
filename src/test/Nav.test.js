import { render, screen } from '@testing-library/react';
import Nav from '../components/Nav';
import { MemoryRouter } from "react-router-dom";

describe("Nav component", () => {
    it("renders correct heading", () => {
      render(<MemoryRouter><Nav /></MemoryRouter>);
      expect(screen.getByRole("heading", { name: "Logo Coffee" }).textContent).toMatch(/logo coffee/i);
    });
  });