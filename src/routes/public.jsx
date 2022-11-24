import { lazyImport } from "utils/lazyImport";
import { NotFound } from "features/misc";

const { AuthRoutes } = lazyImport(() => import("features/auth"), "AuthRoutes");

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <AuthRoutes />,
  },
  { path: "*", element: <NotFound /> },
];
