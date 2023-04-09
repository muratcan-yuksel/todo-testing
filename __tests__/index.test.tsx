import { render, screen, userEvent, fireEvent } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { name: /Todo App/i });

    expect(heading).toBeInTheDocument();
  });
  it("renders the input field with placeholder", () => {
    render(<Home />);

    const input = screen.getByPlaceholderText("Your todo here");

    expect(input).toBeInTheDocument();
  });
  it("renders the button with text", () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: /Add Todo/i });

    expect(button).toBeInTheDocument();
  });
  it("adds a todo", () => {
    render(<Home />);

    const inputElement = screen.getByPlaceholderText("Your todo here");
    const buttonElement = screen.getByRole("button", { name: /Add Todo/i });
    const todoText = "Learn Next.js";
    fireEvent.change(inputElement, { target: { value: todoText } });
    fireEvent.click(buttonElement);

    // Check if the todo is added to the list
    expect(screen.getByText(todoText)).toBeInTheDocument();
  });
});
