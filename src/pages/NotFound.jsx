import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-6">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, The Page you're looking for is maybe under development.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl shadow hover:bg-blue-700 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
