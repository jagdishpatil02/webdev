import hoc from "./hoc/hoc";

const Person2 = ({ money, handleMoney }) => {
  return (
    <div>
      ${money}
      <button onClick={handleMoney}>set</button>
    </div>
  );
};

export default hoc(Person2);
