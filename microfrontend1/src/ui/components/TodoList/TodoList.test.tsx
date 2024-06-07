import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";
import { Todo } from "../TodoItem/TodoItem";

describe("TodoList", () => {
  it("passes the toggleTodo function to each TodoItem", () => {
    const todos: Todo[] = [
      { id: 1, description: "Test Todo", completed: false },
    ];
    const toggleTodo = jest.fn();
    render(<TodoList todos={todos} toggleTodo={toggleTodo} />);

    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(toggleTodo).toHaveBeenCalledTimes(1);
    expect(toggleTodo).toHaveBeenCalledWith(1);
  });
});
