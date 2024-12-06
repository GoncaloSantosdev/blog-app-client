const Footer = () => {
  return (
    <div className="mt-auto px-2">
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
        <a href="#" className="hover:text-gray-700">
          About
        </a>
        <a href="#" className="hover:text-gray-700">
          Help
        </a>
        <a href="#" className="hover:text-gray-700">
          Terms
        </a>
        <a href="#" className="hover:text-gray-700">
          Privacy
        </a>
      </div>
      <p className="mt-4 text-xs text-gray-400">
        © 2024 Blogify. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
