import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { RouteProvider } from "./providers/route-provider";
import "./App.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouteProvider />

            <Toaster richColors />
        </QueryClientProvider>
    );
}

export default App;
