import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import BtnSpinner from "../BtnSpinner/BtnSpinner";

const SignIn = () => {
  const [error, setError] = useState(null);
  const { signIn, signInWithGoogle, loading, setLoading } =
    useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signIn(email, password)
      .then((res) => {
        toast.success("Login Successfully!");
        verifyJWT(res.user.email);
      })
      .catch((error) => console.error(error));
  };

  // const userSaveDB = (email, name, image, position) => {
  //   const mans = { name, email, image, position: position };

  //   fetch("https://shop-ex-server-one.vercel.app/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(mans),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Hello");
  //       setTokenEmail(email);
  //       setLoading(false);
  //     });
  // };

  const handleGoogleMama = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        // userSaveDB(user?.email, user?.displayName, user?.photoURL, "Other");
        navigate(from, { replace: true });
        verifyJWT(user?.email);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  const verifyJWT = (email) => {
    console.log(email);
    fetch(`https://shop-ex-server-one.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("access-token", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center bg-gray-200 py-28">
        <div className="flex justify-center items-center">
          <div className="flex flex-col max-w-md p-6  sm:p-10 bg-gray-100 text-gray-900 lg:w-[550px]">
            <div className="mb-8 space-y-5">
              <h1 className="text-4xl font-bold">Sign In</h1>
            </div>
            <form
              onSubmit={handleSubmit}
              noValidate=""
              action=""
              className="space-y-8 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900"
                    data-temp-mail-org="0"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="*******"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-green-500 text-gray-900"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100">
                    {loading ? <BtnSpinner /> : "Sign In"}
                  </button>
                  <p className="text-red-400">{error}</p>
                </div>
              </div>
            </form>
            <div className="flex items-center pt-4 space-x-1">
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
              <p className="px-3 text-sm dark:text-gray-400">
                Signup with Google
              </p>
              <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleGoogleMama}
                aria-label="Log in with Google"
                className="p-3 rounded-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have any account?{" "}
              <Link to="/signUp" className="hover:underline text-gray-900">
                Sign Un
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
