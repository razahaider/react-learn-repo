import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList (props) {
  let noExpenses = <p style={{ color: 'white' }}> No Expenses Found </p>

  return props.filteredExpenses.length == 0
    ? noExpenses
    : props.filteredExpenses.map((expense, index) => {
        console.log(expense)
        return (
          <ExpenseItem
            key={index}
            title={expense.title}
            expense={expense.amount}
            date={expense.date}
          />
        )
      })
}

export default ExpenseList
