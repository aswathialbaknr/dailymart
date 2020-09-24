import React from 'react';
 
import './SnacksBrandedFoods.css';
import slide2 from'/home/aswathi/dailymart/src/assets/SnackSlide1.jpg'
import slide3 from'/home/aswathi/dailymart/src/assets/SnackSlide2.jpg'
import slide4 from'/home/aswathi/dailymart/src/assets/SnackSlide3.jpg'
import slide8 from'/home/aswathi/dailymart/src/assets/SnackSlide4.jpg'
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import card1 from'/home/aswathi/dailymart/src/assets/Snack-britannia-biscuits-little-hearts.jpg'
import card2 from'/home/aswathi/dailymart/src/assets/Snack-britannia-bourbon-chocolate-cream-biscuits.jpg'
import card3 from'/home/aswathi/dailymart/src/assets/Snack-britannia-nutri-choice-hi-fibre-digestive-biscuits.jpg'
import card4 from'/home/aswathi/dailymart/src/assets/Snack-kissan-fresh-tomato-ketchup.jpg'
import card5 from'/home/aswathi/dailymart/src/assets/Snack-lays-potato-chips-american-style-cream-onion-flavour.jpg'
import card6 from'/home/aswathi/dailymart/src/assets/Snack-lays-potato-chips-indias-magic-masala-party-pack.jpg'
import card7 from'/home/aswathi/dailymart/src/assets/Snackmaggi-2-minute-instant-noodles-masala.jpg'
import card8 from'/home/aswathi/dailymart/src/assets/Snackmaggi-2-minute-instant-noodles-masala.jpg'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
  
function  SnacksBrandedFoods () {
  
    return ( 
        <div >
         
        <Header/>
      {/* slideshow1 */}
      <div class="uk-container "> <br/>
<div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 350" class=" ">
<div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom ">
    <ul class="uk-slideshow-items   ">
        <li>
            <img src={slide2} class=" Slide1  " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide3} class=" Slide1 " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide4} class=" Slide1 " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide8} class="Slide1  " alt="" uk-cover/>
        </li>
    </ul>
</div>
 
</div>
</div> 
{/* slideshow1 end */}    
 <br/>
{/* side nave and main section */}
<div class="uk-container ">
<div class="row">
    <div class="col-3 ">
        <div class="uk-margin-left uk-padding-remove-right">
        <div class="uk-width-expand  ">
            <ul class="uk-nav uk-nav-default">
            <label class="  category-style uk-margin-remove-bottom">Category</label>  
                <li class="uk-parent">
                <a class="parent uk-margin-remove-bottom" href="#">Snacks & Branded Foods</a>
                <ul class="uk-nav-sub">
                            <li><a class="sub-head" href="#">Biscuits & Cookies</a></li>
                            <li><a class="sub-head" href="#">Breakfast Cereals</a></li>
                            <li><a class="sub-head" href="#">Chocolates & Candies</a></li>
                            <li><a class="sub-head" href="#">Frozen Veggies & Snacks</a></li>
                            <li><a class="sub-head" href="#">Indian Mithai</a></li>
                            <li><a class="sub-head" href="#">Noodle, Pasta, Vermicelli</a></li>
                            <li><a class="sub-head" href="#">Pickles & Chutney</a></li>
                            <li><a class="sub-head" href="#">Ready To Cook & Eat</a></li>
                            <li><a class="sub-head" href="#">Snacks & Namkeen</a></li>
                            <li><a class="sub-head" href="#">Spreads, Sauces, Ketchup</a></li>
                </ul>
                 
    </li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Brand</label> 
<div class="uk-inline search-brand">
    <span class="uk-form-icon" uk-icon="icon: search"></span>
    <input class="uk-input search-brand   "placeholder="Search by brand" type="text"/>
</div>
<div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
<ul class="uk-list">

<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">&Me </label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">4700BC</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Abbies</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">  ACT II</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Agnesi</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">ALPENLIEBE</label></label>
</li>

</ul>

</div>
</div>
<div>


<label class=" category-style uk-margin-remove-bottom">  Product Type</label>  
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Plain</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text"> Roasted  </label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text"> Snack  </label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text"> Breakfast  </label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text"> Health Food Foodsted  </label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Country Of Origin</label> 
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">India</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">UAE</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">UK</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Peru</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Jappan</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Thailand</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">  Allergen Info</label>
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Gluten Free </label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Nut Free</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Dairy Free</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Nut Free</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Trans Fat</label></label></li>

