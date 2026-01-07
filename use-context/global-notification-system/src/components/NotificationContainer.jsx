import { useNotification } from '../context/useNotification.js';

const NotificationContainer = () => {
  const { notifications, removeNotification } = useNotification();
  return (
    <div className="notification-container">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          <span>{n.message}</span>
          <button onClick={() => removeNotification(n.id)}>×</button>
        </div>
      ))}
    </div>
  );
};

export default NotificationContainer;
