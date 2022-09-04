import React from 'react'
import NewExpenseForm from './NewExpenseForm'

function NewExpense (props) {
  const newExpenseDataHandler = childCompArgs => {
    // console.log(
    //   'Inside Parent Component : string json of child arguments:' +
    //     JSON.stringify(childCompArgs)
    // )

    const parentComponentNewExpenseData = {
      title: childCompArgs.title,
      amount: childCompArgs.amount,
      date: childCompArgs.date
    }

    // console.log('Inside Parent Component: JSON object for NewExpenseData')
    // console.log(parentComponentNewExpenseData)
    //OR
    const parentComponentNewExpenseSpreadData = {
      ...childCompArgs,
      id: Math.random(10)
    }
    console.log(
      'Inside Parent Component: JSON object for NewExpenseData using Spread and new property added'
    )
    console.log(parentComponentNewExpenseSpreadData)
    props.getDataAppNewExpenseData(parentComponentNewExpenseSpreadData)
  }
  return (
    <div>
      <NewExpenseForm getNewExpenseData={newExpenseDataHandler} />
    </div>
  )
}

export default NewExpense
