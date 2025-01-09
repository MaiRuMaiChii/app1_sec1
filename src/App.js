import React from "react";
import { Header,Content,Footer } from "./func-components";
import Calender from "./class-component";


function App() {
  return (
    <>
   <Header/>
   <p><center><Calender></Calender></center></p>
   <Content/>
   <Footer/>
   </>
  )
}

export default App;
