import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const[ruser, setRuser] = useState(true);
    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");
    const user = props.user;
    const setUser = props.setUser;
    

    function checkuser() {
        var userfound=false
        user.forEach(function(item){
            if(item.username === eusername && item.password === epassword){
                console.log("logged in");
                userfound=true;
                setRuser(true);
                navigate("/landing",{state:{username: eusername}});
            }
          
        })
        if(userfound===false){
                console.log("not logged in");
                setRuser(false);
            }

    }
    function handleuinput(e) {
        setEusername(e.target.value)
    }
    function handlepinput(e) {
        setEpassword(e.target.value)
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center bg-cover bg-center min-h-screen"
                style={{ backgroundImage: "url('/bgActivities.jpg')" }} >
                <h1 className="text-white text-7xl font-bold ">Let's get Started!</h1>
                <p className="text-2xl  mt-2 font-bold">We will help you to manage your activities!</p>
                {ruser?<p className="text-2xl text-green-500"></p>:<p className="text-2xl text-red-600">Please Signup First!!</p>}
                
                <div className="flex flex-col  mt-5">
                    <input type="text" onChange={handleuinput} placeholder="Username" className="w-72 p-3 mt-5 rounded-lg bg-gray-700 text-white" />
                    
                    <input type="password" onChange={handlepinput} placeholder="Password" className="w-72 p-3 mt-5 rounded-lg bg-gray-700 text-white" />

                    <button onClick={checkuser} className="w-72 p-3 mt-5 rounded-lg bg-blue-500 text-white font-bold">Log in</button>
                </div>
                <p className="text-white"> Don't have an account? <Link to={"/"} className="underline text-blue-500">Sign up!</Link></p>
            </div>
        </div>

    )
}
export default Login;