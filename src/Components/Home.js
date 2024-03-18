import { useState } from "react";

const Home = () =>
{
    const [color, setColor] = useState("Red")
     
    const updateColor = () =>
    {
        setColor("Green")
    }



    return<div style={{backgroundColor:"grey",height:"80%",width:"80%",margin:"10px",padding:"10px"}}>
        Home page is here!!<br/>

        <label>
            My fav.color is:{color}
        </label><br/>
        <button onClick={updateColor}>update State</button>
        
        </div>
}


export default Home;