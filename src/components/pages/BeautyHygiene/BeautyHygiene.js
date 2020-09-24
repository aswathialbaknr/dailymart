import React from 'react';
 
import './BeautyHygiene.css';
import slide2 from'/home/aswathi/dailymart/src/assets/BeautySlide1.jpg'
import slide3 from'/home/aswathi/dailymart/src/assets/BeautySlide3.jpg'
import slide4 from'/home/aswathi/dailymart/src/assets/SnackSlide3.jpg'
import slide8 from'/home/aswathi/dailymart/src/assets/BeautySlide4.jpg'
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import card1 from'/home/aswathi/dailymart/src/assets/Beauty_10-whisper-sanitary-pads-extra-large-plus-clean-ultra.jpg'
import card2 from'/home/aswathi/dailymart/src/assets/Beauty-bathing-bar-soap-original.jpg'
import card3 from'/home/aswathi/dailymart/src/assets/Beauty-dettol-antiseptic-disinfectant-liquid.jpg'
import card4 from'/home/aswathi/dailymart/src/assets/Beauty-dove-cream-beauty-bathing-bar.jpg'
import card5 from'/home/aswathi/dailymart/src/assets/Beauty-layerr-wottagirl-divine-perfume-spray.jpg'
import card6 from'/home/aswathi/dailymart/src/assets/Beauty-octus-disposable-rn95-face-mask-white.jpg'
import card7 from'/home/aswathi/dailymart/src/assets/Beauty-red-hunt-savage-storm-body-spray.jpg'
import card8 from'/home/aswathi/dailymart/src/assets/Beauty-zm-labs-hand-sanitiser-spray.jpg'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
 
function  BeautyHygiene () {
  
    return ( 
        <div >
         
        <Header/>
      {/* slideshow1 */}
      <div class="uk-container "> <br/>
<div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 350" class=" ">
<div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom ">
    <ul class="uk-slideshow-items   ">
        <li>
            <img src={slide2} class="   " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide3} class="  " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide4} class="  " alt="" uk-cover/>
        </li>
        <li>
            <img src={slide8} class="  " alt="" uk-cover/>
        </li>
    </ul>
</div>
 
</div>
</div> 
{/* slideshow1 end */}    
 
{/* side nave and main section */}
<div class="uk-container ">
<div class="row">
    <div class="col-3 ">
        <div class="uk-margin-left uk-padding-remove-right">
        <div class="uk-width-expand  ">
            <ul class="uk-nav uk-nav-default">
            <label class="  category-style uk-margin-remove-bottom">Category</label>  
                <li class="uk-parent">
                <a class="parent uk-margin-remove-bottom" href="#">Beauty & Hygiene</a>
                <ul class="uk-nav-sub">
                            <li><a class="sub-head" href="#">Biscuits & Cookies</a></li>
                            <li><a class="sub-head" href="#"> Bath & Hand Wash</a></li>
                            <li><a class="sub-head" href="#">Feminine Hygiene</a></li>
                            <li><a class="sub-head" href="#">Fragrances & Deos</a></li>
                            <li><a class="sub-head" href="#">Hair Care</a></li>
                            <li><a class="sub-head" href="#">Health & Medicine</a></li>
                            <li><a class="sub-head" href="#">Makeup</a></li>
                            <li><a class="sub-head" href="#">Men's Grooming</a></li>
                            <li><a class="sub-head" href="#">Oral Care</a></li>
                            <li><a class="sub-head" href="#">Skin Care</a></li>
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
    <label class="  chech-text">50ap </label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Aigner</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Ajmal</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text"> Aloe Veda</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Aroma Magic</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Aroma Treasures</label></label>
</li>

</ul>

</div>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Hair Styling</label>
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Gels & Waxes</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Benefits</label>  

<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Natural/ Herbal</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Multi-Benefit</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Comfortable</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Age Defying</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Luminous</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Body Care</label> 

<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Body Lotion & Cream</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Hand & Foot Cream</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">Gender</label>  


<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Women</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Unisex</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Female</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Male</label></label></li>
</ul>
</div>
<div>
<div>
<label class=" category-style uk-margin-remove-bottom">Colour</label> 
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Black</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Blue</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Brown</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Green</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Pink</label></label></li>
</ul>
</div>
<div>
<label class=" category-style uk-margin-remove-bottom">SPF</label>
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Between 15-30</label></label></li>
</ul>
</div>
<label class=" category-style uk-margin-remove-bottom">  Product Type</label>
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Plain</label></label></li>
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
 
 
 

    </div>
    </div>
    <div class="col-9">
 {/* fruits and veg cards */}
{/* fruits header */}
<div class="row  "> 
<div class="col-9">
<label class="header-label   ">Beauty & Hygiene </label>  
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
    <h3 class="items ">Whisper-sanitary-pads </h3><br/>
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
    <h3 class="items ">Bathing-bar-soap </h3><br/>
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
    <h3 class="items ">dettol-antiseptic </h3><br/>
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
    <h3 class="items ">dove-cream-beauty-bathing-bar</h3><br/>
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

export default  BeautyHygiene ;