import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
          <form className="flex flex-col gap-4">
            <div>
              <Label value={'Username'}></Label>
              <TextInput
                type="text"
                placeholder="Username"
                id="username"
              ></TextInput>
            </div>
            <div>
              <Label value={'Email'}></Label>
              <TextInput
                type="email"
                placeholder="Email"
                id="email"
              ></TextInput>
            </div>
            <div>
              <Label value={'Password'}></Label>
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
              ></TextInput>
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
