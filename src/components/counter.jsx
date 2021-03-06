import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const tags = [];
  //const [imageUrl, setImageUrl] = useState("https://picsum.photos/200");
  const formCount = () => {
    return count === 0 ? "Ноль" : count;
  };
  const getBageClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };

  const renderTags = () => {
    if (tags.length === 0) return "Тегов не найдено";
    return tags.map((tag) => <li key={tag}>{tag}</li>);
  };
  const handleIncrement = (productId) => {
    console.log(productId);
    setCount(count + 1);
  };
  const handleDecrement = (productId) => {
    console.log(productId);
    if (count > 0) setCount(count - 1);
  };

  return (
    <React.Fragment>
      {
        //<img src={imageUrl} alt="" />
      }

      {renderTags()}
      <span className={getBageClasses()}>{formCount()}</span>
      <button
        onClick={() => handleIncrement({ id: 1 })}
        className="m-2 btn btn-secondary btn-bg"
      >
        Increment
      </button>
      <button
        onClick={() => handleDecrement({ id: 1 })}
        className="m-2 btn btn-secondary btn-bg"
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
