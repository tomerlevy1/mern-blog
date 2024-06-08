import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

const debounce = (fn, delay) => {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const debouncedHandleChange = debounce(handleChange, 300);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage('Please fill out all fields');
    }

    try {
      setErrorMessage(null);
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.message);
      }

      navigate('/sign-in');
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 min-h-full">
      <div className="flex flex-col gap-6 md:flex-row md:items-center p-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <Link className="font-bold dark:text-white text-4xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 rounded-lg text-white">
              Mia&apos;s
            </span>
            Blog
          </Link>
          <p className="mt-5 text-sm">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value={'Username'}></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
                onChange={debouncedHandleChange}
              ></TextInput>
            </div>
            <div>
              <Label value={'Email'}></Label>
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
                onChange={debouncedHandleChange}
              ></TextInput>
            </div>
            <div>
              <Label value={'Password'}></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={debouncedHandleChange}
              ></TextInput>
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {!loading ? 'Sign Up' : <Spinner></Spinner>}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
