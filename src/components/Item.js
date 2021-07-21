import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const itemClass = isInCart ? "in-cart" : "";

  function cartClick() {
    setIsInCart((isInCart) => !isInCart);

  }

  const buttonClass = isInCart ? "remove" : "add";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartClick} className={buttonClass}>{isInCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