</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Shapes</label> 

<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Rectangular</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Fusilli</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Macaroni</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Penne</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Price</label> 
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Less than Rs 20</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text"> Rs 21 to Rs 50</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Rs 51 to Rs 100</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Rs 101 to Rs 200 </label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Rs 201 to Rs 500</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">More than Rs 501</label></label></li>


</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Discount</label> 
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Up to 5%</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">5%-10%</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">10%-15%</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">15%-25%</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">More than 25%</label></label></li>


</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Pack Size</label> 
<div class="uk-inline search-brand">
    <span class="uk-form-icon" uk-icon="icon: search"></span>
    <input class="uk-input search-brand   "placeholder="Search by pack size " type="text"/>
</div>
<div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
<ul class="uk-list">

<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  chech-text">0.5 g Pouch</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">100 Pellets</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">110 Pellets</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">200 Pellets</label></label></li> 
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">300 Pellets</label></label></li> 
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">500 Pellets</label></label></li> 

</ul>

</div>
</div>

    </div>
    </div>
    <div class="col-9">
 {/* fruits and veg cards */}
{/* fruits header */}
<div class="row  "> 
<div class="col-9">
<label class="header-label   ">Snacks & Branded Foods </label>  
</div>
<div class="col-3">
<select class="uk-select popularity uk-width-medium "> 
    <option>popularity</option>
    <option>Price-High to Low</option>
    <option>Price-Low to High</option>
    <option>alfabetical</option>
    <option>Rupee Saving High to low</option>
    <option>Rupee Saving High to low</option>
    <option>% off High to low</option>                    
</select>
</div>
</div>
<div class="row uk-margin-medium-top"><hr></hr>

<button class="uk-button  uk-width-small fruit-btn-grp uk-padding-remove-left uk-padding-remove-right  uk-button-small  "> <span uk-icon="tag"></span> <label class="  uk-margin-small-left ">ALL PRODUCTS</label></button>&nbsp;&nbsp;
<button class="uk-button  uk-width-small fruit-btn-grp uk-padding-remove-left uk-padding-remove-right  uk-button-small  "> <span uk-icon="tripadvisor"></span> <label class="  uk-margin-small-left ">DM Express</label></button>
</div>
{/* fruits header  end*/}
{/* fruits and veg cards */}
<div class="row">
<div class="uk-child-width-1-4@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card1} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Britannia-biscuits  </h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card2} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Britannia-bourbon-chocolate </h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card3} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Britannia-nutri-choice </h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card4} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">kissan-fresh-tomato-ketchup</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card5} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Flavoured Cashews - Thai Chilli</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card6} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Flavoured Cashews - Creamy Onion</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card7} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">FreAmulsho</h3>
    <h3 class="items ">Pure Ghee</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card8} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal  </h3>
    <h3 class="items ">Black Diamond/Fard Dates</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card1} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Nutflix Trail Mix</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card2} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Dry Dates/Chuara</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card3} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Diamond/Mazafati Dates</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card4} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Almond/Badam - Californian, Giri</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card5} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Flavoured Cashews - Thai Chilli</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card6} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal</h3>
    <h3 class="items ">Flavoured Cashews - Creamy Onion</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card7} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">FreAmulsho</h3>
    <h3 class="items ">Pure Ghee</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
<div class="uk-flex flex-style ">
    <div class="uk-margin-right">
    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
    <img src={card8} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">bb Royal  </h3>
    <h3 class="items ">Black Diamond/Fard Dates</h3><br/>
    <select class="uk-select mrp-style uk-height-small">
        <option>1 Kg Rs:20.00</option>
        <option>2 Kg Rs:40.00</option>
     </select>
    <div class="uk-flex  ">
        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
        <p class="label-style"><span uk-icon="tripadvisor"></span>&nbsp;&nbsp;MRP:Rs 25 Rs 20<br/>
        Express Delivery: Today 3:30PM - 5:30PM.</p>    
        </div>
    </div>
    <div class="uk-form-controls  uk-margin-medium-bottom">
    <span class="input-group-addon1">Qty</span> 
    <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;&nbsp;&nbsp;
    <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right "><label class=""> <span uk-icon="cart"></span> Add</label></button>
</div>
    
    </div>
</div>
</div>

</div>
                        {/* fruits and veg cards end */}
                     </div>
</div>
</div>    
<Footer/>
{/* side nave and main section end */}
</div>
);
}

export default  SnacksBrandedFoods ;