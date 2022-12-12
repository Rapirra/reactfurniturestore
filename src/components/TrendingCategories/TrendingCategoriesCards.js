import React, {useCallback, useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { addToCartAction } from '../FunctionalComponents/FetchFile'
import store from '../FunctionalComponents/store'

export default function TrendingCategoriesCards({active}) {
    const dispatch = useDispatch()
    const [data, setData] = useState()
    let count = 0
    const [list, setList]= useState([])
    const showCart = useSelector(state => state.cart)
    const showFav = useSelector(state => state.fav)
    useEffect(() =>{
        const getItems = () => {
            fetch("data.json")
             .then(response => response.json())
             .then(json => {setData(json.trendingcategories); })
            }  
        getItems()

    },[])
    

    const changeCardActive = useCallback(() => {
        let keys = Object.keys(data)
        keys.forEach(key => key == active ? setList(data[key]) : null)
    }, [data, active])

    useEffect(() => {
        if(data){
        changeCardActive()  
        }
    },[data, active])
   

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
    <div className='flex justify-around w-[70%] mx-auto'>
       {list && list.map(card => 
        <div className='card-style relative ' key={card.id} style={{border: "0.5px solid #E2E0DB"}}>
            <div className="btn-panel ">
                <button ><img src={process.env.PUBLIC_URL + '/image/btns/refresh.png'} alt="refresh"/> </button>
                <button onClick={() => addToFav(card)}><img src={process.env.PUBLIC_URL + '/image/btns/favourite.png'} alt="favourite"/> </button>
                <button onClick={() => addToCart(card, count = count+1)}><img src={process.env.PUBLIC_URL + '/image/btns/cart.png'} alt="cart"/> </button>
            </div>
            <img src={card.image} alt=""  className='mb-[29px] h-[250px] w-[200px]'/>
            <h4>{card.title}</h4>
            <h6>{card.price}</h6>
        </div>)
        }
    </div>
  )
}


