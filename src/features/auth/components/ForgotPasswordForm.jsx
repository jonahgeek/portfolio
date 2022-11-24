import { Button } from "@/components/Elements";
import { Form, InputField } from "@/components/Form";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import * as z from "zod";

import { useForgotPassword } from "../api/forgotPassword";

const schema = z.object({
  email: z.string().min(1, "Required"),
});

export const ForgotPasswordForm = () => {
  const forgotPasswordMutation = useForgotPassword();

  return (
    <div>
      <Form
        onSubmit={async (values) => {
          await forgotPasswordMutation.mutateAsync({ email: values });
        }}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              icon={<User />}
              placeholder="Email Address"
              error={formState.errors["email"]}
              registration={register("email")}
            />

            <div>
              <Button
                isLoading={forgotPasswordMutation.isLoading}
                type="submit"
                className="w-full text-gray-g9"
              >
                Forgot Password
              </Button>
            </div>
          </>
        )}
      </Form>
      <div className="mt-2 flex items-center justify-center">
        <div className="text-sm">
          <Link
            to="../login"
            className="font-medium text-orange-o10 hover:text-blue-500"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};
