import { Route, Routes } from "react-router-dom";
import { Home } from "../ui/pages/Home/Home";
import { TodoApp } from "../ui/pages/TodoAppMFE/TodoAppMFE";
import { NotFound } from "../ui/pages/NotFound/NotFound";

export const RootRoute = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="todoApp/*" element={<TodoApp />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);
