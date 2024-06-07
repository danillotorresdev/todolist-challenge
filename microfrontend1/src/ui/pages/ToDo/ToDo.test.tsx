import { render, screen } from "@testing-library/react";
import { ToDo } from "./ToDo";

describe("ToDo Page", () => {
  it("renders TodoInput", () => {
    render(<ToDo />);
    const todoInput = screen.getByPlaceholderText("Add a new task");
    expect(todoInput).toBeInTheDocument();
  });

  it("renders FilterButtons", () => {
    render(<ToDo />);
    const allFilterButton = screen.getByRole("button", { name: "All" });
    const activeFilterButton = screen.getByRole("button", { name: "Active" });
    const completedFilterButton = screen.getByRole("button", {
      name: "Completed",
    });
    expect(allFilterButton).toBeInTheDocument();
    expect(activeFilterButton).toBeInTheDocument();
    expect(completedFilterButton).toBeInTheDocument();
  });
});
