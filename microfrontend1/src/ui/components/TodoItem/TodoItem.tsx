import { Checkbox, Text, HStack } from "@chakra-ui/react";

type Todo = {
  id: number;
  description: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => (
  <HStack>
    <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)} />
    <Text as={todo.completed ? "s" : undefined}>{todo.description}</Text>
  </HStack>
);
