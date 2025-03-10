import { Toaster } from "sonner";
import { RouteProvider } from "./providers/route-provider";
import "./App.css";

function App() {
    return (
        <>
            <RouteProvider />

            <Toaster richColors />
        </>
    );
}

export default App;
