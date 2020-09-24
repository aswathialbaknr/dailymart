import React from 'react';
 
import './Coffee.css';
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import card1 from'/home/aswathi/dailymart/src/assets/coffee4.jpg'
import card2 from'/home/aswathi/dailymart/src/assets/coffee.webp'
import card3 from'/home/aswathi/dailymart/src/assets/coffee-classic.webp'
import card4 from'/home/aswathi/dailymart/src/assets/coffee1.jpg'
import card5 from'/home/aswathi/dailymart/src/assets/coffee-speciale.jpg'
import card6 from'/home/aswathi/dailymart/src/assets/coffee-strong.jpg'
import card7 from'/home/aswathi/dailymart/src/assets/coffee1.jpg'
import card8 from'/home/aswathi/dailymart/src/assets/coffee3.jpg'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
 
function Coffee() {
  
    return ( 
        <div >
         
        <Header/><br/>
{/* side nave and main section */}
<div class="uk-container  "> 
<div class="row">
    <div class="col-3 ">
        <div class="uk-margin-left uk-padding-remove-right">
        <div class="uk-width-expand  ">
            <ul class="uk-nav uk-nav-default">
            <label class="  category-style uk-margin-remove-bottom">Category</label>  
                <li class="uk-parent">
                <a class="parent uk-margin-remove-bottom" href="#">Beverages</a>
                <ul class="uk-nav-sub">
                    <li><a href="#">Coffee</a></li>
                    <ul class="uk-nav-sub">
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#">Instant Coffe</a></li>
                    </ul>
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
<label class=" category-style uk-margin-remove-bottom">Flavours</label> 
<ul class="uk-list">
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Chocolate</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Fruits/Berry</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Vanilla</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Nutty Crunch</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Exotic/Sundae</label></label></li>
<li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Other Juices</label></label></li>
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
<label class="header-label   ">Coffee</label>  
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
    <img src={card1} className=" uk-margin-top "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Coffee</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amull</h3>
    <h3 class="items ">Brue Cofee</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items "> Coffee</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Coffee</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">ice-cream-cake </h3><br/>
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
    <img src={card1} className="  "  alt="slide1"/><br/>
    <img src={veg} className=" veg-size"  alt="slide1"/>
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Atta - Shudh, Chakki</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Maida</h3><br/>
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
    <h3 class="items ">Kachi Ghani Mustard Oil</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Sooji Ordinary/Bombay Rava</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul</h3>
    <h3 class="items ">Toor Dal</h3><br/>
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
    <h3 class="items ">Poha /Avalakki/Aval/Chivda -Thick</h3><br/>
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
    <h3 class="uk-text-muted fresho ">Amul  </h3>
    <h3 class="items ">Sugar</h3><br/>
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
</div></div>

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

export default Coffee;