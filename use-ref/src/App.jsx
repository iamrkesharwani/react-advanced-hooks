import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div>
          {isLogin && <SignIn setIsLogin={setIsLogin} />}
          {!isLogin && <SignUp setIsLogin={setIsLogin} />}
        </div>
      </div>
    </div>
  );
}

export default App;
