import { Link, Outlet } from "react-router-dom";
//use react router
const Navigation1 = () =>
{
    return<div style={{backgroundColor:"#F3E2A9", height:"80%",width:"80%",margin:"10px",padding:"10px"}}>
        <nav>
            <label style={{margin: "10px"}} >
                <Link to="/">Home</Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="profile"> Profile </Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="login" >Login</Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="signup" >Signup</Link>
            </label>
        </nav><br/>
        <Outlet/>
    </div>
}


export default Navigation1;