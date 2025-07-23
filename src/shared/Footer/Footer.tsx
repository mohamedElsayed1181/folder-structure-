
export default function Footer() {
  return (
  <footer className="bg-gray-900 text-gray-300 py-10">
  <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Logo */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">GitHub User</h2>
      <p className="text-sm text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
    </div>

    {/* Navigation */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Navigation</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white transition">Home</a></li>
        <li><a href="/favorites" className="hover:text-white transition">Favourite</a></li>
        <li><a  className="hover:text-white transition">Shop</a></li>
        <li><a  className="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="#" className="hover:text-white transition">Help Center</a></li>
        <li><a href="#" className="hover:text-white transition">FAQs</a></li>
        <li><a href="#" className="hover:text-white transition">Returns</a></li>
        <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
    © 2024 Our Ecommerce. All rights reserved.
  </div>
</footer>

  )
}
