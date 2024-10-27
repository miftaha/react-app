import { useState } from 'react'
import Form from './components/Form'
import { nanoid } from 'nanoid'
import Items from './components/Items'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = (items) => {
  return localStorage.setItem('list', JSON.stringify(items))
}

const defaultItem = JSON.parse(localStorage.getItem('list') || [])

function App() {
  const [items, setItems] = useState(defaultItem)

  const addItem = (name) => {
    const newItems = { name: name, completed: false, id: nanoid() }
    setItems([...items, newItems])
    setLocalStorage([...items, newItems])
    toast.success('Item added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('Item Removed')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })

    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="w-[90vw] max-w-[30rem] mx-auto  bg-white mt-8 p-4 rounded-lg shadow-md hover:shadow-2xl duration-300">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer />
    </section>
  )
}

export default App
