
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import About from './About'
import Product from './Product';
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Error from './Error';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import DataProvider from "./components/contexts/DataProvider";
import { createContext , useReducer} from "react";
import { initialState, reducer } from "./components/Reducer/UseReducer";



function App() {
  //we are creating an object / array
  const theme = {
    colors:{
      bg: "#99e4ee",
      
    },
  };
  
  return (

   <div>

      {/* themeprovider is at top so that we can use its all properties in all pages */}
      <ThemeProvider theme={theme}>
     
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/products" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* for any single product with id example: singleProduct/2 */}
      <Route path="/singleProduct/:id" element={<SingleProduct/>}/>
      {/* for any access other than these pages throws to error page */}
      <Route path="*" element={<Error/>}/>


     </Routes>
     
     </BrowserRouter>
      
      </ThemeProvider>
   </div>
    
      
  
  );
}

export default App;
