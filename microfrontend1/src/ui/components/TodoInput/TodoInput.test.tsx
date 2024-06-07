import { fireEvent, render, screen } from "@testing-library/react";
import { TodoInput } from "./TodoInput";

describe("TodoInput", () => {
  it("updates input value on change", () => {
    render(<TodoInput addTodo={jest.fn()} />);
    
    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New task" } });
    
    expect(input).toHaveValue("New task");
  });

  it("calls addTodo with correct value when button is clicked", () => {
    const addTodo = jest.fn();
    render(<TodoInput addTodo={addTodo} />);
    
    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New task" } });
    
    const button = screen.getByText("Add");
    fireEvent.click(button);
    
    expect(addTodo).toHaveBeenCalledWith("New task");
  });

  it("clears input after adding a task", () => {
    const addTodo = jest.fn();
    render(<TodoInput addTodo={addTodo} />);
    
    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New task" } });
    
    const button = screen.getByText("Add");
    fireEvent.click(button);
    
    expect(input).toHaveValue("");
  });

  it("does not call addTodo if input is empty", () => {
    const addTodo = jest.fn();
    render(<TodoInput addTodo={addTodo} />);
    
    const button = screen.getByText("Add");
    fireEvent.click(button);
    
    expect(addTodo).not.toHaveBeenCalled();
  });
});
