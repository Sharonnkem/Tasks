import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/categorySlice";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./navbar.css";

function Navbar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(setSearchQuery(input));
    }, 500); 

    return () => clearTimeout(delayDebounce);
  }, [input, dispatch]);

  return (
    <nav className="navbar" aria-label="Main Navigation" data-aos="fade-down">
      <h2> TASK</h2>
      
      <label htmlFor="search" className="visually-hidden">Search tasks</label>
      <input
        type="text"
        id="search"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-input"
        aria-label="Search tasks"
        data-aos="zoom-in"
      />
    </nav>
  );
}

export default Navbar;
