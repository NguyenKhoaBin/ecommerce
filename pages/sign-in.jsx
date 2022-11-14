import React from "react";
import { FaGofore } from "react-icons/fa";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { useRouter } from "next/router";

const signin = () => {
  const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);
  const signIn = () => {
    signInWithGoogle();
  };

  const rounte = useRouter();
  const [loggedInUser] = useAuthState(auth);

  if (loggedInUser) {
    rounte.push("/");
  }

  return (
    <div className="min-h-screen bg-[#eeeeee] flex items-center justify-center ">
      <div className="bg-white h-[600px] md:w-[500px] w-[80vw] shadow-lg flex flex-col items-center justify-center gap-10">
        <FaGofore className="h-[100px] w-[100px] text-cyan-600" />
        <button
          onClick={signIn}
          className="w-[80%] md:w-[60%] outline-none border rounded-lg py-2 px-4 cursor-pointer hover:text-opacity-70 text-cyan-600 text-lg font-[600] border-[#c09b9b]"
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default signin;
