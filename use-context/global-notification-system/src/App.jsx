import NotificationContainer from './components/NotificationContainer';
import { useNotification } from './context/useNotification';

const App = () => {
  const { notify } = useNotification();

  return (
    <div className="app-container">
      <h1>Notification System</h1>
      <p>Click the buttons below to see different notification types</p>

      <div className="button-group">
        <button
          className="btn-info"
          onClick={() => notify('This is an info message', 'info')}
        >
          Info
        </button>

        <button
          className="btn-error"
          onClick={() => notify('Something went wrong', 'error')}
        >
          Error
        </button>

        <button
          className="btn-warning"
          onClick={() => notify('Be careful!', 'warning')}
        >
          Warning
        </button>

        <button
          className="btn-success"
          onClick={() => notify('Action successful', 'success')}
        >
          Success
        </button>
      </div>

      <NotificationContainer />
    </div>
  );
};

export default App;
