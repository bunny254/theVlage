import EventsIcon from './icons/events';
import GuidesIcon from './icons/guides';
import MessagesIcon from './icons/messages';
import PicturesIcon from './icons/pictures';
import DocumentsIcon from './icons/documents';
import StatisticsIcon from './icons/statistics';
import ClickIcon from './icons/click';

const data = [
  {
    section: 'Dashboard',
    icon: <DocumentsIcon />,
    content: [
      {
        title: 'Home',
        link: '/client/',
      },
      {
        title: 'Verification',
        link: '/client/Verify',
      },

    ],
  },

  {
    section: 'Bookings',
    icon: <EventsIcon />,
    content: [
      {
        title: 'My Bookings',
        link: '/client/Bookings/NewBookings',
      },
      // {
      //   title: 'Unread',
      //   link: '/messages/unread',
      // },
      // {
      //   title: 'Archived',
      //   link: '/messages/archived',
      // },
    ],
  },
  {
    section: 'Settings',
    icon: <ClickIcon />,
    content: [
      {
        title: 'Login & Security',
        link: '/client/Bookings/NewBookings',
      },
      {
        title: 'Profile',
        link: '/messages/unread',
      },
      // {
      //   title: 'Archived',
      //   link: '/messages/archived',
      // },
    ],
  },

];

export default data;
