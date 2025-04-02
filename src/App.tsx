import {
  LayoutDashboard,
  ListOrdered,
  ListTreeIcon,
  LogOut,
  PillBottle,
  User,
} from "lucide-react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="flex items-center justify-center h-16 ">
          <span className="text-lg font-semibold">MPharms</span>
        </div>
        <nav className="py-4">
          <ul>
            <li className="px-4 py-2 space-x-4 flex flex-row hover:bg-blue-100 hover:cursor-pointer items-center">
              <LayoutDashboard />
              Dashboard
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer flex items-center">
              <ListOrdered />
              Inventory
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer flex items-center">
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
              Medicine Categories
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer flex items-center">
              <PillBottle />
              Medicine Types
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer flex items-center">
              <User />
              Profile
            </li>
            <li className="px-4 py-2 hover:bg-blue-100 hover:cursor-pointer flex items-center">
              <LogOut />
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-yellow-500 p-4 h-32 text-center items-center flex justify-center font-bold text-white text-4xl rounded shadow-md">
            Sales 1,294
          </div>
          <div className="bg-purple-500 p-4 h-32 text-center items-center flex justify-center font-bold text-white text-4xl rounded shadow-md">
            Orders 1,294
          </div>
          <div className="bg-blue-500 p-4 h-32 text-center items-center flex justify-center font-bold text-white text-4xl rounded shadow-md">
            Customers 1,294
          </div>
        </div>

        <div className="bg-white rounded shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">My Balance</h2>
          <div className="text-3xl font-bold">$ 3,018</div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
            + Add Balance
          </button>
          <div className="flex justify-between mt-4">
            <span className="text-gray-600">History</span>
            <span className="text-gray-600">Refresh</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Profit</h2>
            <div className="flex items-center justify-between">
              <span>Profit</span>
              <span>$3K</span>
            </div>
            <div className="h-2 bg-green-200 rounded mt-2">
              <div className="h-2 bg-green-500 rounded w-3/4"></div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span>Orders</span>
              <span>576</span>
            </div>
            <div className="h-2 bg-blue-200 rounded mt-2">
              <div className="h-2 bg-blue-500 rounded w-2/3"></div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span>Tasks Complete</span>
              <span>70%</span>
            </div>
            <div className="h-2 bg-indigo-200 rounded mt-2">
              <div className="h-2 bg-indigo-500 rounded w-7/10"></div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span>Open Rate</span>
              <span>60%</span>
            </div>
            <div className="h-2 bg-yellow-200 rounded mt-2">
              <div className="h-2 bg-yellow-500 rounded w-3/5"></div>
            </div>
          </div>

          <div className="bg-white rounded shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Statistic</h2>
            <div className="flex items-center justify-between">
              <span>Number</span>
              <span>150GB</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span>Followers</span>
              <span>+45K</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white rounded shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Table</h2>
            <div>Users Table</div>
          </div>
          <div className="bg-white rounded shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Tasks</h2>
            <div>To Do List</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
