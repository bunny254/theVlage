import React, { useState, useEffect } from 'react';
import { useToggle } from '../provider/context';
import ModalComp from '../../components/Modal';
import UserContext from '../../../contexts/UserContext';
import { GetCookie } from '../../../actions/Auth';
import { BellIcon, LogoutIcon } from '@heroicons/react/outline'
export default function TopNavigation() {
  const { toggle } = useToggle();
  const [openModal, setModalState] = useState(false)
  const logout = () => {
    let path = window.location.pathname;
    localStorage.clear();
    localStorage.previousPath = path;
    window.location = "/";
  };
  let user = GetCookie('user')
  useEffect(() => {
    username()
  }, [user])


  // const uname = JSON.parse(localStorage.user)
  const username = () => {
    if (typeof user == 'string') {
      return JSON.parse(user)
    }
    else {
      return (
        {
          first_name: ' ',
          surname: ' '

        }
      )
    }
  }

  return (
    <header className="bg-[#25074d] h-20 items-center relative w-full z-10">
      <div className="flex flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex left-0 relative w-3/4">

            <div className="flex group h-full items-center relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                onClick={toggle}
                className="text-4xl text-white focus:outline-none lg:hidden"
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-full sm:mr-0 sm:right-auto">
            <span className="block pr-5">
              <BellIcon onClick={(e) => { setModalState(true) }} className="h-6 w-6 text-white" />

            </span>
            <span onClick={(e) => { setModalState(true) }} className="block pr-5">
              <LogoutIcon onClick={(e) => { setModalState(true) }} className="h-6 w-6 text-white" />

            </span>

            <a href="#" className="block relative">
              <span className='h-10 mx-auto bg-white p-1 font-bold rounded-full w-10'>

                {username().first_name[0]}{username().surname[0]}
              </span>

              {/* <img
                alt="Enoch Ndika"
                src="https://dummyimage.com/84x84"
                className=""
              /> */}
            </a>
          </div>
        </div>
      </div>
      <ModalComp
        visible={openModal}
        close={() => { setModalState(false) }}
        title='Logout'
        deny_name='No'
        conf_name='Logout'
        handleConfirm={logout}
        handleDeny={() => { setModalState(false) }}
      >
        <div className="w-[100rem] mb-5">
          <div className="flex relative ">
            Are you sure you want to sign out?
          </div>

        </div>


      </ModalComp>
    </header>
  );
}
