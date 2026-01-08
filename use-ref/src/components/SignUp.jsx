import { Mail, Lock, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SignUp = ({ setIsLogin }) => {
  const [error, setError] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
    };

    if (!formData.name) {
      setError('Name is required');
      nameRef.current.focus();
      return;
    }

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

    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create Account
        </h1>
        <p className="text-gray-600">Fill in your details to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="signup-name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="signup-name"
              type="text"
              ref={nameRef}
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="signup-email"
              type="email"
              ref={emailRef}
              placeholder="john@example.com"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
            <input
              id="signup-password"
              type="password"
              ref={passwordRef}
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2 font-semibold">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700"
        >
          Create Account
        </button>

        <p className="text-center text-sm space-x-2">
          <span>Already have an account?</span>
          <button
            onClick={() => setIsLogin((prev) => !prev)}
            type="button"
            className="text-blue-700"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
