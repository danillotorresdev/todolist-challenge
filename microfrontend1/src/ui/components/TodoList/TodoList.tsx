import { VStack } from "@chakra-ui/react";
import { TodoItem } from "../TodoItem/TodoItem";

type Todo = {
  // TODO: considere criar um arquivo de tipos para reutilização
  id: number;
  description: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <VStack align="start">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </VStack>
);
