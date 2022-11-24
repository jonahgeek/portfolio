import { MainLayout } from "components/layouts";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/Layout";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Layout title="Log in to your account">
        <LoginForm onSuccess={() => navigate("/app")} />
      </Layout>
    </MainLayout>
  );
};
