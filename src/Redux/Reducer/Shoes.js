import {dataProduct} from "../../listProducts";
let initailState = {
    shoe:dataProduct
}
export const ShoesReducer = (state = initailState,action) =>{
    switch(action.type){
        default :return {...state};
    }
}