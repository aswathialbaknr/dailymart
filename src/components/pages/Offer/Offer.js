import React from 'react';
 
import './Offer.css';
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import card1 from'/home/aswathi/dailymart/src/assets/offer1img.jpg'
import card2 from'/home/aswathi/dailymart/src/assets/offer2img.jpg'
import card3 from'/home/aswathi/dailymart/src/assets/offer3img.jpg'
import card4 from'/home/aswathi/dailymart/src/assets/offer4img.jpg'
import card5 from'/home/aswathi/dailymart/src/assets/Cooking-OilsGhee.webp'
import card6 from'/home/aswathi/dailymart/src/assets/Edrink-black-slim.webp'
import card7 from'/home/aswathi/dailymart/src/assets/tea-gold-leaf-tea.jpg'
import card8 from'/home/aswathi/dailymart/src/assets/peanuts-raw.webp'
import offer from'/home/aswathi/dailymart/src/assets/Offer.jpg'
import leftArrow from'/home/aswathi/dailymart/src/assets/LeftArrow.png'
import rightArrow from'/home/aswathi/dailymart/src/assets/rightArrow.png'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
 
function Offer() {
  
    return ( 
        <div >
         
        <Header/><br/>
        {/* banner container */}
        <div class="uk-container  ">
        <h5 class="banner-style  s ">Bigbasketeers have saved upto Rs. 2531 on their last month's shopping. Shop now to save more!</h5>
        </div>
        {/* banner container end*/}
        {/* image container */}
        <div class="uk-container  ">
            <img src={offer} className=" uk-margin-top offerimg"  alt="offerimg"/><br/>
        </div>
        {/* image containerend */}
        {/* card slide */}
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider="sets: true">

    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
        <li>
        <div class="uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div class="uk-flex flex-style uk-padding-remove-large-right uk-margin-remove-large-right">
                <div class="uk-margin-right">
                    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
                    <img src={card1} className=" uk-margin-top "  alt="slide1"/><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Duracell</h3>
                    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
        </li>
        <li>
        <div class="uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div class="uk-flex flex-style uk-padding-remove-large-right uk-margin-remove-large-right">
                <div class="uk-margin-right">
                    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
                    <img src={card2} className=" uk-margin-top "  alt="slide1"/><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Duracell</h3>
                    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
        </li> 
        <li>
        <div class="uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div class="uk-flex flex-style uk-padding-remove-large-right uk-margin-remove-large-right">
                <div class="uk-margin-right">
                    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
                    <img src={card3} className=" uk-margin-top "  alt="slide1"/><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Duracell</h3>
                    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
        </li>
        <li>
        <div class="uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div class="uk-flex flex-style uk-padding-remove-large-right uk-margin-remove-large-right">
                <div class="uk-margin-right">
                    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
                    <img src={card4} className=" uk-margin-top "  alt="slide1"/><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Duracell</h3>
                    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
        </li>
        <li>
        <div class="uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
            <div class="uk-flex flex-style uk-padding-remove-large-right uk-margin-remove-large-right">
                <div class="uk-margin-right uk-padding-remove-large-right">
                    <button class="uk-button uk-margin-top  uk-button-default uk-width-expand off "> GET 24% OFF </button> 
                    <img src={card6} className=" uk-margin-top "  alt="slide1"/><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Duracell</h3>
                    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
        </li>   </ul>

    <a class="uk-position-center-left uk-position-small uk-margine-right  uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"><img src={leftArrow} class="arrow-img " alt="" /></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-margine-left " href="#" uk-slidenav-next uk-slideshow-item="next"><img src={rightArrow} class="arrow-img " alt="" /></a>

</div> */}












        {/* card slide end */}
{/* side nave and main section */}<br/><br/>
<div class="uk-container  "> 
<div class="row">
    <div class="col-3 ">
        <div class="uk-margin-left uk-padding-remove-right">
        <div class="uk-width-expand  ">
            <ul class="uk-nav uk-nav-default">
            <label class="  category-style uk-margin-remove-bottom">Category</label>  
                <li class="uk-parent">
                <a class="parent uk-margin-remove-bottom" href="#">Beauty & Hygiene</a>
                <a class="parent uk-margin-remove-bottom" href="#">Cleaning & Household</a>
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
    <label class="  chech-text">  Beanies</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">  Bru</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">   By Nature</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">  Continental</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Abbies</label></label>
</li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;
    <label class="  chech-text">Davidoff</label></label>
</li>
</ul>
</div>
</div>
<div>


<label class=" category-style uk-margin-remove-bottom">Food Preference</label>  
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Vegetarian</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Non Vegetarian</label></label></li>
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
<label class=" category-style uk-margin-remove-bottom">Pack Type</label>
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Tubs</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Sticks</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Cups</label></label></li>

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
<label class="header-label   ">All Offers</label>  
</div>
<div class="col-3">
<select class="uk-select popularity uk-width-medium "> 
    <option>Relevence</option>
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
    <img src={card1} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Duracell</h3>
    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
    <img src={card2} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Duracell</h3>
    <h3 class="items ">Dry Dog Food - Chicken & Vegetables, For Adult Dogs</h3><br/>
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
    <img src={card3} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Dm home</h3>
    <h3 class="items ">Kitchen Knife Set Stainless Steel</h3><br/>
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
    <img src={card4} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">vim</h3>
    <h3 class="items ">Dishwash Bar - Lemon</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Cooking-OilsGhee. Edrink-black-slim tea-gold-leaf-tea peanuts-raw </h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">ice-cream-cone-strawberry-swirl-cake </h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">mango-ice-cream-jumbo</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul </h3>
    <h3 class="items ">Amul Milk</h3><br/>
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
    <img src={card1} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Duracell</h3>
    <h3 class="items "> Ultra Alkaline Battery AA</h3><br/>
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
    <img src={card2} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Duracell</h3>
    <h3 class="items ">Dry Dog Food - Chicken & Vegetables, For Adult Dogs</h3><br/>
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
    <img src={card3} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Dm home</h3>
    <h3 class="items ">Kitchen Knife Set Stainless Steel</h3><br/>
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
    <img src={card4} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">vim</h3>
    <h3 class="items ">Dishwash Bar - Lemon</h3><br/>
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

export default Offer;