import { useEffect, useState } from "react";

const Profile = () => {

    const [student, setStudent] = useState
        ({
            Name: "Rohit Patidar",
            Age: 20,
            Address: "Neemuch",
            Course: "MERN"
        })
    const updateStudentDeatils = () => 
    {
        setStudent(studentTemp => 
        {
            return { ...student, Course: "DSA" }
        })
    }

    console.log("Profile Started")
    useEffect(() => 
    {
        setTimeout(() => {
            console.log("Timer is out!")
        }, 2000)
    },[])
    console.log("Render Started")
    return <div style={{ backgroundColor: "orange", height: "80%", width: "80%", margin: "10px", padding: "10px" }}>
        Profile page
        <br />
        Name: {student.Name}<br />
        Age: {student.Age}<br />
        Address: {student.Address}<br />
        Course: {student.Course}<br />
        <button onClick={updateStudentDeatils}>Upadte Deatils</button>
    </div>
}


export default Profile;