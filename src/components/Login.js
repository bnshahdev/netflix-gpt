import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="bg"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/3bd48e1e-8f08-497c-b50b-44d0aebc2a65/US-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>

      <form className="absolute bg-black p-12 m-24 w-3/12 my-30 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="py-4 text-3xl">Sign In</h1>

        <input type="text" placeholder="User Name" className="p-2 m-2 w-full" />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full"
        />

        <button className="p-4 m-2 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
