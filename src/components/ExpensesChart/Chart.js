import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar.js'
function Chart (props) {
  let totalMaximum = 0
  const dataPointExpenseValues = props.dataPoints.map(dataPoint => {
    totalMaximum += dataPoint.expense
    return dataPoint.expense
  })
  return (
    <div className='chart_panel'>
      <p>Visual Representation</p>
      <div className='chartbar_section'>
        {props.dataPoints.map(expData => (
          <ChartBar
            key={expData.month}
            expValue={expData.expense}
            TotalYearlyExpense={totalMaximum}
            month={expData.month}
          />
        ))}
      </div>
    </div>
  )
}

export default Chart
