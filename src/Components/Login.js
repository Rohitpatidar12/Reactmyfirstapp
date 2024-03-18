import {  useEffect, useState } from "react";

//From and validation
const Login = () =>
{

    useEffect(()=>{
        setTimeout(()=>{
            console.log("Timer is out!")
        }, 2000)
    })
    const [email, setEmail]= useState([
        "a@gmail.com",
        "b@gmail.com",
        "c@yahoo.com"        
        ]);
        
    
const handleFormSubmit = (event) =>
{ 
  event.preventDefault();
  console.log("handleFormSubmit") 
  
 let password =  document.getElementById("password").value
 let cPassword = document.getElementById("confirmPassword").value
 console.log("password",password)
 console.log("Cpassword",cPassword)
 if(password !== cPassword)
 {   
    alert("Password do not match")
    console.log("Password do not match")
 }

 else
 {
    let emailVar = document.getElementById("email").value 
   let found = email.find(itrator =>
        {
            return itrator === emailVar
        })
        console.log("found:", found)
        if(found)
        {
            alert("Email already in use, please use another email")
            return
        }
        alert("Sign up success!")
 }
}
//   const resetForm  = () =>
//   {
    
//   }


    return<div style={{textAlign:"center",backgroundColor:"#19d4be", height:"80%",width:"80%",margin:"10px",padding:"10px"}}>
    <form onSubmit={handleFormSubmit}>
        <label>
            Name:<br/>
            <input type="text" placeholder="Enter name here.." required/><br/>
        </label>               
        <label>
            Address:<br/>
            <input type="text" placeholder="Enter address here.." required/><br/>
        </label>                
        <label>
            Contact number:<br/>
            <input type="text" placeholder="+91 XXXXX XXXXX" required/><br/>
        </label>
        <label>
            Email:<br/>
            <input type="text" id="email" placeholder="Enter Email here.." required/><br/>
        </label>
        <label>
            Password:<br/>
            <input type="Password" id="password" required/><br/>
        </label>
        <label>
            Confirm Password:<br/>
            <input type="Password" id="confirmPassword" required/><br/>
        </label>
        
        <button>Submit</button>
        {/* <button onClick={resetForm}>reset</button> */}
    </form>
</div>
}


export default Login;