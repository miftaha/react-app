/* eslint-disable react/prop-types */
import { useState } from 'react'
import { toast } from 'react-toastify'
const Form = ({ addItem }) => {
  const [userInput, setUserInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userInput) {
      toast.error('Please provide a value')
      return
    }

    addItem(userInput)
  }

  return (
    <div>
      <h4 className="text-center mt-7 text-2xl font-normal">Grocery Item</h4>
      <div className="">
        <form onSubmit={handleSubmit} className="py-8 px-10">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="px-5 py-2  outline-[#06B6D4] bg-[#E2E8F0]"
          />
          <button className="bg-[#06B6D4] px-5 py-2 rounded-tr-[4px] rounded-tl-[4px] shadow-md text-white text-lg  mx-auto">
            Add Item
          </button>
        </form>
      </div>
    </div>
  )
}

export default Form
