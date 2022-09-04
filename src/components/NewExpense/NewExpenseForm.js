import React, { useState } from 'react'
import './NewExpenseForm.css'
function NewExpenseForm (props) {
  // const [changeTitle, setChangeTitle] = useState('')
  // const [changeAmount, setChangeAmount] = useState('')
  // const [changeDate, setChangeDate] = useState('')

  const [userInput, setUserInput] = useState({
    changeTitle: '',
    changeAmount: '',
    changeDate: ''
  })

  const titleChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, changeTitle: event.target.value }
    })
  }

  const amountChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, changeAmount: event.target.value }
    })
  }

  const dateChangeHandler = event => {
    setUserInput(prevState => {
      return { ...prevState, changeDate: event.target.value }
    })
  }

  const submitHandler = event => {
    event.preventDefault()

    const newExpenseData = {
      title: userInput.changeTitle,
      amount: parseFloat(userInput.changeAmount),
      date: new Date(userInput.changeDate) // since date is coming in string form
    }
    console.log(newExpenseData)

    //passing values to parent component
    props.getNewExpenseData(newExpenseData)
    //clearing the form fields without page reload
    setUserInput({
      changeTitle: '',
      changeAmount: '',
      changeDate: ''
    })
  }
  return (
    <div>
      <form action='' className='new-expense' onSubmit={submitHandler}>
        <div className='new-expense__title'>
          <label htmlFor='Title' className='field-name'>
            Title
          </label>
          <input
            type='text'
            className='field-value'
            value={userInput.changeTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__amount'>
          <label htmlFor='Amount' className='field-name'>
            Amount
          </label>
          <input
            type='number'
            min='0.1'
            step='0.1'
            className='field-value'
            value={userInput.changeAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__date'>
          <label htmlFor='Date' className='field-name'>
            Date
          </label>
          <input
            type='date'
            min='2019-11-22'
            max='2022-08-22'
            className='field-value'
            value={userInput.changeDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className='add-expense__button'>
          <button> Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default NewExpenseForm
