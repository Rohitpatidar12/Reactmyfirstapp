import React, { useState } from 'react';
// import logo from './logo.svg';

// function App() {
//   let firstvariable = 5
//   console.log("firstvariable:"+firstvariable)
//   firstvariable = 6
//   console.log("firstvariable:"+firstvariable)

//   const secondvariable = "abc"
//   console.log("secondvariable:"+secondvariable)
//  // secondvariable = "xyz"
//   //console.log("secondvariable:"+secondvariable)

//   var thirdvariable = true
//   console.log("thirdvariable:"+thirdvariable)
//  thirdvariable= false
//  console.log("thirdvariable:"+thirdvariable)

// // const myFunction = () =>
// // {
// //   console.log("This is my function!!")
// // };

// // function myFunction1() 
// // {  
// //   console.log("This is my function!!12")
// // }
// // myFunction()
// // myFunction1()

// const functionArgument = () =>
// {
//   console.log("this is my functionArgument!!")
//   return false
// }
// const myFunction2 = (variable) =>
// {
//   console.log(variable)
//   console.log("This is my function 11!!")
//   if(variable)
//   {
//     console.log("the condition is true")
//   }
//   else
//   {
//     console.log("the condition is false")
//   }
// }
//  //myFunction2(functionArgument)

//  class student
//  {
//   id
//   name
//   rollNumber
//   address
//   emailID

//   constructor(id, tempName, tempRollNumber, tempAddress,tempEmail)
//   {
//     this.id = id
//     this.name = tempName
//     this.rollNumber = tempRollNumber
//     this.address = tempAddress
//     this.emailID = tempEmail
//   }
//   print()
//   {
//     console.log("id",this.id)
//     console.log("name",this.name)
//     console.log("rollnumber",this.rollNumber)
//     console.log("address",this.address)
//     console.log("emailID",this.emailID)                                                                                                         
//   }
//  }
//  const student1 = new student(123, "Rohit", 111, "neemuch", "djddj")
//  student1.print()

// class Moniter extends student 
// {
//   batch
//   constructor(batchTemp,id, tempName, tempRollNumber, tempAddress,tempEmail)
//   {
//     super(id, tempName, tempRollNumber, tempAddress,tempEmail)
//     this.batch = batchTemp    
//   }
//   print()
//   {
//     super.print()
//     console.log("Batch"+this.batch)
//   }
// }
// let ravi=new Moniter("2-3pm",222,"Ravi Prakash",1234,"neemuch","ravi@gmail.com")
// console.log("ravi",ravi)
// ravi.print()

// //JSX Formet
// let variable = <div>Hello World, How are You?</div>


//  return (
//  <div>Hello World!!{firstvariable}<br></br>{variable}</div>
//   );
// }

//create class Component
// class App extends React.Component 
// {
//   buttonClickHandle()
//   {
//     console.log("Clicked the button!!")
//     console.log(this.buttonClickHandle)
//   }
//   render() 
//   {
// return React.createElement
// (
//   "div",
//   null,
//   React.createElement("p",null,"This is simple react element"),
//   React.createElement("ul",null,),
//   React.createElement("li",null,"List item 1"),
//   React.createElement("li",null,"List item 2"),
//   React.createElement("li",null,"List item 3")
// )
// return<div>
//   <p>
//     <ol>
//       <li>List 1</li>
//       <li>List 2</li>
//       <li>List 3</li>
//     </ol>
//     <button onClick={()=>this.buttonClickHandle()}>Click me</button>
//     <input type='checkbox'></input>
//   </p>
// </div> 
//   }
// }   

// const App = (props) =>
// {
//   console.log("props: ", props)
//   console.log("Props color", props.color)//color
//   console.log("Props size", props.size)//size
//   console.log(props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is App Component<br></br>
//     <button onClick={props.clickEvent}>Click me</button>
//     </div>
// }

// class App extends React.Component {

//   //create State
//   state = {
//      counter: 0,
//      Component:<ChildComponent/>
//   }
//   constructor(props)
//    {
//     super(props)
//     console.log("Constructor of App Component")
//   }
//   static getDerivedStateFromProps() {
//     console.log("getDrivedStateFromProps")

//   }

//   incrumentCounter = () => {

//     this.setState({ counter: this.state.counter + 1 })
//   }
//   componentDidMount() {
//     console.log("componentDidMount")
//   }
//   shouldComponentUpdate() {
//     console.log("shouldComponentUpdate")
//     return true
//   }
//   getSnapshotBeforeUpdate(prevProps, PrevState) {
//     console.log("etSnapshotBeforeUpdate")
//     return true
//   }
//   componentDidUpdate() {
//     console.log("componentDidUpdate")
//   }
//   unmountChild = () =>
//   {
//     this.setState({
//       counter: this.state.counter,
//       Component:"This Child Component is Gone/Unmounted"
//     })
//   }

