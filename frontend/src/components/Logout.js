import React, { useContext } from 'react';
import UserContext from '../context/ContextCreator';
import { useNavigate } from 'react-router-dom'

export default function Logout(props) {
    let navigate= useNavigate()
    let user = useContext(UserContext)
    function logout() {
        localStorage.removeItem("user");
        user.setUser(null)
        navigate("/")
    }
    return <div onClick={logout} className="sign-btn">Sign out</div>;
}
