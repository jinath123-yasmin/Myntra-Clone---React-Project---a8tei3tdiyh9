const ProductReducer=(state,action)=>{

    
   switch(action.type){
    case "SET_LOADING":
        return{
            ...state,
            isLoading:true
        };
    
    case "SET_API_DATA":
        const featuredData=action.payload.filter((item)=>{
            return item.featured === true
        })
        return{
            ...state,
            isLoading:false,
            product:action.payload, //all the data is stored in product
            featuredProduct:featuredData //here only featuredData are stored
        } ; 
        case "SET_API_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true
            };  
        case "SET_SINGLE_LOADING":
                return{
                    ...state,
                    isLoading:true
                };  
        case "SET_SINGLE_API_DATA":
                return{
                    ...state,
                    isSingleLoading:false,
                    singleProduct:action.payload
                    } ;        
        case "SET_SINGLE_API_ERROR":
                 return{
                     ...state,
                    isSingleLoading:false,
                    isError:true
                    };    

        default:
            return state;   
   }

// switch (action.type) {
//     case "SET_LOADING":
//       return {
//         ...state,
//         isLoading: true,
//       };

//     case "SET_API_DATA":
//       const featureData = action.payload.filter((curElem) => {
//         return curElem.featured === true;
//       });

//       return {
//         ...state,
//         isLoading: false,
//         products: action.payload,
//         featureProducts: featureData,
//       };

//     case "SET_API_ERROR":
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };

//     case "SET_SINGLE_LOADING":
//       return {
//         ...state,
//         isSingleLoading: true,
//       };

//     case "SET_SINGLE_API_DATA":
//       return {
//         ...state,
//         isSingleLoading: false,
//         singleProduct: action.payload,
//       };

//     case "SET_SINGLE_API_ERROR":
//       return {
//         ...state,
//         isSingleLoading: false,
//         isError: true,
//       };

//     default:
//       return state;
//   }
};

   


export default ProductReducer