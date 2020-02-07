import React, { useState, useEffect } from "react";
import Button from "../buttons/Button";

const LifeCycleMethod = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("salmon");

  useEffect(() => {
    console.log(`
        I'm inside the useEffect function.
        I will only run upon mounting.
        The current count is ${count}`);

    return () => {
      console.log(`
        Removing everything!
        The prev count was ${count}
        I will only run with component unmounting!
        `);
    };
  }, [count]);

  const handleColorChange = () => {
    const nextColor = color === "salmon" ? "blue" : "salmon";
    setColor(nextColor);
  };

  const handleClickIncrease = () => {
    setCount(count => {
      return count + 1;
    });
  };

  const handleClickDecrease = () => {
    setCount(count => {
      return count - 1;
    });
  };

  return (
    <div>
      <Button
        type="button"
        actionFunction={handleClickIncrease}
        actionText="+"
      />
      <Button
        type="button"
        actionFunction={handleClickDecrease}
        actionText="-"
      />
      <Button
        type="button"
        actionFunction={handleColorChange}
        actionText="col"
      />
      <h2 style={{ color }}>{count}</h2>
    </div>
  );
};

const LifeContainer = () => {
  const [visible, setVisible] = useState(false);
  const handleVisibilityChange = () => setVisible(!visible);

  return (
    <div className="hidden_counter">
      <button type="button" className="hide" onClick={handleVisibilityChange}>
        {" "}
        Show / Hide{" "}
      </button>
      {visible && <LifeCycleMethod />}
    </div>
  );
};

export { LifeContainer, LifeCycleMethod };

LifeCycleMethod.propTypes = {};
