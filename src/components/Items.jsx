/* eslint-disable react/prop-types */
import SingleItem from './SingleItem'

const Items = ({ items, removeItem, editItem }) => {
  console.log(items)
  return (
    <section>
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        )
      })}
    </section>
  )
}

export default Items
