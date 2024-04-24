import React from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';

const Nav = () => {
    let auth = localStorage.getItem('user')
    auth = JSON.parse(auth)
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate('/Login')
    }

    // const fromDB = auth.result.profile;
    // const path ="../../../../SERVER-SIDE/src/"+fromDB.replace(/\\/g, '/');
    // console.log(auth.result.profile);
    // console.log(path);

    return (
        <div className='NavBar-container'>
            <ul className='navbaritems  NavBar'>
                <div className='navbar-left-items'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Project'>Project</Link></li>
                    {/* <li><Link to='/Task'>Task</Link></li>
                    <li><Link to='/Logs'>Log</Link></li> */}
        </div>
                <div className='navbar-right-items'>
                    {auth ? <>
            {
                auth.result.role == 1 ?
                <div className='d-flex gap-3'>
                            <li><Link to='/SignUp'>Add User</Link></li>
                            <li><Link to='/add-new-project'>Add-project</Link></li>
                </div>: <></>
            } < img src = '' alt = 'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png' style = {{
                    height: "25px", width: "25px"
                }}/><Link to='/EditDetails' style={ { color: "Black", textDecoration: "None", fontSize: "24px" }}>😊 Welcome {auth.result.name}</Link>
            <li><Link onClick={handleLogout} to='/Login' className='text-danger'>Logout</Link></li> < />: <>
            <li><Link to='/Login'>Login</Link></li> < />
            }
        </div>
        </ul>
        </div>
    )
}

export default Nav