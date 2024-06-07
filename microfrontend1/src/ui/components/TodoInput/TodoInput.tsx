import { useState } from "react";
import { Input, Button, HStack } from "@chakra-ui/react";

type TodoInputProps = {
  addTodo: (description: string) => void;
};

export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <HStack>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleSubmit}>Add</Button>
    </HStack>
  );
};
