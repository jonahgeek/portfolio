import { MainLayout } from "components/layouts";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/Layout";
import { RegisterForm } from "../components/RegisterForm";

export const Register = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Layout title="Register your account">
        <RegisterForm onSuccess={() => navigate("/app")} />
      </Layout>
    </MainLayout>
  );
};
