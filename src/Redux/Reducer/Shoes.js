import {dataProduct} from "../../listProducts";
import {dataPlayer} from "../../listProducts";
let initailState = {
    shoe:dataProduct,
    player:dataPlayer,
}
export const ShoesReducer = (state = initailState,action) =>{
    switch(action.type){
        default :return {...state};
    }
}