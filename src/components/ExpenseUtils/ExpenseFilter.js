import React from 'react'
import './ExpenseFilter.css'
function ExpenseFilter (props) {
  const changeHandler = event => {
    props.onChangeFilterHandler(event.target.value)
  }
  return (
    <div className='expense-filter__box'>
      <p className='expense-filter__name'> Filter By Year</p>
      <select
        className='expense-filter__value'
        name='year-filter'
        id='yr-filter'
        value={props.selected}
        onChange={changeHandler}
      >
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
      </select>
    </div>
  )
}

export default ExpenseFilter
