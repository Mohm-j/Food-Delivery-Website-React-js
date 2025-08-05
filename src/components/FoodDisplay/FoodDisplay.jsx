import { useFood } from "../../contexts/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { foodList, search, loading } = useFood();

  const filteredFood = foodList.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes Near You</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="food-display-list">
          {filteredFood.map((item) => (
            <FoodItem
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
