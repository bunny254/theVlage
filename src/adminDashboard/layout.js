import Overlay from './provider/overlay';
import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import DashboardProvider from './provider/context';

/*	w-[calc(100%-16rem)] class get the remain width of the main component from lg:viewport by subtracting
(the total width by the width of the side navigation component which is w-64 = 16rem)*/

const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `bg-[#25074d] flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-16rem)]`,
  main: ``,
};

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className='h-screen overflow-hidden relative'>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className='bg-[#25074d] flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-16rem)]'>
            <TopNavigation />
            <main className='bg-gray-100 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl'>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
