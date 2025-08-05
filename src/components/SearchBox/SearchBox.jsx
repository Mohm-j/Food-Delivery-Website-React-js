import { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useFood } from "../../contexts/StoreContext";
import "./SearchBox.css";

const SearchBox = () => {
  const [visible, setVisible] = useState(false);
  const [term, setTerm] = useState("");
  const inputRef = useRef(null);

  const { setSearch } = useFood();

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  const toggleSearch = () => {
    setVisible((prev) => !prev);
    setTerm("");
    setSearch("");
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    setSearch(value);
  };

  return (
    <div className="search-box">
      <img
        src={assets.search_icon}
        alt="search"
        className="search-icon"
        onClick={toggleSearch}
      />

      {visible && (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search foods..."
            value={term}
            onChange={handleInputChange}
            className="search-input"
          />
        </form>
      )}
    </div>
  );
};

export default SearchBox;
