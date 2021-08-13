import { useState } from 'react';

import ExpenseFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020'); 

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter = {filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
    </Card>
  </div>
  );
} 
 
export default Expenses;