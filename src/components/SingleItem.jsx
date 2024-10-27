/* eslint-disable react/prop-types */

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <article className="grid grid-cols-[auto_1fr_auto] gap-x-3 items-center ">
      <input
        type="checkbox"
        value={item.completed}
        onClick={() => editItem(item.id)}
      />
      <p
        style={{
          textDecoration: item.completed && 'line-through',
          textTransform: 'capitalize',
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => removeItem(item.id)}
        className="capitalize bg-black text-white rounded-sm px-2 py-1 hover:bg-blue-900"
      >
        delete
      </button>
    </article>
  )
}

export default SingleItem
