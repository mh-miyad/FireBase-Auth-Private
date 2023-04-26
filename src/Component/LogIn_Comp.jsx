import React, { useContext, useState } from "react";
import { Button } from "flowbite-react";
import { UserProvider } from "../Auth/AuthProvider";
import { toast } from "react-toastify";

const LogIn_Comp = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login} = useContext(UserProvider)

  const handleSubmit = (event) => {
    event.preventDefault();
   login(email,password)
   .then( result => {
    const loggedUser = result.user;
    if (loggedUser) {
      toast(' Sign In SuccessFull ')
      
      setEmail('')
      setPassword('')
    }else{
      toast(' please Log In ')
    }
    
  })
  .catch( error =>{
    alert(error)
  })
  };
  return (
    <div>
      <form className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl md:text-4xl my-5 uppercase bg-purple-100 rounded  px-10 py-3">
          {" "}
          Please Log In{" "}
        </h2>

        <input
          className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          className="mb-4 px-10  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 "
          onClick={handleSubmit}
          variant="contained"
        >
          Log In
        </Button>
        {/* <div className="flex justify-center gap-10"> */}
          <button className="text-white bg-gradient-to-tr from-emerald-500 from-25% hover:from-30%  hover:via-40% to-lime-600  via-green-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-red-900">
            google
          </button>
          {/* <button className="text-white bg-gradient-to-tr from-blue-500 from-25% hover:from-30%  hover:via-40% to-sky-600  via-cyan-400 via-30% to-70% hover:to-60%  px-10 py-2 rounded  hover:px-8 hover:py-1 transition-all duration-100 capitalize font-semibold shadow-2xl shadow-blue-900">
            Facebook
          </button> */}
        {/* </div> */}
      </form>
    </div>
  );
};

export default LogIn_Comp;
