export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-bold">Anurag Mahanta</h3>
            <p className="text-gray-400 mt-1">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/ANURAGGGGGGGGGGGG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anurag-mahantaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Anurag Mahanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}