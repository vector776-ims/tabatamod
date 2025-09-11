import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders heading", () => {
  render(<Home />);
  const heading = screen.getByText(/Boilerplate app with jest and husky/i);
  expect(heading).toBeInTheDocument();
});
