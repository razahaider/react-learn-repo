import React from 'react'
import Chart from '../ExpensesChart/Chart'

const ExpensesChart = props => {
  let dataPoints = [
    { month: 'Jan', expense: 0 },
    { month: 'Feb', expense: 0 },
    { month: 'Mar', expense: 0 },
    { month: 'Apr', expense: 0 },
    { month: 'May', expense: 0 },
    { month: 'Jun', expense: 0 },
    { month: 'Jul', expense: 0 },
    { month: 'Aug', expense: 0 },
    { month: 'Sep', expense: 0 },
    { month: 'Oct', expense: 0 },
    { month: 'Nov', expense: 0 },
    { month: 'Dec', expense: 0 }
  ]
  for (const expense of props.filteredExpenseData) {
    const expMonth = expense.date.getMonth() // 0, 1, 2, 3, 4 -> Jan, Feb, Mar
    dataPoints[expMonth].expense += expense.amount
  }

  return <Chart dataPoints={dataPoints} />
}
export default ExpensesChart
