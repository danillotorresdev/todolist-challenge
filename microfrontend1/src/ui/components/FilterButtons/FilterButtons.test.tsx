import { fireEvent, render, screen } from "@testing-library/react";
import { FilterButtons } from "./FilterButtons";

describe("FilterButtons", () => {
  it("renders correctly", () => {
    const setFilter = jest.fn();
    render(<FilterButtons currentFilter="All" setFilter={setFilter} />);
    expect(screen.getByText("All")).toBeDefined();
    expect(screen.getByText("Active")).toBeDefined();
    expect(screen.getByText("Completed")).toBeDefined();
  });

  it("calls setFilter with correct value when 'All' button is clicked", () => {
    const setFilter = jest.fn();
    render(<FilterButtons currentFilter="All" setFilter={setFilter} />);
    fireEvent.click(screen.getByText("All"));
    expect(setFilter).toHaveBeenCalledWith("All");
  });

  it("calls setFilter with correct value when 'Active' button is clicked", () => {
    const setFilter = jest.fn();
    render(<FilterButtons currentFilter="All" setFilter={setFilter} />);
    fireEvent.click(screen.getByText("Active"));
    expect(setFilter).toHaveBeenCalledWith("Active");
  });

  it("calls setFilter with correct value when 'Completed' button is clicked", () => {
    const setFilter = jest.fn();
    render(<FilterButtons currentFilter="All" setFilter={setFilter} />);
    fireEvent.click(screen.getByText("Completed"));
    expect(setFilter).toHaveBeenCalledWith("Completed");
  });
});
