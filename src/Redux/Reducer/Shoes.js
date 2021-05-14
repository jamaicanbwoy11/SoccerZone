import {dataProduct} from "../../listProducts";
import {dataPlayer} from "../../listProducts";
let initailState = {
    shoe:dataProduct,
    player:dataPlayer,
    shoeDetail:{},
    search:'',
}
export const ShoesReducer = (state = initailState,action) =>{
    switch(action.type){
        case 'ITEM-DETAIL':
            state.shoeDetail = action.data;
            return {...state};
        case 'SEARCH':
            state.search = action.data;
            return {...state};
        default :return {...state};
    }
}