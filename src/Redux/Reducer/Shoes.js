import {dataProduct} from "../../listProducts";
import {dataPlayer} from "../../listProducts";
import { ADD_TO_CART, ITEM_DETAIL, LIST_SEARCH } from "../Constants";
let initailState = {
    shoe:dataProduct,
    player:dataPlayer,
    shoeDetail:{},
    search:'',
    cart:[],
    listSearch :[]
}
export const ShoesReducer = (state = initailState,action) =>{
    switch(action.type){
        case ITEM_DETAIL:
            state.shoeDetail = action.data;
            return {...state};
        case 'SEARCH':
            state.search = action.data;
            return {...state};
        case LIST_SEARCH:
       
            return {...state,listSearch:[...state.listSearch,action.data]};
        case ADD_TO_CART:
            // let cloneCart = [...state.cart];
            // const index = cloneCart.findIndex(item=>item.id === action.data.id);

            // if(index >= 0){
            //    let newArr = cloneCart.map(item=>{
            //        if((item.id === action.data.id)){
            //            return {...item,amount:item.amount +1}
            //        }else{
            //            return {...item};
            //        }
            //    })
            //    state.cart = newArr;
            //    return{
            //        ...state
            //    }
            // }
        
            return{
                ...state,
                cart:[...state.cart,action.data]
            }

        default :return {...state};
    }
}