import { Text, VStack } from "@chakra-ui/react";
import { type Todo, TodoItem } from "../TodoItem/TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

export const TodoList = ({ todos, toggleTodo }: TodoListProps) => (
  <VStack align="start">
    {todos.length === 0 ? (
      <Text color="gray.500">There are no tasks registered yet. Please add some.</Text>
    ) : (
      todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))
    )}
  </VStack>
);
