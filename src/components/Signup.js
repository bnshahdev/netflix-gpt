import { useRef } from "react";
import Header from "./Header";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nameRef = useRef(null);
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = getAuth();

  const onSubmit = (e) => {
    console.log(emailRef.current);
    console.log(passwordRef.current);

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/3bd48e1e-8f08-497c-b50b-44d0aebc2a65/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <form
        onSubmit={onSubmit}
        className="absolute bg-black p-12 m-24 w-3/12 my-30 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="py-4 text-3xl">Sign Up</h1>

        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          className="p-2 m-2 w-full bg-gray-600"
        />
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-600"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-600"
        />

        <button className="p-4 m-2 bg-red-700 w-full">Sign Up</button>
        <p className="p-5 text-white text-1xl" onClick={() => navigate("/")}>
          Already Have Account? Sign In
        </p>
      </form>
    </div>
  );
};

export default Signup;
