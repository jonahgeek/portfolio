import { Spinner } from "components/Elements";
import { NotFound } from "features/misc";
import { MainLayout } from "components/layouts";
import { lazyImport } from "utils/lazyImport";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const { Dashboard } = lazyImport(() => import("features/misc"), "Dashboard");

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [
      //   { path: "/app/users", element: <Users /> },
      //   { path: "/app/profile", element: <Profile /> },
      //   { path: "/app/coming-soon", element: <ComingSoon /> },
      { path: "/app/", element: <Dashboard /> },
      { path: "/app/*", element: <NotFound /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
