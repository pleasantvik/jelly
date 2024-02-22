import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import BaseRoutes from "./constants/baseRoute";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import MUITheme from "./MUITheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 0,
      },
    },
  });
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {BaseRoutes.map(({ path, Layout, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        ))}
      </>
    )
  );
  return (
    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider>
        <ThemeProvider theme={MUITheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </QueryClientProvider>
  );
}

export default App;
