import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <Footer container className="border-t-8 border-teal-500">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link className="whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1 rounded-lg text-white">
                Mia&apos;s
              </span>
              Blog
            </Link>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-3 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Another Coloumn" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
                <Footer.Link href="#">Some Link</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default AppFooter;
