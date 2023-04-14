import  Header  from "./component/header";
import Cards_1 from "./component/cards";
import { Route,Routes } from "react-router-dom";
import Newadd_1 from "./component/addnew";
import Details from "./component/details";
import { createContext} from "react";
import { useState } from "react";
import Login from "./component/login";
import Signup from "./component/signup";

const Appstate=createContext();
function App() {
  const [login,setLogin]=useState(false);
  const [username,setUsername]=useState("")
  
  return (
    <Appstate.Provider value={{login,username,setLogin,setUsername}}>
    <div className="App">

      

      <Header></Header>
      
      
      <Routes>
        <Route path="/" element={<Cards_1/>}/>

        <Route path="/Addmovie" element={<Newadd_1/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup  />}/>
        
        
        
        
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}


