import React, { useState } from 'react'
import ExpenseFilter from '../ExpenseUtils/ExpenseFilter'
import ExpenseList from '../Expenses/ExpenseList'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
function Expenses (props) {
  const [filterYear, setFilterYear] = useState('2021')
  const expenseData = [...props.expenses]

  const filterUpdateHandler = year => {
    setFilterYear(year)
  }
  const filteredExpenseData = expenseData.filter(expense => {
    //if we use map instead of filter it will return true/false in const variable
    //and not the expenseitem
    return expense.date.getFullYear().toString() === filterYear
  })

  return (
    <div className='expense-details'>
      <ExpenseFilter
        selected={filterYear}
        onChangeFilterHandler={filterUpdateHandler}
      />
      <ExpensesChart filteredExpenseData={filteredExpenseData} />
      <ExpenseList filteredExpenses={filteredExpenseData} />
    </div>
  )
}

export default Expenses
