import { useContext } from 'react';
import { NotificationContext } from './NotificationContext';

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
};
