import { useToggle } from '../provider/context';
import React, { useState, useEffect } from 'react';
import ModalComp from '../../components/Modal';
import UserContext from '../../../contexts/UserContext';
import { GetCookie } from '../../../actions/Auth';
import { BellIcon, LogoutIcon } from '@heroicons/react/outline'
export default function TopNavigation() {

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
  const { toggle } = useToggle();
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
    <header className="h-16 md:h-20 shadow bg-white items-center relative z-10">
      <div className="flex flex-center flex-col h-full justify-center mx-auto relative px-3 text-white z-10">
        <div className="flex items-center pl-1 relative w-full sm:ml-0 sm:pr-2 lg:max-w-68">
          <div className="flex group h-full items-center relative w-12">
            <button
              type="button"
              aria-expanded="false"
              aria-label="Toggle sidenav"
              onClick={toggle}
              className="text-4xl text-gray-700 focus:outline-none lg:hidden"
            >
              &#8801;
            </button>
          </div>
          <div className="flex items-center justify-end ml-5 mr-0 p-1 relative text-gray-700 w-full sm:mr-0 sm:right-auto">



            <span className="block pr-5 cursor-pointer">
              <BellIcon onClick={(e) => { setModalState(true) }} className="h-6 w-6 text-gray-700" />

            </span>
            <span onClick={(e) => { setModalState(true) }} className="block pr-5">
              <LogoutIcon onClick={(e) => { setModalState(true) }} className="h-6 w-6 text-gray-700" />

            </span>

            <a href="#" className="block relative cursor-pointer">
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
