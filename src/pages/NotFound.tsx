import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-light" style={{ fontFamily: "Playfair Display, serif" }}>404</h1>
        <p className="mb-8 text-xl text-gray-600">Page not found</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1c2e] text-white rounded hover:bg-[#14b8a6] transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;