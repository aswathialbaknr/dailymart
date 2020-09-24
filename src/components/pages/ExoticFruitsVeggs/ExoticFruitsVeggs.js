import React from 'react';
 
import './ExoticFruitsVeggs.css';
import slide2 from'/home/aswathi/dailymart/src/assets/2008009_exotic-fruits_460.webp'
import slide3 from'/home/aswathi/dailymart/src/assets/2008011_bb-home_460.webp'
import slide4 from'/home/aswathi/dailymart/src/assets/2008012_kitchen-essentials_460.webp'
import slide8 from'/home/aswathi/dailymart/src/assets/shimla-apple.webp'
import fruitsveg from'/home/aswathi/dailymart/src/assets/Fruits & vegetablesNEW.webp'
import veg from'/home/aswathi/dailymart/src/assets/veg.png'
import card1 from'/home/aswathi/dailymart/src/assets/avocado.webp'
import card2 from'/home/aswathi/dailymart/src/assets/broccoli.webp'
import card3 from'/home/aswathi/dailymart/src/assets/cabbage-red.webp'
import card4 from'/home/aswathi/dailymart/src/assets/capsicum-red.webp'
import card5 from'/home/aswathi/dailymart/src/assets/carrots-diced.webp'
import card6 from'/home/aswathi/dailymart/src/assets/kiwi-green.webp'
import card7 from'/home/aswathi/dailymart/src/assets/mushrooms-button.webp'
import card8 from'/home/aswathi/dailymart/src/assets/lettuce-iceberg.webp'
import card9 from'/home/aswathi/dailymart/src/assets/sweet-corn.webp'
// import card10 from'/home/aswathi/dailymart/src/assets/orange.webp'
// import card11 from'/home/aswathi/dailymart/src/assets/pomegranate.webp'
// import card12 from'/home/aswathi/dailymart/src/assets/mosambi.webp'
import Header from'../../header/Header'
import Footer from'../../footer/Footer'
 
function ExoticFruitsVeggs() {
  
    return ( 
        <div >
         
                <Header/>
              {/* slideshow1 */}
              <div class="uk-container "> 
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
      <br/>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
    </div>
    </div><br/>
        {/* slideshow1 end */}    
        {/* image bar */}
        <img src={fruitsveg} class="slide1 " alt="" uk-cover/>
        {/* image bar end */} 
{/* side nave and main section */}
    <div class="uk-container ">
        <div class="row">
            <div class="col-3 ">
            <div class="uk-margin-left uk-padding-remove-right">
                <div class="uk-width-expand uk-margin-large-top">
                    <ul class="uk-nav uk-nav-default">
                    <label class="  category-style uk-margin-remove-bottom">Category</label>  
                        <li class="uk-parent">
                        <a class="parent uk-margin-remove-bottom" href="#">Fruits&Vegetables</a>
                        <ul class="uk-nav-sub">
                            <li><a class="sub-head" href="#">Exotic Fruits & Veggies </a></li>
                            <ul class="uk-nav-sub">
                                <li><a href="#">Exotic Fruits</a></li>
                                <li><a href="#">Exotic Vegetables</a></li>
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
    
        <li><label><input class="uk-checkbox  uk-margin-remove-bottom" type="checkbox"/> &nbsp;&nbsp; <label class="  chech-text">bb Combo</label></label></li>
        <li><label><input class="uk-checkbox uk-margin-remove-top uk-margin-remove-bottom uk-padding-remove-top uk-padding-remove-bottom " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">Fresho</label></label></li>
        <li><label><input class="uk-checkbox  uk-margin-remove-top uk-margin-remove-bottom uk-padding-remove-top uk-padding-remove-bottom" type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">Supa</label></label></li>
        <li><label><input class="uk-checkbox uk-margin-remove-top  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">Corn Tadaa</label></label></li> 
    </ul>

</div>
    </div>
    <div>
    

        <label class=" category-style uk-margin-remove-bottom">Seasonal</label>  
    <ul class="uk-list">
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">Summer Fruits</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Summer Veggies</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Winter Fruits</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Winter Veggies</label></label></li> 
    </ul>
    </div>
    <div>
        <label class=" category-style uk-margin-remove-bottom">Country Of Origin</label> 
    <ul class="uk-list">
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">India</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">UAE</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">Thailand</label></label></li>
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
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  seasonal-text">15%-20%</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="seasonal-text">More than 20%</label></label></li>
        

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
    
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp; <label class="  chech-text">100g</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">200g</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">250g</label></label></li>
        <li><label><input class="uk-checkbox  " type="checkbox"/> &nbsp;&nbsp;<label class="chech-text">500g</label></label></li> 
    </ul>

</div>
    </div>
    
            </div>
            </div>
            <div class="col-9">
         {/* fruits and veg cards */}
        {/* fruits header */}
        <div class="row uk-margin-medium-top "> 
        <div class="col-9">
        <label class="header-label   ">Exotic Fruits & Veggies </label>  
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Avocado</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Broccoli</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Cabbage - Red</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Capsicum - Red</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Carrot Diced</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items "> Kiwi - Green</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Mushrooms - Button</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Lettuce - Iceberg</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Avocado</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Broccoli</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Cabbage - Red</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Capsicum - Red</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Carrot Diced</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items "> Kiwi - Green</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Mushrooms - Button</h3><br/>
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
            <h3 class="uk-text-muted fresho ">Fresho</h3>
            <h3 class="items ">Lettuce - Iceberg</h3><br/>
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


export default ExoticFruitsVeggs;