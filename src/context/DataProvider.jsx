import { createContext,useState,useEffect } from "react";
import PropTypes from 'prop-types'
export const DataContext=createContext();

function DataProvider({children}) {

    const[productData,setProductData]=useState([])
    const [blogData,setBlogData]=useState([])
    const [categoriesData,setCategoriesData]=useState([])
    const [userData,setUserData]=useState([])
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
      
    };
    const removeFromCart = (productId) => {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
    };

    useEffect(()=>{
        // eslint-disable-next-line no-unused-vars
        const fetchData =  async () =>{
          try {
            const response = await fetch("http://localhost:3000/Product");
            const result = await response.json();
            setProductData(result)
          } catch (error) {
            console.error("Error",error)
          }
          
        
        }
        fetchData()
        const fetchData2 =  async () =>{
            try {
              const response = await fetch("http://localhost:3000/Blogs");
              const result = await response.json();
              setBlogData(result)
            } catch (error) {
              console.error("Error",error)
            }
            
          
          }
          fetchData2()
          const fetchData3 =  async () =>{
            try {
              const response = await fetch("http://localhost:3000/Categories");
              const result = await response.json();
              setCategoriesData(result)
            } catch (error) {
              console.error("Error",error)
            }
            
          
          }
          fetchData3()
          const fetchData4 =  async () =>{
            try {
              const response = await fetch("http://localhost:3000/Users");
              const result = await response.json();
              setUserData(result)
            } catch (error) {
              console.error("Error",error)
            }
            
          
          }
          fetchData4()
        },[])

  return (
    <DataContext.Provider
    value={{
      productData,
      blogData,
      categoriesData ,
      userData,
      cartItems,
      addToCart,
      removeFromCart
    }}
    >
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider

DataProvider.propTypes ={
    children:PropTypes.node
 }