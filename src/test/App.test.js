import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe("App component", () => {
    it("renders correct heading", () => {
      render(<App />);
      expect(screen.getByRole("heading", { name: "Logo Coffee" }).textContent).toMatch(/logo coffee/i);
    });
  });