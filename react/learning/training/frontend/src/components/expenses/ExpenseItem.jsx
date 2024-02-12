import React from "react";
import PropTypes from "prop-types";

const ExpenseItem = ({ items }) => {
  return (
    <>
      <div className="text-xl  mt-4 flex ">
        {items.map((expense, index) => (
          <div
            key={index}
            className="shadow-xl bg-white border-2 p-4 w-[500px] flex items-start flex-col m-2 "
          >
            <p>Title: {expense.title}</p>
            <p> Money: {expense.money}</p>
            <p>Created at : {new Date(expense.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExpenseItem;

ExpenseItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      money: PropTypes.number.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
};
