import React, {useState} from 'react';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {

  const [year, setFilterYear] =  useState('2021');

  const getDropDownData = (year) => {
    setFilterYear(year);
  }

  const filterExpense = props.expenses.filter((item) => parseInt(year) === item.date.getFullYear());

  return(
    <div>
      <Card classes="expenses">
        <ExpenseFilter selected={year} getDropDownData={getDropDownData}/>
        <ExpenseChart expenses={filterExpense}/>
        <ExpenseList deleteItem={props.deleteItem} expenses={filterExpense}/>
      </Card>
    </div>
  )
}

export default Expenses