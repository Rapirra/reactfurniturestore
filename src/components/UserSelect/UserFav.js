import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function UserFav() {

    const showFav = useSelector(state => state.fav)
   
    const dispatch = useDispatch()

    const deleteItem = (value) => {
      dispatch(
        { type: "DELETE_FROM_FAV", payload:value}
      )
    }
  return (
    <div className='flex row container mx-auto my-0 py-14'>
    {showFav && showFav.map((item) => (
      <div className="card-style flex column" key={item.id}>            
          <img src={item.image} alt={item.title}  />
          <div className="flex row align-start" >
              <h4>Product Name: {item.title}</h4>
              <button onClick={() => deleteItem(item)}>Delete</button>
          </div>
      </div>

    ))}
  </div>
  )
}
