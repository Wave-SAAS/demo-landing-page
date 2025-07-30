
const Footer = () => {
  return (
    <footer className="border-t border-gray-200 px-4 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">
            Term of Use
          </a>
          <a href="#" className="hover:text-gray-900">
            Cookie Notice
          </a>
          <a href="#" className="hover:text-gray-900">
            Privacy Notice
          </a>
          <a href="#" className="hover:text-gray-900">
            Trust Center
          </a>
        </div>
        <div className="text-sm text-gray-600">Wave@2025</div>
      </div>
    </footer>
  );
}

export default Footer