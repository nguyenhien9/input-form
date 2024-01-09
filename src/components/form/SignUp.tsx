import Typo from "../Typo";
import Button from "../button/Button";
import CustomInput from "../input/CustomInput";

import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  password: string;
};

const SignUp = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };
  return (
    <form
      className="py-5 px-5 w-[500px] border shadow-2xl rounded-xl"
      onSubmit={handleSubmit(onSubmit)}
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
