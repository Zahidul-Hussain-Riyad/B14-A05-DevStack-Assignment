import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 mt-16">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <img src={logo} alt="Dev Stack" className="w-32 mb-4"/>
            <p className="text-sm text-gray-400 leading-6 max-w-sm">
              Explore modern technologies, compare different tools,
              and build the perfect development stack for your next project.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://github.com"
                target="_blank"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
              >
                Git
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
              >
                X
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
              >
                in
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Product
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Projects
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">About</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Contact</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Careers</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>

            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-pink-500 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Terms</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Cookie Policy</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">

        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="text-gray-500 hover:text-pink-500 transition">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition">Terms</a>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;