import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Corrected the parentheses here
  
  return (
    <header className="sticky top-0 z-50 bg-neutral-900 flex justify-between items-center p-6">
      <h1 className="text-2xl font-bold text-yellow-400">Pollution Tracker</h1>
      <nav>
        <ul className="flex space-x-6 items-center">
          {['Home', 'Map', 'Protection Guide', 'Community', 'About', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="text-white hover:text-yellow-400 transition">{item}</a>
            </li>
          ))}
          
          <li onClick={() => navigate("/admin")}>
            <button className="bg-[#FFB302] text-black px-4 py-2 rounded-lg shadow-md hover:bg-[#d9880f] active:shadow-lg transition cursor-pointer">
              Admin
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
