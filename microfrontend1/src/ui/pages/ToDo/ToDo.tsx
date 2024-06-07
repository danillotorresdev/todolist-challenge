import { useEffect, useState } from "react";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoInput } from "../../components/TodoInput/TodoInput";
import { Container, useToast } from "@chakra-ui/react";
import { FilterButtons } from "../../components/FilterButtons/FilterButtons";

type Todo = {
  id: number;
  description: string;
  completed: boolean;
};

type Filter = "All" | "Active" | "Completed";

export const ToDo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("All");
  const toast = useToast();

  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error("Could not load todos from localStorage", error);
      toast({
        title: "Error",
        description: "Could not load todos from localStorage.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, []);

  const addTodo = (description: string) => {
    if (description.trim() === "") {
      toast({
        title: "Invalid input",
        description: "Todo description cannot be empty.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    const newTodo = { id: Date.now(), description, completed: false };
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      try {
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        toast({
          title: "Todo added",
          description: "Todo has been added successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } catch (error) {
        console.error("Could not save todos to localStorage", error);
        toast({
          title: "Error",
          description: "Could not save todos to localStorage.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      return updatedTodos;
    });
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <Container marginTop={10}>
      <TodoInput addTodo={addTodo} />
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />
    </Container>
  );
};
