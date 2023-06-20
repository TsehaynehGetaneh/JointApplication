import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRegisterUserMutation } from "@/store/user/user-api";

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm: string;
}

const schema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirm: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .nullable()
    .required("Confirm password is required"),
});

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [registerUser, { isLoading, error }] = useRegisterUserMutation();

  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: "",
  });

  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (postData: FormData) => {
    registerUser(postData)
      .unwrap()
      .then(() => {
        toast.success(
          "You are successfully registered. Sign in to access your account."
        );
        router.push("/sign-in");
      })
      .catch((error) => {
        if (error.data.message === "User Already Exist") {
          toast.error("Email already exists, try with another email!")
        }
        else {
          toast.error("Signup failed. Please try again!");
        }
      });
  };
  
  return (
    <div className="flex justify-center h-screen bg-[#18bfe0]">
      <div className="my-5 flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 bg-white text-[#474747]
        rounded-md border-3 border-gray-200 ring-blue-400
      ">
        <div className="flex-1">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Joint<span className="text-blue-600">Application</span>
            </h2>

            <p className="mt-3 text-gray-500 dark:text-gray-300">
              signup to access your account
            </p>
          </div>
          <div className="mt-8">
            <form onSubmit={handleSubmit(onSubmit)} className={isLoading ? 'opacity-50' : ''}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Firstname
                </label>
                <input
                  type="text"
                  {...register("firstname", { value: formData.firstname })} // Pass initial value using the "value" option
                  name="firstname"
                  id="firstname"
                  placeholder="Abeba"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleInputChange}
                />

                {errors.firstname && (
                  <span className="text-red-600">{errors.firstname.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Lastname
                </label>
                <input
                  type="text"
                  {...register("lastname")}
                  name="lastname"
                  id="lastname"
                  placeholder="Kebeda"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleInputChange}
                />
                {errors.lastname && (
                  <span className="text-red-600">{errors.lastname.message}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  {...register("email")}
                  name="email"
                  id="email"
                  placeholder="example@example.com"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className="text-red-600">{errors.email.message}</span>
                )}
              </div>
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Password
                </label>
                {errors.password && (
                  <span className="text-red-600">{errors.password.message}</span>
                )}
              </div>
              <input
                type="password"
                {...register("password")}
                name="password"
                id="password"
                placeholder="Your Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={handleInputChange}
              />
              <div className="flex justify-between mb-2">
                <label
                  htmlFor="confirm"
                  className="text-sm text-gray-600 dark:text-gray-200"
                >
                  Confirm password
                </label>
                {errors.confirm && (
                  <span className="text-red-600">{errors.confirm.message}</span>
                )}
              </div>
              <input
                type="password"
                {...register("confirm")}
                name="confirm"
                id="confirm"
                placeholder="Confirm password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                onChange={handleInputChange}
              />
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isLoading || isSubmitting}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  {isLoading ? "Signing up..." : "Signup"}
                </button>
              </div>
            </form>
            <p className="mt-6 text-sm text-center text-gray-400">
              Already have an account yet?{" "}
              <Link
                href="/sign-in"
                className="text-blue-500 focus:outline-none focus:underline hover:underline"
              >
                sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Add ToastContainer to display the pop-up messages */}
    </div>
  );
};

export default Signup;
