'use client';

const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 px-4 sm:px-6 lg:px-8 border-t ${
        isDark
          ? 'bg-gray-950 border-gray-800'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p
            className={`text-xs sm:text-sm ${
              isDark ? 'text-gray-500' : 'text-gray-600'
            }`}
          >
            © {currentYear} Ytallo Bruno. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://github.com/ytallobruno"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm transition-colors ${
                isDark
                  ? 'text-gray-500 hover:text-cyan-400'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ytallobruno"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm transition-colors ${
                isDark
                  ? 'text-gray-500 hover:text-cyan-400'
                  : 'text-gray-600 hover:text-cyan-600'
              }`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

