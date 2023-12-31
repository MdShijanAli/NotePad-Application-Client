// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from "react-router-dom";
import { BiSolidDashboard, BiSolidNotepad } from 'react-icons/bi';
import { useContext } from "react";
import { AuthContext } from "../utilities/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";



const Sidebar = () => {


  const { logOut,user } = useContext(AuthContext);
     
    

  const handleLogout = () => {
      logOut()
          .then(() => {
              console.log('successfuly logout');
              
              toast.success('You have logged Out Successfully!!')
              window.location.href = '/';
          })
          .catch(error => {
              console.error('error', error.message)
          })
  }
  return (
    <div className="bg-[#14263A] md:h-screen">
      <div className="grid grid-cols-2 md:block">
        <div className="bg-[#204162] py-10">
                 <div className="avatar w-full">
                            {user?.photoURL ? <div className="w-24 h-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} alt='user' />
                            </div> : <FaUserCircle className='w-24 h-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2' />}
                        </div>
                   <div className="text-center text-white">
            <h2 className="text-2xl pt-5 font-semibold">{user? user?.displayName : "No Name" }</h2>
            <p className="md:text-xl text-md">{ user? user?.email : "no-email@gmail.com"}</p>
                   </div>

        </div>
        <hr className="hidden md:block" />
        <div className="my-auto">
                  <div>
                            <ul className="menu p-4 lg:w-100 text-base-content  ">

                                                    <li className='md:text-xl text-md'>
                                                    <NavLink className='text-white hover:text-[#00b22d]' to='/'>
                                                            <BiSolidDashboard ></BiSolidDashboard>
                                                            <span className='ml-2'> All Notes</span>   
                                                        </NavLink>
                                                    </li>

                                                    <li className='md:text-xl text-md my-3'>
                                                        <NavLink className='text-white hover:text-[#00b22d] ' to='/add-note'>
                                                            <BiSolidNotepad />
                                                            <span className='ml-2'> Add Note</span>
                                                        </NavLink>
                                                    </li>


                                    </ul>
                  </div>


                      <div className='mx-5'>

                          <button onClick={handleLogout} className='btn btn-md bg-[#00b22d] hover:bg-[#00b22d] w-full text-white'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                              </svg>
                              Logout
                          </button>

                      </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;