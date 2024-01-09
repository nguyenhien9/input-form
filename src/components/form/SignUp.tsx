import Typo from "../Typo";
import Button from "../button/Button";
import CustomInput from "../input/CustomInput";

import { useForm, Resolver } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
};
const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values,
    errors: {
      ...(values.username
        ? {}
        : {
            username: {
              type: "required",
              message: "Username is required",
            },
          }),
      ...(values.email
        ? {}
        : {
            email: {
              type: "required",
              message: "Email is required",
            },
          }),
      ...(values.password
        ? {}
        : {
            password: {
              type: "required",
              message: "Password is required",
            },
          }),
    },
  };
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      className="py-5 px-5 w-[500px] border shadow-2xl rounded-xl"
      onSubmit={onSubmit}
    >
      <Typo className="text-2xl font-bold text-sky-600 text-center">
        Sign Up
      </Typo>
      <CustomInput
        label="Username"
        type="text"
        register={register("username")}
      />

      <CustomInput label="Email" type="email" register={register("email")} />
      <CustomInput
        label="Password"
        type="password"
        register={register("password")}
      />
      <Button className="w-full tracking-wider" type="submit">
        Sign up
      </Button>
    </form>
  );
};

export default SignUp;
