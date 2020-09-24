import React from 'react';
import '../../components/footer/Footer.css';
import third from '../../assets/Google-App-store-icon.png';
import fourth from '../../assets/Apple-App-store-icon.png';
import fifth from '../../assets/vulnerability-scanner-2.png';
import pay1 from '../../assets/visa.png';
import pay2 from '../../assets/master.png';
import pay3 from '../../assets/paytm.png';
import pay4 from '../../assets/mobik.png';
import pay5 from '../../assets/rupay.png';
import pay6 from '../../assets/americane.png';
 
   
 
function Footer() {
  
  return ( 
      <div>
          
        {/* Footer container  */}
    <div class="uk-container uk-margin-medium-top">
        {/* Footer container 1st row */}
        <div class="  ">
        <div className="row ">
          <div className="col-3">
           <p className="uk-text-danger">Daily Mart</p> 
            <ul class="uk-list">
                <li><a class="uk-link-muted uk-text-small" href="#"> About Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">In News</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Green bigbasket</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Privacy Policy</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Affiliate</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Terms and Conditions</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Careers At bigbasket</a></li>
                {/*<li><a class="uk-link-muted uk-text-small" href="#">dm Instant</a></li>
             <li><a class="uk-link-muted uk-text-small" href="#">dm Daily</a></li> */}
            </ul>
           </div>
           <div className="col-3">
           <p className="uk-text-danger">Help</p>
             
            <ul class="uk-list">
                <li><a class="uk-link-muted uk-text-small" href="#">FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Contact Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">bb Wallet FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">bb Wallet T&Cs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="#">Vendor Connect</a></li>
            </ul>
           </div>
            <div className="col-3">
            <p className="uk-text-danger">Download With App</p>
            
            <a href="#" class=""><img src={third} className="google "  alt="google icon"/></a><br/>
            <a href="#" class=""><img src={fourth} className="apple"  alt="app icon"/></a>
           </div>
            <div className="col-3">
            <p className="uk-text-danger">Get Social With Us</p>  
                {/* Social icons */}
                <a class="facebookBtn smGlobalBtn" href="#" target="_blank"></a>
                <a href="" class="uk-icon-button uk-margin-small-right back-color1" uk-icon="twitter"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right  back-color2" uk-icon="facebook"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right  back-color3" uk-icon="pinterest"></a>
                <a href="" class="uk-icon-button  uk-margin-small-right  back-color4" uk-icon="youtube"></a><br/><br/>
                <a href="#" class=""><img src={fifth} className=" "  alt="app icon"/></a> 
                {/* social icons end */}
           </div>
        </div>
        </div>
           {/* Footer container 1st row end */}
           {/* Footer container 2st row */}
          <div className="row uk-margin-small-top">
           <div className="col-3">
           <p className="uk-text-danger"> POPULAR CATEGORIES:</p> 
             
           </div>
           <div className="col-9">
               <a class="uk-link-muted uk-text-small" href="#">Other Oils</a>,
               <a class="uk-link-muted uk-text-small" href="#">Wheat Atta</a>
               <a class="uk-link-muted uk-text-small" href="#">Washing Powders</a>,
               <a class="uk-link-muted uk-text-small" href="#">Ghee</a>
               <a class="uk-link-muted uk-text-small" href="#">Liquid Soaps & Bars</a>,
               <a class="uk-link-muted uk-text-small" href="#">Tea</a>
               <a class="uk-link-muted uk-text-small" href="#">Cut Fruits & Vegetables</a>,
               <a class="uk-link-muted uk-text-small" href="#">Namkeen</a>
               <a class="uk-link-muted uk-text-small" href="#">Organic F&V</a>,
               <a class="uk-link-muted uk-text-small" href="#">Exotic Fruits</a>
               <a class="uk-link-muted uk-text-small" href="#">Shampoo</a>,
               <a class="uk-link-muted uk-text-small" href="#">Infant Formula</a>
               <a class="uk-link-muted uk-text-small" href="#">Eggs</a>,
               <a class="uk-link-muted uk-text-small" href="#">Other Juices</a>
               <a class="uk-link-muted uk-text-small" href="#">Baby Cereal</a>
           </div>
          </div><br/>
          <div className="row">
           <div className="col-3">
           <p className="uk-text-danger"> POPULAR CATEGORIES:</p>
           </div>
           <div className="col-9">
               <a class="uk-link-muted uk-text-small" href="#">Other Oils</a>,
               <a class="uk-link-muted uk-text-small" href="#">Wheat Atta</a>
               <a class="uk-link-muted uk-text-small" href="#">Washing Powders</a>,
               <a class="uk-link-muted uk-text-small" href="#">Ghee</a>
               <a class="uk-link-muted uk-text-small" href="#">Liquid Soaps & Bars</a>,
               <a class="uk-link-muted uk-text-small" href="#">Tea</a>
               <a class="uk-link-muted uk-text-small" href="#">Cut Fruits & Vegetables</a>,
               <a class="uk-link-muted uk-text-small" href="#">Namkeen</a>
               <a class="uk-link-muted uk-text-small" href="#">Organic F&V</a>,
               <a class="uk-link-muted uk-text-small" href="#">Exotic Fruits</a>
               <a class="uk-link-muted uk-text-small" href="#">Shampoo</a>,
               <a class="uk-link-muted uk-text-small" href="#">Infant Formula</a>
               <a class="uk-link-muted uk-text-small" href="#">Eggs</a>,
               <a class="uk-link-muted uk-text-small" href="#">Other Juices</a>
               <a class="uk-link-muted uk-text-small" href="#">Baby Cereal</a>
           </div>
          </div><br/>
          <div className="row">
           <div className="col-3">
           <p className="uk-text-danger"> POPULAR CATEGORIES:</p>
           </div>
           <div className="col-9">
               <a class="uk-link-muted uk-text-small" href="#">Other Oils</a>,
               <a class="uk-link-muted uk-text-small" href="#">Wheat Atta</a>
               <a class="uk-link-muted uk-text-small" href="#">Washing Powders</a>,
               <a class="uk-link-muted uk-text-small" href="#">Ghee</a>
               <a class="uk-link-muted uk-text-small" href="#">Liquid Soaps & Bars</a>,
               <a class="uk-link-muted uk-text-small" href="#">Tea</a>
               <a class="uk-link-muted uk-text-small" href="#">Cut Fruits & Vegetables</a>,
               <a class="uk-link-muted uk-text-small" href="#">Namkeen</a>
               <a class="uk-link-muted uk-text-small" href="#">Organic F&V</a>,
               <a class="uk-link-muted uk-text-small" href="#">Exotic Fruits</a>
               <a class="uk-link-muted uk-text-small" href="#">Shampoo</a>,
               <a class="uk-link-muted uk-text-small" href="#">Infant Formula</a>
               <a class="uk-link-muted uk-text-small" href="#">Eggs</a>,
               <a class="uk-link-muted uk-text-small" href="#">Other Juices</a>
               <a class="uk-link-muted uk-text-small" href="#">Baby Cereal</a>
           </div>
          </div><br/>
          <div className="row">
           <div className="col-3">
           <p className="  uk-text-danger"> POPULAR CATEGORIES:</p>
           </div>
           <div className="col-9">
               <a class="uk-link-muted uk-text-small" href="#">Cash on delivery</a>,
               <a href="#" class=""><img src={pay1} className="pay-img"  alt="google icon"/></a>
               <a href="#" class=""><img src={pay2} className="pay-img"  alt="app icon"/></a>
               <a href="#" class=""><img src={pay3} className="pay-img"  alt="google icon"/></a>
               <a href="#" class=""><img src={pay4} className="pay4-img"  alt="app icon"/></a>
               <a href="#" class=""><img src={pay5} className="pay-img"  alt="google icon"/></a>
               <a href="#" class=""><img src={pay6} className="pay-img"  alt="app icon"/></a>
               
           </div>

          </div>
        {/* Footer container 2st row end */}
        <a href="#" uk-totop uk-scroll></a>
         </div>
        {/* Footer container  */} 
        
      </div>
    

  );
}


export default Footer;

