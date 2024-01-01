import { createContext,useState,useEffect } from "react";
import PropTypes from 'prop-types'
export const DataContext=createContext();

function DataProvider({children}) {

    const[productData,setProductData]=useState([])
    const [blogData,setBlogData]=useState([])
    const [categoriesData,setCategoriesData]=useState([])
    const [userData,setUserData]=useState([])
    const [cartItems, setCartItems] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [subTotal, setSubTotal]=useState(0)
    const[newComment,setNewComment]=useState("")
    const [productIdsi,setProductIdsi]=useState()
    //modal
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
      
    };
    const removeFromCart = (productId) => {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      setCartItems(updatedCart);
    };
//login işlemi
const logoutUser = () => {
  localStorage.removeItem('loggedInUser');
  setLoggedInUser(null);
};
useEffect(() => {
  const storedUser = localStorage.getItem('loggedInUser');
  if (storedUser) {
    setLoggedInUser(JSON.parse(storedUser));
  }
}, []);
  const loginUser = (username, password) => {
   
    const foundUser = userData.find(
      (user) => user.email == username && user.password == password
    );

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      setLoggedInUser(foundUser);
      
    } else {
      
      alert("Giriş hatalı")
    }
  }
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
        //product comment
        const addComment = async () => {
          try {
            const response = await fetch(`http://localhost:3000/Product/${productIdsi}`);
            if (!response.ok) {
              throw new Error('Ürün bilgisi alınamadı.');
            }
        
            const productData = await response.json();
            const currentComments = productData.comment || []; // Mevcut yorumlar
        
            const updatedComments = [
              ...currentComments,
              {
                id: Math.floor(Math.random() * 1000), // Yeni yorum ID'si
                description: newComment,
                userName: loggedInUser.name, // Kullanıcı adı
                userEmail: loggedInUser.email, // Kullanıcı e-postası
                date: new Date().toISOString().split('T')[0], // Yorum tarihi
              },
            ];
        
            const updateResponse = await fetch(`http://localhost:3000/Product/${productIdsi}`, {
              method: 'PATCH', // veya 'POST' olarak değiştirin
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                comment: updatedComments, // Güncellenmiş yorum listesi
              }),
            });
        
            if (!updateResponse.ok) {
              throw new Error('Yorum eklenemedi.');
            }
        
            // Yorum ekledikten sonra gereken işlemleri yapabilirsiniz
          } catch (error) {
            console.error('Hata:', error);
          }
        
            
          
          
        };


  return (
    <DataContext.Provider
    value={{
      productData,
      blogData,
      categoriesData ,
      userData,
      cartItems,
      addToCart,
      removeFromCart,
      loginUser,
      loggedInUser,
      logoutUser,
      subTotal,
      setSubTotal,
      setProductIdsi,
      addComment,
      setNewComment,
      openModal,
      closeModal,
      modalOpen
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