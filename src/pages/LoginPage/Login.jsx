import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import useAuthContext from "../../Hooks/useAuthContext";
import toast from "react-hot-toast";
const Login = () => {
  const [showPass, setshowPass] = useState(false);
  const location = useLocation();

  const { logInUser, signInWithGoogle, signInWithGithub } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitData = (data) => {
    const { email, password } = data;
    logInUser(email, password)
      .then((result) => {
        toast.success("Login successful. Please wait for redirect");
        setTimeout(() => {
          // navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
        if (errorMessage.includes("auth/invalid-login-credentials)")) {
          toast.error("Invalid credentials");
        }
      });
  };
  const handleGithub = () => {
    signInWithGithub()
      .then((result) => {
        toast.success("Github login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("failed to log in " + err.message);
      });
  };
  return (
    <section className="font-poppins ">
      <div
        className="hidden  text-center bg-blue-100 sdfbg-gray-700 lg:block bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/ancient-books-adorn-library-carefully-arranged-with-classics-rare-gems_157027-2332.jpg')",
        }}
      >
        <div className="bg-slate-900/50 py-20">
          <div className="max-w-6xl mx-auto pb-24">
            <span className="inline-block text-base font-medium text-white sdftext-blue-300">
              Welcome Back
            </span>
            <h2 className="mb-6 font-semibold text-white text-7xl sdftext-gray-300">
              Login Your Library
            </h2>
            <p className="mb-6 text-xl text-white">
              Unlocking Potential Through Learning
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto pb-20 ">
        <div className="w-full shadow-lg bg-white sdfbg-gray-800 mt-11 lg:-mt-36 lg:full p-7 rounded-3xl">
          <span className="flex justify-end mb-8">
            <Link
              to="/register"
              className="px-4 py-3 text-sm font-medium text-gray-100 bg-primaryColor hover:text-blue-200 rounded-lg"
            >
              Register Account
            </Link>
          </span>
          <div className="">
            <form className="p-0 m-0" onSubmit={handleSubmit(submitData)}>
              <div className="mb-7">
                <p className="text-lg text-primaryColor font-bold">Email</p>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="w-full px-4 py-4 bg-gray-200 rounded-lg sdfbg-gray-700 lg:py-5 sdftext-gray-300 "
                  name="email"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
                {/* Access error for the "email" field */}
              </div>
              <div className="mb-6">
                <p className="text-lg text-primaryColor font-bold">Password</p>
                <div className="relative flex items-center">
                  <input
                    {...register("password", { required: true })}
                    type={showPass ? "text" : "password"}
                    className="w-full px-4 py-4 bg-gray-200 rounded-lg lg:py-5 sdftext-gray-300 sdfbg-gray-700 "
                    name="password"
                    placeholder="Enter password"
                  />
                  <div className="absolute top-1/2 -translate-y-1/2 right-5">
                    {showPass ? (
                      <AiFillEye onClick={() => setshowPass(!showPass)} />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() => setshowPass(!showPass)}
                      />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>

              <div className="mt-6 text-right">
                <Link
                  to="#"
                  className="text-sm font-semibold text-primaryColor sdftext-blue-300 sdfhover:text-blue-500"
                >
                  forgot password?
                </Link>
              </div>
              <button
                className="w-full px-4 py-4 mt-6 font-medium text-gray-200 bg-primaryColor rounded-lg sdfbg-blue-500 hover:text-blue-200 "
                type="submit"
              >
                LOGIN
              </button>
              <div className="py-5 text-base text-center text-gray-600 sdftext-gray-400">
                Or login with
              </div>
              <div className="flex justify-center gap-6 cursor-pointer">
                <div onClick={handleGoogle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 120 120"
                  >
                    <path
                      d="M107.145,55H100H87.569H60v18h27.569c-1.852,5.677-5.408,10.585-10.063,14.118 C72.642,90.809,66.578,93,60,93c-12.574,0-23.278-8.002-27.299-19.191C31.6,70.745,31,67.443,31,64 c0-3.839,0.746-7.505,2.101-10.858C37.399,42.505,47.823,35,60,35c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,20.969,72.736,16,60,16c-18.422,0-34.419,10.377-42.466,25.605C14,48.291,12,55.912,12,64c0,7.882,1.9,15.32,5.267,21.882 C25.223,101.389,41.372,112,60,112c12.382,0,23.668-4.688,32.182-12.386C101.896,90.831,108,78.128,108,64 C108,60.922,107.699,57.917,107.145,55z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#44bf00"
                      d="M17.267,81.882C25.223,97.389,41.372,108,60,108c12.382,0,23.668-4.688,32.182-12.386L77.506,83.118 C72.642,86.809,66.577,89,60,89c-12.574,0-23.278-8.002-27.299-19.191L17.267,81.882z"
                    ></path>
                    <path
                      d="M77.506,83.118c-0.684,0.553-1.685,1.158-2.398,1.638l14.711,12.846 c0.807-0.641,1.6-1.298,2.363-1.988L77.506,83.118z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#0075ff"
                      d="M92.182,95.614C101.896,86.83,108,74.128,108,60c0-3.078-0.301-6.083-0.855-9H100H87.569H60v18 h27.569c-1.852,5.677-5.408,10.585-10.063,14.118L92.182,95.614z"
                    ></path>
                    <path
                      d="M32.701,69.809L17.267,81.882c0.486,0.948,1.004,1.877,1.551,2.787l15.3-11.576 C33.63,72.181,33.05,70.804,32.701,69.809z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#ffc400"
                      d="M17.267,81.882C13.9,75.32,12,67.882,12,60c0-8.088,2-15.709,5.534-22.395l15.568,11.537 C31.746,52.496,31,56.161,31,60c0,3.443,0.6,6.745,1.701,9.809L17.267,81.882z"
                    ></path>
                    <path
                      d="M17.534,37.605c-0.482,0.844-1.169,2.36-1.564,3.251l16.059,11.491 c0.299-1.095,0.653-2.167,1.072-3.205L17.534,37.605z"
                      opacity=".35"
                    ></path>
                    <path
                      fill="#ff1200"
                      d="M33.101,49.142C37.399,38.505,47.823,31,60,31c7.365,0,14.083,2.75,19.198,7.273l13.699-13.21 C84.305,16.969,72.736,12,60,12c-18.422,0-34.419,10.377-42.466,25.605L33.101,49.142z"
                    ></path>
                  </svg>
                </div>
                <div onClick={handleGithub}>
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/96/external-github-social-media-tanah-basah-basic-outline-tanah-basah.png"
                    alt="external-github-social-media-tanah-basah-basic-outline-tanah-basah"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
