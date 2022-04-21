import React from 'react';
import '../index.scss';
import Navigationbar from '../components/navigationbar/navigationbar';
import background from '../assets/images/loginbg.png';


function Login() {

  const myStyle={
    backgroundImage: `url(${background})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div id='loginpage' className='container-fluid' style={myStyle}>
      <Navigationbar bgcolor="white" navcolor="black" />
    </div>
  )
}

export default Login