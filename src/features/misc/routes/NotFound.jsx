import { Head } from "components/Head";
import { MainLayout } from "components/layouts";
import { useAuth } from "lib/auth";
import { Link, useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  // if no user, redirect to logout
  if (!user) {
    navigate("/auth/login");
  }

  return (
    <MainLayout>
      <Head description="Page Not Found" />
      <div className="px-40 py-20 bg-white dark:bg-gray-800 h-full rounded-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-green-600 text-9xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-400 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to="./"
            className="px-6 py-3 text-sm font-semibold text-gray-500 bg-blue-100 dark:bg-gray-900 rounded rounded-md"
          >
            Back home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};
