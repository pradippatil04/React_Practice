import React, {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear , setFilteredYear] = useState('2020');
  const filteredExpenses = props.items.filter(ex => ex.date.getFullYear() === +selectedYear);

  const YearChangeHandler = (year) => {
    console.log(`Year ${year}`);
    setFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={selectedYear} onYearChange={YearChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
