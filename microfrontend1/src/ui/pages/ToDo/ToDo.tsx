import { TodoList } from "../../components/TodoList/TodoList";
import { TodoInput } from "../../components/TodoInput/TodoInput";
import { Container } from "@chakra-ui/react";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";
import { useTodos } from "./hooks/useTodos";

export const ToDo = () => {
  const { todos, filter, setFilter, addTodo, toggleTodo } = useTodos();

  return (
    <Container marginTop={10}>
      <TodoInput addTodo={addTodo} />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </Container>
  );
};
