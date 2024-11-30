"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const Home: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <ClerkProvider>
      <div className={`${isDarkMode ? "dark" : ""}`}>
        {/* Page Container */}
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-200">
          {/* Navbar */}
          <nav className="bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-20">
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/">
                <div className="flex items-center space-x-2 cursor-pointer">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={32}
                    height={32}
                    className="h-8"
                  />
                  <span className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    BillCollab
                  </span>
                </div>
              </Link>
              <div className="space-x-4">
                <SignedOut>
                  <SignInButton mode="modal" redirecturl="/">
                    <button className="text-sm font-medium text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400">
                      Login
                    </button>
                  </SignInButton>
                  <SignInButton mode="modal" redirecturl="/">
                    <button className="text-sm font-medium text-white bg-sky-500 px-4 py-2 rounded-lg hover:bg-sky-600">
                      Register
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="bg-gradient-to-r from-sky-500 to-blue-600 text-white py-20 mt-14">
            <div className="max-w-screen-xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Simplify Bill Sharing</h1>
              <p className="text-lg font-light">
                Seamlessly collaborate, split expenses, and track payments with
                ease.
              </p>
              <div className="mt-6 space-x-4">
                <SignedOut>
                  <SignInButton mode="modal" redirecturl="/dashboard">
                    <button className="bg-white text-sky-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
                      Get Started
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard">
                    <button className="bg-white text-sky-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
                      Get Started
                    </button>
                  </Link>
                </SignedIn>
                <a
                  href="#features"
                  className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-sky-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </header>

          {/* Features Section */}
          <section id="features" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-sky-600 dark:text-sky-400">
                Why Choose BillCollab?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard
                  title="Effortless Collaboration"
                  description="Add connected users and split bills seamlessly."
                  icon="🧑‍🤝‍🧑"
                />
                <FeatureCard
                  title="Track Payments"
                  description="Monitor who has paid and who hasn't, all in one place."
                  icon="📊"
                />
                <FeatureCard
                  title="Downloadable Reports"
                  description="Generate PDF/CSV summaries for monthly and yearly insights."
                  icon="📄"
                />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-sky-600 dark:bg-gray-800 text-white py-6">
            <div className="max-w-screen-xl mx-auto text-center">
              <p className="text-sm">
                © {new Date().getFullYear()} BillCollab. All Rights Reserved.
              </p>
              <div className="mt-4 space-x-3">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </div>
              <button
                onClick={toggleTheme}
                className="mt-6 bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  fillRule="evenodd"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </ClerkProvider>
  );
};

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-center">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-sky-600 dark:text-sky-400 mb-2">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export default Home;
