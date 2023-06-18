import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoginUserMutation } from "@/store/user/user-api";
import router from "next/router";

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (postData: FormData) => {
    loginUser(postData)
      .unwrap()
      .then(() => {
        toast.success(
          "Logged in successfully!"
        );
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        if (error.data.message === "Email not Found") {
          toast.error("You're not registered, please create an account.")
        }
        else if (error.data.message === "Invalid login credentials") {
          toast.error("Your Passwrod is not correct.")
        }
        else {
          toast.error("Login failed. Please try again.");
        }
      });
  };

  return (
    <div className="flex justify-center h-screen bg-[#18bfe0] ">
      <div className="my-10 flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-white text-[#474747]
        rounded-md border-3 border-gray-200 ring-blue-400
      ">
      <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Joint<span className="text-blue-600">Application</span>
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              Login to access your account
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@example.com"
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-600 dark:text-gray-200"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  {...register("password")}
                  onChange={handleInputChange}

                />
                {errors.password && (
                  <span className="text-red-500">{errors.password.message}</span>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Log in
                </button>
              </div>
             
            </form>

            <p className="mt-6 text-sm text-center text-gray-400">
              Don't have an account yet?{" "}
              <Link
                href="/create-account"
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignIn;