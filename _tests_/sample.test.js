import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders heading", () => {
    render(<Home />);
    const heading = screen.getByText(/Interval Timer App/i);
    expect(heading).toBeInTheDocument();
});
