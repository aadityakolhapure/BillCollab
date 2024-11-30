// import { currentUser } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';

// export default async function DashboardPage() {
//   // Fetch the current user
//   const user = await currentUser();

//   // If no user, redirect to sign-in
//   if (!user) {
//     redirect('/sign-in');
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//         <h1 className="text-3xl font-bold mb-6 text-sky-600">
//           Welcome to Your Dashboard, {user.firstName || 'User'}!
//         </h1>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-sky-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
//             <div className="space-y-2">
//               <p><strong>Name:</strong> {user.fullName}</p>
//               <p><strong>Email:</strong> {user.emailAddresses[0].emailAddress}</p>
//               {/* <p><strong>Joined:</strong> {user.createdAt?.toLocaleDateString()}</p> */}
//               <p>
//   <strong>Joined:</strong> {' '}
//   {user.createdAt
//     ? (() => {
//         try {
//           const joinDate = new Date(user.createdAt);
//           return joinDate.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           });
//         } catch (error) {
//           console.error('Error formatting date:', error);
//           return 'Invalid Date';
//         }
//       })()
//     : 'No Join Date Available'
//   }
// </p>
//             </div>
//           </div>

//           <div className="bg-sky-50 p-4 rounded-lg">
//             <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
//             <ul className="list-disc list-inside space-y-2">
//               <li>Create your first bill</li>
//               <li>Invite team members</li>
//               <li>Set up payment tracking</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import Image from "next/image";
import logo from "@/public/logo.png";

export default async function DashboardPage() {
  // Fetch the current user
  const user = await currentUser();

  // If no user, redirect to sign-in
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo/Brand */}
            <div className="flex items-center">
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
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              <Link
                href="/dashboard"
                className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md"
              >
                Dashboard
              </Link>
              <Link
                href="/bills"
                className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md"
              >
                Bills
              </Link>
              <Link
                href="/reports"
                className="text-gray-600 hover:text-sky-600 px-3 py-2 rounded-md"
              >
                Reports
              </Link>
            </div>

            {/* Profile Section */}
            <div className="flex items-center space-x-4">
              {/* User Display */}
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-700">
                  {user.fullName || user.firstName}
                </p>
                <p className="text-xs text-gray-500">
                  {user.emailAddresses[0].emailAddress}
                </p>
              </div>

              {/* Clerk's User Button - Handles Profile/Logout */}
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-10 h-10",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content - Adjusted for Navbar */}
      <div className="pt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-6 text-sky-600">
            Welcome to Your Dashboard, {user.firstName || "User"}!
          </h1>

          <div className="bg-sky-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Quick Overview</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {user.fullName}
              </p>
              <p>
                <strong>Email:</strong> {user.emailAddresses[0].emailAddress}
              </p>
              {/* <p><strong>Joined:</strong> {user.createdAt?.toLocaleDateString()}</p> */}
              <p>
                <strong>Joined:</strong>{" "}
                {user.createdAt
                  ? (() => {
                      try {
                        const joinDate = new Date(user.createdAt);
                        return joinDate.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        });
                      } catch (error) {
                        console.error("Error formatting date:", error);
                        return "Invalid Date";
                      }
                    })()
                  : "No Join Date Available"}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* ... existing dashboard sections ... */}
          </div>
        </div>
      </div>
    </div>
  );
}
