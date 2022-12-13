import React, { useEffect, useState } from 'react'
import store from '../FunctionalComponents/store'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function BestSeller() {

  const [data, setData] = useState()
  const dispatch = useDispatch()
  let count = 0
  const showCart = useSelector(state => state.cart)
  const showFav = useSelector(state => state.fav)

  useEffect(() =>{
    const getItems = () => {
        fetch("data.json")
         .then(response => response.json())
         .then(json => {setData(json.bestseller); })
        }  
    getItems()

},[])

const addToCart = (value, count) => {
  if(showCart.some(item => item.id == value.id)){
     console.log('includes')} else {
  dispatch({type: "ADD_TO_CART", payload: {...value, count: count}});
  console.log(store.getState())
  }
}

const addToFav = (value) => {
  if(showFav.some(item => item.id == value.id)){
     console.log('includes')} else {
  dispatch({type: "ADD_TO_FAV", payload: value});
  console.log(store.getState())
  }
}

  return (
    <div className='container ' id='bestseller'>
      <h2 className='font-federo text-[#3A3A3A] text-4xl '>Best Seller Items</h2>
      <div className='flex flex-wrap justify-between mt-[40px]'>
      {data && data.map((card,index)=>(
        <div className='card-style relative flex justify-center flex-col mb-4 mx-0  items-center' key={card.id} style={index >=4 ? {border: "0.5px solid #E2E0DB", width:"calc(100% / 3.1)"} : {border: "0.5px solid #E2E0DB", width: "calc(100% /4.1)"} }>
          <div className="btn-panel ">
                <button ><img src={process.env.PUBLIC_URL + '/image/btns/refresh.png'} alt="refresh"/> </button>
                <button onClick={() => addToFav(card)}><FontAwesomeIcon className='iconfaheart' icon={faHeart}/> </button>
                <button onClick={() => addToCart(card, count = count+1)}><FontAwesomeIcon className='iconfacart' icon={faCartShopping}/></button>
            </div>
          <img src={card.image} alt="" className='mb-[29px] h-[250px] w-[200px]'/>
          <h4>{card.title}</h4>
          <h6>{card.price}</h6>
        </div>
      ))}
      </div>
    </div>
  )
}
