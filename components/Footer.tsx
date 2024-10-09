import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8 shadow-inner">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2023 Color Tool. All rights reserved.</p>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link></li>
              <li><Link href="/disclaimer" className="hover:text-gray-300 transition-colors duration-300">Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-300 transition-colors duration-300">Privacy</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}