import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchFoods, fetchMenus } from "../api/api";

const StoreContext = createContext();

const getInitialCart = () => {
  const storedCart = localStorage.getItem("cartItems");
  return {
    cartItems: storedCart ? JSON.parse(storedCart) : {},
  };
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { itemId } = action;
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [itemId]: (state.cartItems[itemId] || 0) + 1,
        },
      };
    }

    case "REMOVE_FROM_CART": {
      const { itemId } = action;
      const quantity = state.cartItems[itemId];
      if (!quantity) return state;

      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [itemId]: quantity > 1 ? quantity - 1 : 0,
        },
      };
    }

    case "REMOVE_ITEM_COMPLETELY": {
      const { itemId } = action;
      const updatedCart = { ...state.cartItems };
      delete updatedCart[itemId];
      return {
        ...state,
        cartItems: updatedCart,
      };
    }

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: {},
      };

    default:
      return state;
  }
};

const StoreContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {}, getInitialCart);
  const { cartItems } = state;

  const [foodList, setFoodList] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadFoods = async () => {
      setLoading(true);
      try {
        const res = await fetchFoods();
        setFoodList(res.data);
      } catch (error) {
        console.error("Error Fetching Foods", error);
      } finally {
        setLoading(false);
      }
    };

    loadFoods();
  }, []);

  useEffect(() => {
    const loadMenus = async () => {
      try {
        const res = await fetchMenus();
        setMenuList(res.data);
      } catch (error) {
        console.error("Error Fetching Menus", error);
      }
    };

    loadMenus();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    dispatch({ type: "ADD_TO_CART", itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", itemId });
  };

  const removeItemCompletely = (itemId) => {
    dispatch({ type: "REMOVE_ITEM_COMPLETELY", itemId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    localStorage.removeItem("cartItems");
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      const item = foodList.find((food) => food.id === itemId);
      return item ? total + item.price * quantity : total;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  const contextValue = {
    foodList,
    menuList,
    loading,
    cartItems,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    clearCart,
    getTotalCartAmount,
    getTotalCartItems,
    search,
    setSearch,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export const useFood = () => useContext(StoreContext);

export default StoreContextProvider;
