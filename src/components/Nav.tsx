import logo from "../assets/logo-text.png";


const Nav = () => {
  return (
    <nav className='navbar bg-white border-b border-gray-200 px-4 md:px-8 lg:px-12'>

      {/* Logo */}
      <div>
        <a>
          <img src={logo} alt="DevStack" className='w-28 md:w-32' />
        </a>
      </div>

      {/* Center - Navigation Menu  */}
      <div className="navbar-center absolute left-1/2 -translate-x-1/2 hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><a className="text-pink-600 font-medium">Home</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Technologies</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Projects</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">About</a></li>
          <li><a className="text-gray-600 hover:text-pink-600">Contact</a>
          </li>
        </ul>
      </div>

      {/* Right Side - Buttons */}
      <div className="navbar-end ml-auto flex items-center gap-2">
        <button className="hidden sm:block btn btn-ghost font-normal text-gray-700">Sign In</button>
        <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-6">Sign Up</button>
      </div>

      {/* Mobile Menu */}
      <div className="dropdown dropdown-end lg:hidden">
        <button className="btn btn-ghost font-normal text-gray-700">Sign In</button>
        <button className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-6">Sign Up</button>

        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg">
          <li><a className="text-pink-600">Home</a></li>
          <li><a>Technologies</a></li>
          <li><a>Projects</a></li>
          <li><a>About</a></li>
          <li><a>Contact</a></li>
          <li><a>Sign In</a></li>
        </ul>
      </div>

    </nav>
  );
};

export default Nav;