"use client";
import { initFirebase } from "@/app/firebase";
import { useRouter } from "next/navigation";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const app = initFirebase();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        goToAccount();
      }
    } catch (error) {
      console.error("Error signing in with Google: ", error);
      setError((error as any).message);
    }
  };

  const signUpWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      goToAccount();
    } catch (error) {
      console.error("Error signing up with email: ", error);

      const errorCode = (error as any).code;
      let errorMessage = "An error occurred. Please try again.";

      // Handle specific Firebase errors
      if (errorCode === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please use a different email.";
      } else if (errorCode === "auth/weak-password") {
        errorMessage = "Password is too weak. Please choose a stronger password.";
      } else {
        errorMessage = (error as any).message;
      }

      setError(errorMessage);
    }
  };

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      goToAccount();
    } catch (error) {
      console.error("Error logging in with email: ", error);
      setError((error as any).message);
    }
  };

  const goToAccount = () => {
    router.push("/");
  };

  const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  );

  return (
    <div className="relative h-screen text-white bg-cover bg-black">
      <div className="flex justify-center items-center h-full absolute inset-0">
        <div className="text-center p-8 rounded-lg shadow-2xl border-4 bg-black bg-opacity-60">
          <div className="text-4xl md:text-6xl font-bold mb-4"></div>
          <div className="text-lg md:text-2xl font-light mb-8 text-yellow-400">
            <span>Welcome to Styles & Heaven</span>
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 mb-4 bg-red-100 p-4 rounded-lg shadow-md">
              <p>{error}</p>
            </div>
          )}

          <form className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Login / Sign Up Buttons */}
            <div className="flex flex-col gap-4">
              {isSignUp ? (
                <button
                  type="button"
                  onClick={signUpWithEmail}
                  className="bg-yellow-400 text-black p-4 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out border border-black hover:bg-yellow-500"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  type="button"
                  onClick={loginWithEmail}
                  className="bg-yellow-400 text-black p-4 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out border border-black hover:bg-yellow-500"
                >
                  Login
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-yellow-400 text-sm mt-2 hover:underline"
              >
                {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
              </button>
            </div>
          </form>

          {/* Google Login Button */}
          <button
            onClick={signInWithGoogle}
            className="bg-white bg-opacity-40 text-yellow-400 p-4 px-6 text-lg rounded-lg shadow-lg mt-4 transition-all duration-300 ease-in-out border border-black hover:shadow-1xl hover:shadow-white hover:bg-gray-100"
          >
            <div className="flex gap-2 items-center align-middle">
              Login With Google {rightArrow}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
