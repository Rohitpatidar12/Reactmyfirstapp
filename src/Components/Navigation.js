import { Link, Outlet } from "react-router-dom";

const Navigation = () =>
{
    return<div>
        <nav>
            <label style={{margin: "10px"}} >
                <Link to="/" Home></Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="profile" Profile ></Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="login" Login></Link>
            </label>
            <label style={{margin: "10px"}} >
                <Link to="signup" Signup></Link>
            </label>
        </nav>
        <Outlet/>
    </div>
}


export default Navigation;