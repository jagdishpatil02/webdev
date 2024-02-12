import React, { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter";
const expenses = [
  {
    id: "e001",
    title: "Rent",
    money: 20000,
    date: new Date("Feb 2, 2022"),
  },
  {
    id: "e002",
    title: "Fuel",
    money: 3000,
    date: new Date("Feb 2, 2022"),
  },
];

const Expenses = () => {
  const [data, setData] = useState(expenses);
  useEffect(() => {
    setData(expenses);
  }, []);
  const onInputChange = (value) => {
    const filteredExpenses = expenses.filter((expense) => {
      return expense.title.toLowerCase().match(value);
    });
    setData(filteredExpenses);
  };
  return (
    <>
      <p className="flex items-start flex-col  font-bold text-xl m-2">
        Expenses of feb:
      </p>
      <div className="text-md  mt-4 flex flex-row">
        {data && <ExpenseItem items={data}></ExpenseItem>}
      </div>
      test
      <ExpenseFilter onInputChange={onInputChange}></ExpenseFilter>
    </>
  );
};

export default Expenses;
