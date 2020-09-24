import React from 'react';
 
import '/home/aswathi/dailymart/src/components/pages/home/Home.css';
import slide1 from'/home/aswathi/dailymart/src/assets/2008003_dairy-cheese_460_North.webp'
import slide2 from'/home/aswathi/dailymart/src/assets/2008009_exotic-fruits_460.webp'
import slide3 from'/home/aswathi/dailymart/src/assets/2008011_bb-home_460.webp'
import slide4 from'/home/aswathi/dailymart/src/assets/2008012_kitchen-essentials_460.webp'
import slide5 from'/home/aswathi/dailymart/src/assets/Onam.webp'
import slide6 from'/home/aswathi/dailymart/src/assets/Health-Safety.webp'
import slide7 from'/home/aswathi/dailymart/src/assets/DairyStore.webp'
import slide8 from'/home/aswathi/dailymart/src/assets/shimla-apple.webp'
import card1 from'/home/aswathi/dailymart/src/assets/onion.webp'
import card2 from'/home/aswathi/dailymart/src/assets/potato.webp'
import card3 from'/home/aswathi/dailymart/src/assets/tomato.webp'
import card4 from'/home/aswathi/dailymart/src/assets/cucumber.webp'
import card5 from'/home/aswathi/dailymart/src/assets/capsicum-green.webp'
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import bank1 from'/home/aswathi/dailymart/src/assets/digi-bank.webp'
import bank2 from'/home/aswathi/dailymart/src/assets/HSBC-BANK.webp' 
import bank3 from'/home/aswathi/dailymart/src/assets/ICICI-BANK.webp'
import bank4 from'/home/aswathi/dailymart/src/assets/IDBI-BANK.webp'
import season1 from'/home/aswathi/dailymart/src/assets/GANESH-idols.webp'
import season2 from'/home/aswathi/dailymart/src/assets/chocolates-sweets.webp'
import season3 from'/home/aswathi/dailymart/src/assets/gifting-store.webp'
import season4 from'/home/aswathi/dailymart/src/assets/pooja-need.webp'
import fruit1 from'/home/aswathi/dailymart/src/assets/Organic-StoreNew.webp'
import fruit2 from'/home/aswathi/dailymart/src/assets/fresh-Fruits.webp'
import fruit3 from'/home/aswathi/dailymart/src/assets/Daily-Veggies.webp'
import fruit4 from'/home/aswathi/dailymart/src/assets/Cuts-Sprouts.webp'
import fruit5 from'/home/aswathi/dailymart/src/assets/Exotcs.webp'
import Staples1 from'/home/aswathi/dailymart/src/assets/Atta-Flour.webp'
import Staples2 from'/home/aswathi/dailymart/src/assets/RiceProducts.webp'
import Staples3 from'/home/aswathi/dailymart/src/assets/Cooking-OilsGhee.webp'
import Staples4 from'/home/aswathi/dailymart/src/assets/Salt-Sugar-Jaggery.webp'
import Snacks1 from'/home/aswathi/dailymart/src/assets/chips-namkeensNEW.webp'
import Snacks2 from'/home/aswathi/dailymart/src/assets/biscuits-cookiesNew.webp'
import Snacks3 from'/home/aswathi/dailymart/src/assets/frozen-snacksNew.webp'
import Snacks4 from'/home/aswathi/dailymart/src/assets/sauce-spreadsNEW.webp'
import Snacks5 from'/home/aswathi/dailymart/src/assets/soups-noodle-pastNEW.webp'
import Drink1 from'/home/aswathi/dailymart/src/assets/teaNew.webp'
import Drink2 from'/home/aswathi/dailymart/src/assets/coffeeNew.webp'
import Drink3 from'/home/aswathi/dailymart/src/assets/health-drinkNEW.webp'
import Drink4 from'/home/aswathi/dailymart/src/assets/juices-cold-NEW.webp'
import Homekitchen from'/home/aswathi/dailymart/src/assets/Home-Kitchen.png'
import PM from'/home/aswathi/dailymart/src/assets/PrecautionaryMeasure.png'
import DOM from'/home/aswathi/dailymart/src/assets/DOW.png'
import CS from'/home/aswathi/dailymart/src/assets/ComboStore.png'
import EggsMeet from'/home/aswathi/dailymart/src/assets/EggsMeatFish.png'
import DMstar from'/home/aswathi/dailymart/src/assets/dmstar-01.jpeg'
import leftArrow from'/home/aswathi/dailymart/src/assets/LeftArrow.png'
import rightArrow from'/home/aswathi/dailymart/src/assets/rightArrow.png'
import Header from '../../header/Header';
import Footer from '../../footer/Footer';

 
function Home() {
  
  return ( 
      <div >
         
        {/* 1st container  */}
        <div class="uk-container-fluid">
             
            <Header/>
            
            {/* slideshow1 */}
         
        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 350" class=" ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom uk-padding-remove-left ">
            <ul class="uk-slideshow-items   ">
                <li>
                    <img src={slide1} class=" slide1 " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide2}class="slide1 " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide3} class="slide1 " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide8} class="slide1 " alt="" uk-cover/>
                </li>
            </ul>
        </div>
      <br/>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
    </div><br/>
        {/* slideshow1 end */}           
             </div> 
      {/* 1stnd container end */}
      {/* 2rd container  */}
    <div class="uk-container">
      <div class="uk-flex   ">
          <div class="">
            <img src={Homekitchen} class="  " alt="" uk-cover/>&nbsp;&nbsp;&nbsp;
            <img src={EggsMeet} class="  " alt="" uk-cover/>&nbsp;&nbsp;&nbsp;
            <img src={PM} class="  " alt="" uk-cover/>&nbsp;&nbsp;&nbsp;
            <img src={DMstar} class=" img-star-home " alt="" uk-cover/>&nbsp;&nbsp;&nbsp;
            <img src={CS} class="  " alt="" uk-cover/>&nbsp;&nbsp;&nbsp;
            <img src={DOM} class="  " alt="" uk-cover/>
           </div>
      </div>
    </div><br/>
    {/* 2nd container end */}
    
    {/* 3rd container*/}
    <div class="uk-container uk-margine-left">  
        {/* slideshow2 */}
         
        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 450" class="uk-padding-remove-bottom ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom uk-width-expand">
            <ul class="uk-slideshow-items uk-margine-large-left   ">
    <li>
                    <img src={slide5} class=" uk-width-2xlarge uk-margine-left  slide-style " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide6} class=" uk-width-2xlarge uk-margine-left  slide-style" alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide7} class=" uk-width-2xlarge  slide-style " alt="" uk-cover/>
                </li>
                
    </ul>

    <a class="uk-position-center-left uk-position-small uk-margine-right  uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"><img src={leftArrow} class="arrow-img " alt="" /></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-margine-left " href="#" uk-slidenav-next uk-slideshow-item="next"><img src={rightArrow} class="arrow-img " alt="" /></a>