//    render() {
//    console.log("render method")

//     return <div style={{ backgroundColor: this.props.color }}>
//       Hello<br></br>
//       <button onClick={this.props.clickEvent}>Click Me</button>
//       <br></br>
//       Counter:{this.state.counter}<br/>
//       <button onClick={this.incrumentCounter}>Increment Counter</button><br/>
//       ------------------<br/>
//       {/* <ChildComponent/> */}
//       {this.state.Component}
//       ------------------<br/>
//       <button onClick={this.unmountChild}>Unmount Child Component</button>
//     </div>
//   }
// }

// class ChildComponent extends React.Component
// {
//   componentWillUnmount()
//   {
//     console.l(og("Unmounting Child Component")
//    }

//   render()
//   {
//     return<div>This is My Child Component</div>
//   }
// }
// // Component life Cycle methods
//  function App()
//  {

//  }

//Function in JS
//   const App = () =>
//  {
//   function  function1(a,b) //Normal Function
//   {
//      console.log("This is Function1: "+a+","+b)
//   }

//   const Function2 = (a,b) => // Arrow Function
//   {
//     console.log("This is Function2: "+a+", "+b)  
//   }

//   Function2(function1,3)

  // let myArray = [1, 2, ()=>
  // {
  //   console.log("This is From Array")
  //   console.log("This is again from Array")
  //     return 10
  // },10]
  // console.log(myArray)
  // console.log(myArray[2])
  // console.log(myArray[2]())

//   const myObject = {
//     name: "Rohit",
//     age: 20,
//     myFunction: () =>
//     {
//       console.log("This is from inside of a function1")
//     }
//   }

//   console.log("Name",myObject.name)
//   console.log("Function",myObject.myFunction())
 //}


//  const App = () =>
//  {
//   const object1 = {
//     a: "A",
//     b: "B"
//   }
//   // const object2 = object1
//   const object2 = Object.assign({}, object1)

//   console.log("object1: ",object1)
//   console.log("onject2: ",object2)

//   object1.a ="a"
//   console.log("onject1: ",object1)
//   console.log("onject2: ",object2)
  /*
  onject1 -> ref variable[address of memory], memory->a[A],b[B]
  onject2 -> ref variable[address of memory], memory->a[A],b[B]
  */ 
//}

//Hoisting
// const App = () =>
//  {
// myFunction = () =>
// {
//     console.log("this is myFunction")
//    } 

//    myFunction()

// function myFunction()
// {
//   console.log("this is myFunction")
// } 
//var myFunction
//  abc = 10
//  console.log("abc",abc)
//  var abc 
//}






//Clouser JS
// const App = () =>
// {
//   function makeHelloFunction()
//   {
//     const message = "Hello"

//      function sayHello()
//      {
//       console.log(message)
//      }
//      return sayHello
//   }
//    const sayHello = makeHelloFunction()

//   //  console.log(message) error      
//   sayHello()

const App = () =>
{

  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
   
   const handleFormSubmit = (e) =>
   {
    e.preventDefault();
    console.log("Email: "+email, "Password: "+password)
   }

  (() =>
  {
    console.log("I am Self executing function")
  })()

  //coercion or Type Casting
  // 1. x=2
  // 2.const explicit = String(x)   //explicit
  // 3.const implicit = x+""        //implicit
  let a = 10
  let b = String(a)

  console.log("Number a:",a)
  console.log(typeof a)
  console.log("Number a:",b)
  console.log(typeof b)

  //Passing Data between components

  const childCallbackFunction = () =>
  {
    console.log("Call back function called in Parent")
    console.log("Data from Child:")
  }

  return<div>
    Hello This is Parent Component
    <ChildComponent prop1="prop1 Data" prop2="prop2 Data" CallbackFunction={childCallbackFunction}/>

    <form onSubmit={handleFormSubmit}>
      <h2>Login Form</h2>
      <label>
        Email:
        <input type='email' defaultValue={email} onChange={e=>setEmail(e.target.value)} required/>
      </label>

      <label>
        Password:
        <input type='password' defaultValue={password} onChange={e=>setPassword(e.target.value)} required/>
      </label>
      <button>Submit</button>
    </form>
    </div>

}
 


const ChildComponent = (props)=>
{
  console.log("Props 1:", props.prop1)
  console.log("Props 2:", props.prop2)


  return<div>
    Child Component<br/>
    prop1 received from Parent:{props.prop1}<br/>
    prop2 received from Parent:{props.prop2}<br/>
    <button onClick={()=>props.CallbackFunction('My Child')}>Click ME</button>
  </div>
}

export default App;





