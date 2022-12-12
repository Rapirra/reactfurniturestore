const initialState = {
    fav: [],
    cart: []
}
// const rootReducer = (state = initialState, action) => {
//     switch(action.type){
//         case "LOAD_DATA":
//             return {...state, ...action.payload}
//         case "LOAD_DATA_ERROR":
//             return {...state, error: action.msg}
//         default:
//             return state
//     }
// }

// export default rootReducer

export const cartReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_TO_CART":
            return [...state, action.payload]
        case "DELETE_FROM_CART":
            return state.filter(item => item.id !== action.payload.id)
        case "ADD_COUNT":
            return state.filter(     
                c => {                    
                    if(c.id === action.payload.id){
                    c.count += 1}
                    return c.count;
                }
            )
        case "DECREASE_COUNT": 
            return state.filter(                
                c => {                    
                    if(c.id === action.payload.id){
                    c.count -= 1}
                    return c.count;
                }
            )           
        
        default: 
            return state
    }
}

export const favReducer = (state = [], action) =>{
    switch(action.type){
        case "ADD_TO_FAV":
            return [...state, action.payload]
        case "DELETE_FROM_FAV":
            return state.filter(item => item.id !== action.payload.id)    
        
        default: 
            return state
    }
}