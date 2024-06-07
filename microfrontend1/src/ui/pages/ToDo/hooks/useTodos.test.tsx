import { renderHook, act } from "@testing-library/react-hooks";
import { useTodos } from "./useTodos";
declare global {
  interface Window {
    toast?: jest.Mock;
  }
}

describe("useTodos", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("initializes with empty todos and All filter", () => {
    const { result } = renderHook(() => useTodos());
    expect(result.current.todos).toEqual([]);
    expect(result.current.filter).toEqual("All");
  });

  it("adds a new todo", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("New todo");
    });
    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].description).toEqual("New todo");
  });

  it("toggles todo completion status", () => {
    const { result } = renderHook(() => useTodos());
    act(() => {
      result.current.addTodo("New todo");
    });
    const todoId = result.current.todos[0].id;
    act(() => {
      result.current.toggleTodo(todoId);
    });
    expect(result.current.todos[0].completed).toEqual(true);
  });
});
