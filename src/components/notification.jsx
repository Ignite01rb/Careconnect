import { useState, useEffect } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const initialNotifications = [
  {
    id: 1,
    title: 'New COVID-19 Protocols',
    description: 'The hospital has updated the COVID-19 safety protocols. Please ensure that all staff follow the new guidelines.',
    date: '2024-09-14',
    link: 'https://hospital.com/covid-protocols',
  },
  {
    id: 2,
    title: 'Maintenance Schedule',
    description: 'Hospital maintenance will take place on the 5th floor from 10 PM to 5 AM on September 16, 2024. Be prepared for possible interruptions.',
    date: '2024-09-13',
    link: 'https://hospital.com/maintenance-schedule',
  },
  {
    id: 3,
    title: 'Blood Donation Camp',
    description: 'Join us for the annual blood donation camp on September 20, 2024. All donations are highly appreciated.',
    date: '2024-09-10',
    link: '',
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(() => {
    const storedNotifications = localStorage.getItem('notifications');
    return storedNotifications ? JSON.parse(storedNotifications) : initialNotifications;
  });

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  return (
    <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Hospital Notifications</h2>
      <div className="space-y-6">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-400"
            >
              <div className="flex items-center mb-2">
                <AiOutlineInfoCircle className="text-indigo-400 mr-2" size={20} />
                <h3 className="text-xl font-semibold text-gray-800">{notification.title}</h3>
              </div>
              <p className="text-gray-600 mb-2">{notification.description}</p>
              <p className="text-gray-400 text-sm mb-2">Posted on: {notification.date}</p>
              {notification.link && (
                <a
                  href={notification.link}
                  className="text-indigo-600 hover:underline text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View More
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No notifications available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Notifications;
