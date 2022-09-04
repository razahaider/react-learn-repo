import React from 'react'
import './ChartBar.css'
const ChartBar = props => {
  console.log(props.expValue, props.TotalYearlyExpense)

  let barfillHeight = '0%' //handling 0/0 = NaN error for years with no expense
  barfillHeight =
    (props.expValue, props.TotalYearlyExpense) &&
    (props.expValue / props.TotalYearlyExpense) * 100 + '%'

  console.log('hello world!' + barfillHeight)
  return (
    <div className='chartbar_panel'>
      <div className='chartbar_bar_full'>
        <div
          className='chartbar_bar_progress'
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className='chartbar_month'>{props.month}</div>
    </div>
  )
}

export default ChartBar
