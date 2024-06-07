import { Checkbox, Text, HStack } from "@chakra-ui/react";

export type Todo = {
  id: number;
  description: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

export const TodoItem = ({ todo, toggleTodo }: TodoItemProps) => {
  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  return (
    <HStack>
      <Checkbox isChecked={todo.completed} onChange={handleToggle} />
      <Text as={todo.completed ? "s" : undefined}>{todo.description}</Text>
    </HStack>
  );
};