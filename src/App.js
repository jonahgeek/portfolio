import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";

function App(props) {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
