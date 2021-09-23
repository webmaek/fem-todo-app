import { TodoProvider } from "../../contexts/TodoContext";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-screen relative bg-gray-200 dark:bg-fem-dark-blue">
      <TodoProvider>{children}</TodoProvider>
    </div>
  );
};

export default Layout;
