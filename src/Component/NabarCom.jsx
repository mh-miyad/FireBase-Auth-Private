import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserProvider } from "../Auth/AuthProvider";
import {  toast } from 'react-toastify';

const NabarCom = () => {


  const {logOut} = useContext(UserProvider)

  const signOutBtn = ()=>{
    logOut()
    .then(()=>{
      toast("SignOut  SuccessFull ")
    })
  }
  
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">

          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            The News Times
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Item> Hello </Dropdown.Item>
            <Dropdown.Item onClick={signOutBtn}>Sign out</Dropdown.Item>
          </Dropdown> 
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link >
            <Link to={'/'}> <a className="text-gray-700 font-bold uppercase" > home</a></Link>

          </Navbar.Link>
          <Navbar.Link >
            <Link to={'/news'}> <a className="text-gray-700 font-bold uppercase" > News</a></Link>

          </Navbar.Link>
          <Navbar.Link >
            <Link to={'/login'}> <a className="text-gray-700 font-bold uppercase" > Log In </a></Link>

          </Navbar.Link>
          <Navbar.Link >
            <Link to={'/signup'}> <a className="text-gray-700 font-bold uppercase" > Sign Up </a></Link>

          </Navbar.Link>

        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NabarCom;
