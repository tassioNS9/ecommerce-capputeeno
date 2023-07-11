import { FilterType } from "../types/Filter-types";
import { PriorityTypes } from "../types/Priority-types";

export function getCategoryByType(type:FilterType){
    if(type == FilterType.MUG) return "mugs"
    if(type == FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getPriorityByType(type:PriorityTypes){
    if(type == PriorityTypes.BIGGEST_PRICE ) return {field: "price_in_cents", order:"DES"}
    if(type == PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order:"ASC"}
    if(type == PriorityTypes.NEWS) return {field: "created_at", order:"ASC"}
    return {field:"sales", order:"DES"}
}

export const mountQuery = (type: FilterType, priority:PriorityTypes )=>{
    if(type === FilterType.ALL && priority === PriorityTypes.POPULARITY){
        
        return   `query{
            allProducts(sortField: "sales", sortOrder: "DSC"){
               id
               name
               price_in_cents
               image_url
           }
       }
   ` 
    }

    const categoryFilter =  getCategoryByType(type)
    const sortSettings = getPriorityByType(priority)

    return `
    query {
        allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}",
         ${categoryFilter ? `filter: { category: "${categoryFilter}"}`: ''}) {
          id
          name
          price_in_cents
          image_url
          category
        }
      }
    `
}