
import { createContext, useContext,useEffect, useReducer } from "react";
import axios from 'axios'
import reducer from "../reducer/ProductReducer" // reducer same as productReducer

const AppContext = createContext();

const API="https://api.pujakaitem.com/api/products";
const initialState={
  isLoading: false,
  isError:false,
  product:[],
  featuredProduct:[],
  isSingleLoading:false,
  singleProduct:{},

}

const AppProvider = ({ children }) => {
const [state,dispatch]=useReducer(reducer,initialState);
  const getProducts = async(url)=>{

    dispatch({type: "SET_LOADING"}); //first it will call this
    try{
    const res= await axios.get(url);
    const product=res.data;
    dispatch({type: "SET_API_DATA",payload: product}); // next this after extracting data
    }catch (error){
      dispatch({type: "SET_API_ERROR"}); //if there is error it will call SE_API_ERROR
    }
};

// getting data from API for single page

const getSingleProduct=async(url)=>{ 
  dispatch({type: "SET_SINGLE_LOADING"});
try{
  const res=await axios.get(url);
  const singleData=res.data;
  dispatch({type:"SET_SINGLE_API_DATA",payload: singleData});
}catch(error){
  dispatch({type:"SET_SINGLE_API_ERROR"});  
}
}


//used to load data in page after the page is loaded
  useEffect(()=>{
    getProducts(API);
  },[])

  return (
    <AppContext.Provider value={{...state,getSingleProduct,getProducts }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };