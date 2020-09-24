import React from 'react';
import '/home/aswathi/dailymart/src/components/pages/Login/Login.css'
 
function Login() {
   
    return (
        
    
<div className="login-form-style">     
<div className="container uk-margin-large-top">
<div className="row adjust_container">
  <div className="col-md-6">
    <form className="formstyle">
    <div class="uk-button-group">
        <button class="uk-button uk-margin-large-left uk-button-danger">Button</button>&nbsp;&nbsp;
        <button class="uk-button uk-button-danger">Button</button>
    </div><br/><br/>
    <div class="uk-margin-large-left">
    <div class="uk-margin-large-left">    
        <a href="" class="uk-icon-button back-color1" uk-icon="twitter"></a>
                <a href="" class="uk-icon-button  uk-margin-medium-left  " uk-icon="facebook"></a>
    </div></div>
      <div><br/>
             <label className="labstyle">OR</label>
      </div><br/>
                <div> 
          <input type="text" id="username" className="text_style" placeholder="Mobile/Email "/>
      </div>
      <div>
      <button class="uk-button uk-button-default disabled">Login Using OTP</button>
          
      </div>
    </form>
  </div>
<div className="col-md-6">
  <form className="formstyle1"> 
    
      
      <p className="download1"> Shopping at fingertips!! Download our app</p>
  </form>
  </div>
 </div>
</div> 
</div>

    )
}
export default Login;