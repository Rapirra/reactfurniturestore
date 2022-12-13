import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { increaseCount, deleteItem } from '../FunctionalComponents/FetchFile'

export default function UserCart() {
    const showCart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const deleteItem = (value) => {
      dispatch(
        { type: "DELETE_FROM_CART", payload:value}
      )
    }

    const increaseCount = (value) => {
      dispatch({
             type: "ADD_COUNT",
             payload: value
        })
    }

    const decreaseCount = (value) =>{
      dispatch({
        type: "DECREASE_COUNT",
        payload: value
      })
    }
  return (

    <div className=' container mx-auto my-0 py-14'>
      {showCart && showCart.map((item) => (
        <div className="card-style flex column" key={item.id}>            
            <img src={item.image} alt={item.title}  />
            <div className="flex row align-start" >
                <h4>Product Name: {item.title}</h4>
                <p> Amount: {item.count}</p>
                <div className="btn-panel" >
                    <button onClick={() => increaseCount(item)}>+</button>
                    <button onClick={() => decreaseCount(item)}>-</button>

                </div>
                <button onClick={() => (deleteItem(item))}>Delete</button>
            </div>
        </div>

      ))}
    </div>
  )
}
