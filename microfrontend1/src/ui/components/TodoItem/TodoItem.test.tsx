import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem, Todo } from "./TodoItem";

describe("TodoItem", () => {
  const todo: Todo = {
    id: 1,
    description: "Test Todo",
    completed: false,
  };

  it("displays the correct description", () => {
    render(<TodoItem todo={todo} toggleTodo={jest.fn()} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("reflects the correct completed state", () => {
    const { rerender } = render(
      <TodoItem todo={todo} toggleTodo={jest.fn()} />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    const completedTodo = { ...todo, completed: true };
    rerender(<TodoItem todo={completedTodo} toggleTodo={jest.fn()} />);
    expect(checkbox).toBeChecked();
  });

  it("calls toggleTodo with correct id when checkbox is clicked", () => {
    const toggleTodo = jest.fn();
    render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });

  it("strikes through text when todo is completed", () => {
    const completedTodo = { ...todo, completed: true };
    render(<TodoItem todo={completedTodo} toggleTodo={jest.fn()} />);
    expect(screen.getByText("Test Todo")).toHaveStyle(
      "text-decoration: line-through"
    );
  });

  it("does not strike through text when todo is not completed", () => {
    render(<TodoItem todo={todo} toggleTodo={jest.fn()} />);
    expect(screen.getByText("Test Todo")).not.toHaveStyle(
      "text-decoration: line-through"
    );
  });
});
