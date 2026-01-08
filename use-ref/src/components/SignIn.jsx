import { Mail, Lock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SignIn = ({ setIsLogin }) => {
  const [error, setError] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const rememberRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      rememberMe: rememberRef.current.checked,
    };

    if (!formData.email) {
      setError('Email is required');
      emailRef.current.focus();
      return;
    }

    if (!formData.password) {
      setError('Password is required');
      passwordRef.current.focus();
      return;
    }

    setError('');
    console.log(formData);
    emailRef.current.value = '';
    passwordRef.current.value = '';
    rememberRef.current.checked = false;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-gray-600">Sign in to your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="login-email"
              ref={emailRef}
              type="email"
              placeholder="john@example.com"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="login-password"
              type="password"
              ref={passwordRef}
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              ref={rememberRef}
              type="checkbox"
              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <span className="ml-2 text-gray-600">Remember me</span>
          </label>
          <a
            href="#"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Forgot password?
          </a>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Sign In
        </button>

        <p className="text-center text-sm space-x-2">
          <span>New here?</span>
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            type="button"
            className="text-blue-700"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
