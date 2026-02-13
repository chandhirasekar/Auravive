export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 Auravive. All rights reserved.
          </p>
          <div className="mt-4">
            <a 
              href="https://www.instagram.com/auravive_official/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              @auravive_official
            </a>
          </div>
        </div>
      </footer>
    )
}