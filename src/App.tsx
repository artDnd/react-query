import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import TodoList from "./components/TodoList";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/api/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
