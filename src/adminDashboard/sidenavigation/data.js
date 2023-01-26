import HomeIcon from './icons/home';
import MediasIcon from './icons/medias';
import ContactIcon from './icons/contact';
import ServersIcon from './icons/servers';
import SettingsIcon from './icons/settings';


const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    link: '/admin/',
  },
  {
    title: 'Users',
    icon: <MediasIcon />,
    link: '/admin/users',
  },
  {
    title: 'Listings',
    icon: <ContactIcon />,
    link: '/admin/data/view-listings',
  },
  {
    title: 'Bookings',
    icon: <ServersIcon />,
    link: '/admin/bookings',
    sublink: [
      {
        title: 'Bookings',
        icon: <ServersIcon />,
        link: '/admin/bookings',
      }
    ]
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/account/security',
  },

];

export default data;
