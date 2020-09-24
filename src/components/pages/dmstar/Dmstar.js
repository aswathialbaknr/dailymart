import React from 'react';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
 
import logo from'/home/aswathi/dailymart/src/assets/Dmstar.png'
import delivery from'/home/aswathi/dailymart/src/assets/delivery.webp'
import cashback from'/home/aswathi/dailymart/src/assets/Monthly.webp'
import slots from'/home/aswathi/dailymart/src/assets/Priority.webp'
import offers from'/home/aswathi/dailymart/src/assets/Additional.webp'
import benefits from'/home/aswathi/dailymart/src/assets/benefits.webp'
import back from'/home/aswathi/dailymart/src/assets/back.jpeg'
function Dmstar () {
  
  return ( 
      <div >
         <Header/>
        {/* 1st container  */}
        <div class="uk-container">
       
        <form>
            <div class="panel">
                    {/* <div class="logo" >
                        <img src={logo} width="300px" height="270px" alt=""/>
                    </div>
                    <div class="special-price">
                        <label class="join-now">Join at a special price of just</label>
                        <div>
                            <label class="rs599">Rs 599</label>&nbsp;&nbsp;
                            <label class="rs299">Rs 299/</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label class="month">6 months</label>
                         </div>
                         <button class="uk-button-primary">JOIN NOW</button><br/><br/>
                         <label class="cancel">You can cancel anytime within first 15 days</label><br/><br/>
                         <label class="coupon">proceed to see available coupons</label>
                    </div> */}
            </div>
            {/* <div class="row">
            <div class="column">
               <div class="text1">No Delivery Charge</div>
               <div class="text2">On orders above Rs 600</div>
            </div>
            <div class="column">
                 <div class="text1">Rs 300 Cashback</div>
                <div class="text2">Rs 100 Cashback on first order of any 3 months</div>
            </div>
            <div class="column">
            <span uk-icon="icon: check; ratio: 2"></span>
               <div class="text1">Access to Priority Slots</div>
               <div class="text2">bbstar members always get preference</div>
            </div>
            </div> */}

            <div class="image">
                <img src={back} alt=""/>
                <img src={delivery} alt=""/>
                <img src={cashback} alt=""/>
                <img src={slots} alt=""/>
                <img src={offers} alt=""/>
                <img src={benefits} alt=""/>
            </div>

            <div class="membership">
                <h3 class="uk-heading-divider">Know more about bbstar Membership Program</h3>

            </div>
         </form>
           
      </div>
      <Footer/>
      </div>
    

  );
}


export default Dmstar;















































 