</div>
</div>
        {/* slideshow2 end */}
         {/* bank images */}
         <div class="row row-style "><br/>
            <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom   head-block  "><h3 class="uk-align-center "> Bank Offers</h3></label>  
        </div><br/>
         <div class="row">
             
            <div class="col-3">
                 
                    <img src={bank1} className="  "  alt="slide1"/>
                
            </div>
            <div class="col-3">
                <img src={bank2} className="  "  alt="slide1"/>
            </div>
            <div class="col-3">
                <img src={bank3} className="  "  alt="slide1"/>
            </div>
            <div class="col-3">
                <img src={bank4} className="  "  alt="slide1"/>
            </div>
         </div>
         {/* bank images end */}
         {/* baSeason's Must-havesnk images */}
         <div class="row row-style"><br/>
         <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom uk-padding-remove-top   head-block  "><h3 class="uk-align-center ">Season's Must-haves</h3></label>  

        </div><br/>
         <div class="row ">
             
            <div class="col-3 ">
                <div class="season1">
                    <img src={season1} className=" image-radious "  alt="slide1"/>
                </div> 
            </div>
            <div class="col-3">
            <div class="season1">
                    <img src={season2} className=" image-radious "  alt="slide1"/>
                </div>
            </div>
            <div class="col-3">
            <div class="season1">
                    <img src={season3} className=" image-radious "  alt="slide1"/>
                </div>
            </div>
            <div class="col-3">
            <div class="season1">
                    <img src={season4} className=" image-radious "  alt="slide1"/>
                </div>
            </div>
         </div>
         {/* Season's Must-haves images end */}
         {/* fruits and vegitable corner */}
         <div class="row row-style"><br/>
         <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom   head-block  "><h3 class="uk-align-center ">Fruits & Vegetables Corner</h3></label>  

        </div><br/>
         <div class="row  ">
            <div class="col-6 uk-padding-remove-right  ">
                <div class="season1  uk-margin-bottom">
                <img src={fruit1} className="  image-radious "   alt="slide1"/>
                </div>
            </div>
            <div class="col-6  ">
                <div class="row">
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right   uk-margin-bottom">
                <img src={fruit2} className="  image-radious "   alt="slide1"/>
                </div>
                    </div><br/>
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-bottom">
                <img src={fruit3} className="  image-radious "   alt="slide1"/>
                </div>
                    </div>
                </div>
                <div class="row uk-padding-remove-bottom uk-margine-top">
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-small-top uk-margin-bottom">
                <img src={fruit4} className="  image-radious "   alt="slide1"/>
                </div>
                    </div><br/>
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-small-top uk-margin-bottom">
                <img src={fruit5} className="  image-radious "   alt="slide1"/>
                </div>
                    </div>
                </div>
            </div>
        </div>
         {/* fruits and vegitable corner end */}
          {/* Daily Staples */}
          <div class="row row-style"><br/>
         <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom   head-block  "><h3 class="uk-align-center ">Your Daily Staples</h3></label>  

        </div><br/>
        <div class="row ">
             
             <div class="col-3 ">
                 <div class="season1">
                     <img src={Staples1} className=" image-radious "  alt="slide1"/>
                 </div> 
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Staples2} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Staples1} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Staples4} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
          </div>
          {/* Your Daily Staples end */}
          {/* The Snacks Corner */}
          <div class="row row-style"><br/>
         <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom   head-block  "><h3 class="uk-align-center ">Fruits & Vegetables Corner</h3></label>  

        </div><br/>
        <div class="row  ">
            <div class="col-6 uk-padding-remove-right  ">
                <div class="season1  uk-margin-bottom">
                <img src={Snacks1} className="  image-radious "   alt="slide1"/>
                </div>
            </div>
            <div class="col-6  ">
                <div class="row">
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right   uk-margin-bottom">
                <img src={Snacks2} className="  image-radious "   alt="slide1"/>
                </div>
                    </div><br/>
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-bottom">
                <img src={Snacks3} className="  image-radious "   alt="slide1"/>
                </div>
                    </div>
                </div>
                <div class="row uk-padding-remove-bottom uk-margine-top">
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-small-top uk-margin-bottom">
                <img src={Snacks4} className="  image-radious "   alt="slide1"/>
                </div>
                    </div><br/>
                    <div class="col-6  ">
                    <div class="season1 uk-margin-right uk-margin-small-top uk-margin-bottom">
                <img src={Snacks5} className="  image-radious "   alt="slide1"/>
                </div>
                    </div>
                </div>
            </div>
        </div>
          {/* The Snacks Corner end */}
          {/* Drinks & Beverages */}
          <div class="row row-style"><br/>
         <label class=" uk-child-width-1-4@m uk-child-width-1-2@s uk-text-large uk-padding-remove-bottom   head-block  "><h3 class="uk-align-center ">Drinks & Beverage</h3></label>  

        </div><br/>
        <div class="row ">
             
             <div class="col-3 ">
                 <div class="season1">
                     <img src={Drink1} className=" image-radious "  alt="slide1"/>
                 </div> 
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Drink2} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Drink3} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
             <div class="col-3">
             <div class="season1">
                     <img src={Drink4} className=" image-radious "  alt="slide1"/>
                 </div>
             </div>
          </div><br/>
          {/* Drinks & Beverages End */}
          
            {/* about the shope */}
             <div class="uk-card uk-card-default uk-card-body uk-margin-left about-style "><h2>Bigbasket – online grocery store</h2> <br/>
             Did you ever imagine that the freshest of fruits and vegetables, top quality pulses and food grains, dairy products and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options
             <br/>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks branded foods reach you in time
             <br/>
             <ul>
                <li>
                    Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.
                </li>  
                <li>
                    Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.
                </li>  
                <li>
                    BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.
                </li>
             </ul>
              
             <button class="uk-button uk-button-default uk-button-large"></button>
     
                 </div>
 
            
            {/* about the shope end */}




        
    </div>
        {/* 3rd container end */}
      
      
      <Footer/>
      </div>
    

  );
}


export default Home;

