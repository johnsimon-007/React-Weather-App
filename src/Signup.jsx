import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(props) {
    const navigate = useNavigate();
    const user = props.user;
    const setUser = props.setUser;

    const [eusername, setEusername] = useState("");
    const [epassword, setEpassword] = useState("");

    function handleuinput(e) {
        setEusername(e.target.value)
    }
    function handlepinput(e) {
        setEpassword(e.target.value)
    }

    function adduser(){
        setUser([...user, {username: eusername, password: epassword}])
        navigate("/login");

    }

    return (
        <div>
            <div className="bg-black p-10">
                <div className="bg-gray-800 p-10 rounded-lg flex flex-col items-center bg-cover bg-center min-h-screen"
                    style={{ backgroundImage: "url('/bgActivities.jpg')" }} >
                    <h1 className="text-white text-7xl font-bold ">Hello there!</h1>
                    <p className="text-2xl mt-2 font-bold">Welcome to our website.</p>
                    <div className="flex flex-col  mt-5">
                        <input type="text" onChange={handleuinput} placeholder="Username" className="w-72 p-3 mt-5 rounded-lg bg-gray-700 text-white" />

                        <input type="password" onChange={handlepinput} placeholder="Password" className="w-72 p-3 mt-5 rounded-lg bg-gray-700 text-white" />
                        <input type="password" placeholder="Confirm Password" className="w-72 p-3 mt-5 rounded-lg bg-gray-700 text-white" />
                        <button onClick={adduser} className="w-72 p-3 mt-5 rounded-lg bg-blue-500 text-white font-bold">Signup</button>
                    </div>
                    <p className="text-white"> Already have an account? <Link to={"/login"} className="underline text-blue-500">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup;