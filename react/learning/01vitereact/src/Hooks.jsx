import Counterhook from "./hooks/Counterhook";

export const Hooks = () => {
  const { counter, increment } = Counterhook();
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
