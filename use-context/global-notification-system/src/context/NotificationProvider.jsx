import { useState } from 'react';
import { NotificationContext } from './NotificationContext.js';

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const notify = (message, type = 'info', duration = 3000) => {
    const id = crypto.randomUUID();
    setNotifications((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NotificationContext.Provider
      value={{ notify, notifications, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
