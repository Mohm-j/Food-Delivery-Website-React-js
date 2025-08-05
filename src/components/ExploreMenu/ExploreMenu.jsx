import "./ExploreMenu.css";
import { useFood } from "../../contexts/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { menuList } = useFood(); 

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining
        experiences—one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menuList.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
