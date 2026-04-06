import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

            {/* Big 404 */}
            <h1 className="text-7xl md:text-9xl font-extrabold text-[#23BE0A]">
                404
            </h1>

            {/* Title */}
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
                Oops! Page Not Found
            </h2>

            {/* Description */}
            <p className="mt-2 text-gray-500 max-w-md">
                The page you are looking for might have been removed or does not exist.
            </p>

            {/* Button */}
            <Link to="/">
                <button className="mt-6 px-6 py-3 bg-[#23BE0A] text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300 cursor-pointer">
                    Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default ErrorPage;