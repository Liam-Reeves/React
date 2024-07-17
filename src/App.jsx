import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Student from "./Student.jsx"
import String from "./StringState.jsx"

import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import { FaGithub } from "react-icons/fa";
import Button from "./Button.jsx"
import Copy from "./Copy.jsx"
import Counter from "./Counter.jsx"


function App(){

  return(
    <>
        <h1>Welcome to the React App!</h1>
        <FaGithub />
        <Header/>
        <Food/>  
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Student name="Spongebob" age= {30} isStudent= {true} />
        <Student name="Patrisck" />
        <UserGreeting isLoggedIn={true} username="BroCode"/>

        <List />
        <Button/>

        <Copy/>
        <Counter/>
        
            <String/>
        <Footer/>
    </>



  );

}

export default App
