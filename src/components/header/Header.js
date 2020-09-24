import React from 'react';
import first from '../../assets/dm.png';
import DMstar from'/home/aswathi/dailymart/src/assets/dmstar-01.jpeg'
import '../../components/header/Header.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
   

export default function Header() {
    const [open, setOpen] = React.useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
 
  
  return ( 
      <div >
          <div>
         <div class="     uk-visible@l "  >
        {/* 1st container  */}
        <div class="uk-container">
            {/* row1 */}
            <div className="row  ">
                {/* first column-logo */}
                <div className="col-3 ">
                    <div class="row">
                        <div class="col-6">
                            <img src={first} className=" img"  alt="logo"/>
                        </div>
                        <div class="col-6 ">
                             <h4 class="daily">daily</h4>
                            <h4 class="mart">Mart</h4>
                        </div>
                    </div>
                    
                    
                </div>
                {/* first column-logo end */}
                {/* second column */}
                <div className="col-9 " >
                <a class="uk-link-muted uk-margin-left" href="#"><span uk-icon="receiver"></span> 1860 123 1000 </a>
                {/* address */}
                    <div class="uk-inline">
                        <button class="uk-button uk-button-default uk-width-expand uk-margin-left  uk-padding-remove-top btn-style" type="button"><span uk-icon="location"><label class="uk-text-italic label_style">New Signal Vihar,Ahmedabad-Gandhinagar, Mhow Ahmedabad-Gandhinagar  </label></span></button>
                        <div uk-drop="mode: hover">
                            <div class="uk-card   uk-card-body uk-width-expand cart-style uk-card-large uk-card-default uk-padding-remove-top uk-padding-remove-bottum uk-padding-remove-right uk-padding-remove-left">
                                <div class="cart-style uk-margin-small-left uk-margin-small-right ">
                                    Select your city 
                                    <div class="uk-margin uk-padding-remove-bottum">
                                        <select class="uk-select">
                                            <option></option>
                                            <option>Ahmedabad-Gandhinagar</option>
                                            <option>Bangalore</option>
                                            <option>Bhopal</option>
                                            <option>Bangalore</option>
                                            <option>Chandigarh Tricity</option>
                                            <option>Chennai</option>
                                            <option>Coimbatore</option>
                                            <option>Delhi</option>
                                        </select>
                                    </div>
                                     <div class="uk-margin ">
                                        <input class="uk-input" type="text" placeholder="Enter area"/>
                                    </div>
                                    <button class="uk-button star-button uk-margin-large-left uk-button-small continue-btn"><label  >Continue</label></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* address end */}

 {/* login form */}
  
        
    <Button href="#text-buttons" color="text.secondary"onClick={handleClickOpen}>
     <span uk-icon="user"></span>Login
      </Button>|
      <Button href="#text-buttons" color="text.secondary"onClick={handleClickOpen}>
            Signup
      </Button>
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <div class="  uk-margin-large-left uk-margin-medium-top uk-margin-large-right uk-button-group">
        <button class="uk-button btn-style-log ">Login</button>&nbsp;&nbsp;
        <button class="uk-button btn1-style-log ">Signup</button>
    </div><br/>
    <div class="row  uk-margin-large-left uk-margin-large-right	">
        <a href="" class="uk-icon-button uk-margin-large-left  back-color1" uk-icon="twitter"></a>
        <a href="" class="uk-icon-button  uk-margin-medium-left   back-color2" uk-icon="facebook"></a>
    </div>    
    <br/><br/>
    <input class="  input-style-log uk-margin-small-left uk-margin-small-right	" type="text" placeholder="Mobile Number (10-digit) / Email Address"/>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <br/><br/><br/><br/><br/><br/>
    <button class="uk-button  disable-btn-style uk-margin-medium-bottom uk-margin-small-left uk-margin-small-right" disabled>Login Using OTP</button>
       
     </Dialog>


{/* login form end */}
                    
                    
                    {/* login */}
                    {/* <div class="uk-inline uk-margin-left">
                    <a href="#my-id" data-uk-modal="{center:true}">asdf</a>
                        <span uk-icon="user"></span><a class="uk-link-muted"  href="#"> Login  </a>|<a class="uk-link-muted" href="#">  Signup </a> 
                    </div> */}
                    {/* login end */}
                    {/* search dmstar and cart */}


                    <div class="uk-margin uk-padding-remove-top uk-margin-remove-top">
                        <form class="uk-search uk-width-large  uk-search-default">
                                <input class="uk-search-input   " type="search" placeholder="Search for Products.." />
                        </form>
                        <button class="uk-button uk-button-default  search-btn " type="button"><span uk-icon="search"></span></button>
                        <Link type="button " to="/Dmstar"><img src={DMstar} className=" img-star uk-margin-left "  alt="logo"/></Link>
                        
                        <div class="uk-inline  ">
                            <button class="uk-button  uk-width-small   uk-button-xsmall dm-btn uk-margin-left"><label class="uk-text-italic  "> <span uk-icon="cart"></span> Cart</label></button>
                            <div uk-drop="mode: hover">
                                <div class="uk-card uk-card-body  uk-padding-remove-left uk-padding-remove-right uk-card-default">
                                    <p class="uk-margin-small-left uk-margin-small-right"> Your basket is empty. Start shopping now!</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                    {/* search dmstar and cart end */}
                </div>
                
                {/* second columnend */}
                {/* 3 buttons */}
                <div class="uk-container cntr-btn">
                  <div class="col-12">
                    <div class="uk-button-group  button-style">
                        <button class="uk-button  uk-margin-remove-left uk-padding-remove-top shope-list">SHOP BY CATEGORY</button><button class="uk-button drop-icon-btn"  type="button"><span class="uk-padding-remove-right" uk-icon="icon:  triangle-down"></span></button>
                        <div uk-dropdown="pos: bottom uk-width-expand@m">
        <ul class="uk-nav uk-dropdown-nav    ">
        <div class="uk-inline uk-list-divider">
            <li>
            <Link type="link " to="/FruitsVeg"><a href="/FruitsVeg" class="uk-text-muted uk-margin-small-bottom list-style">Fruits & Vegetables</a></Link>
            </li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
            <Link type="link " to="/Freshfruits"><a href="/Freshfruits" class="uk-text-muted uk-margin-small-bottom list-style">Fresh Fruits </a></Link>
                    </li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#"> Herbs & Seasonings</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Fresh Fruits</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Organic Fruits & Vegetables</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Exotic Fruits & Veggies</a></li>
                    <li><a href="#">Cuts & Sprouts</a></li>
                    <li><a href="#">Flower Bouquets, Bunches</a></li>
                    
                </ul>
            </div>
            <li>
                <Link type="link " to="/Foodgrains"><a href="/Foodgrains" class="uk-text-muted uk-margin-small-bottom list-style">Foodgrains, Oil & Masala </a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/AttaFloursSooji"><a href="/AttaFloursSooji" class="uk-text-muted uk-margin-small-bottom list-style">Atta,Flours & Sooji </a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li>
                        <Link type="link " to="/DalsPulses"><a href="/DalsPulses" class="uk-text-muted uk-margin-small-bottom list-style">Dals & Pulses   </a></Link>
                    </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li>
                        <Link type="link " to="/DryFruits"><a href="/DryFruits" class="uk-text-muted uk-margin-small-bottom list-style">Dry Fruits </a></Link>
                   </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li><a href="#">Rice & Rice Products</a></li>
                    <li><a href="#">Edible Oils & Ghee </a></li>
                    <li><a href="#">Masalas & Spices</a></li>
                    <li><a href="#">Salt,Sugar & Jagger</a>y</li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/BakeryCakesDairy"><a href="/BakeryCakesDairy" class="uk-text-muted uk-margin-small-bottom list-style">Bakery, Cakes & Dairy</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/BakerySnacks"><a href="/BakerySnacks" class="uk-text-muted uk-margin-small-bottom list-style">Bakery Snacks</a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/BreadsBuns"><a href="/BreadsBuns" class="uk-text-muted uk-margin-small-bottom list-style">Bread and Bun</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/CakesPastries"><a href="/CakesPastries" class="uk-text-muted uk-margin-small-bottom list-style">Cakes and Pasteries</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/Beverages"><a href="/Beverages" class="uk-text-muted uk-margin-small-bottom list-style">Beverages</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/Coffee"><a href="/Coffee" class="uk-text-muted uk-margin-small-bottom list-style">Coffee</a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/EnergySoftDrinks"><a href="/EnergySoftDrinks" class="uk-text-muted uk-margin-small-bottom list-style">Energy and SoftDrinks</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/FruitJuicesDrinks"><a href="/FruitJuicesDrinks" class="uk-text-muted uk-margin-small-bottom list-style">Fruit Juice and Drink</a></Link>
                </li>
                    <li><a href="#">Fruit Juice and Drink</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                    <li><a href="#">Health Drink</a></li>
                    <li><a href="#">Tea</a></li>
                    <li><a href="#">Water</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/SnacksBrandedFoods"><a href="/SnacksBrandedFoods" class="uk-text-muted uk-margin-small-bottom list-style">Snacks & Branded Foodsm</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li><a href="#">Bakery Snacks</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Bread and Bun</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cakes and Pasteries</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/BeautyHygiene"><a href="/BeautyHygiene" class="uk-text-muted uk-margin-small-bottom list-style">Beauty & Hygiene</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li><a href="#">Makeup</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#"> Skin care</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#">oral Care</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/CleanHousehold"><a href="/CleanHousehold" class="uk-text-muted uk-margin-small-bottom list-style">Cleaning & Household</a></Link>
            </li>
            <li>
                <Link type="link " to="/KitchenGarden"><a href="/KitchenGarden" class="uk-text-muted uk-margin-small-bottom list-style">Kitchen, Garden & Pets</a></Link>
            </li>
            <li>
                <Link type="link " to="/EggsMeatFish"><a href="/EggsMeatFish" class="uk-text-muted uk-margin-small-bottom list-style">Eggs, Meat & Fish</a></Link>
            </li>
            <li>
                <Link type="link " to="/GourmetWorldFood"><a href="/GourmetWorldFood" class="uk-text-muted uk-margin-small-bottom list-style">Gourmet & World Foodages</a></Link>
            </li>
            <li>
                <Link type="link " to="/BabyCare"><a href="/BabyCare" class="uk-text-muted uk-margin-small-bottom list-style">Baby Care</a></Link>
            </li>
            <li>
                <Link type="link " to="/ViewAll"><a href="/ViewAll" class="uk-text-muted uk-margin-small-bottom list-style">View All</a></Link>
            </li>
            </div>
        </ul>
        
        
    </div>
                        <button class="uk-button  uk-width-small offer-btn1 uk-padding-remove-left uk-padding-remove-right  uk-button-small  "> <span uk-icon="tag"></span> <label class="  uk-margin-small-left ">OFFERS</label></button>
                        <button class="uk-button  uk-width-small offer-btn1 uk-padding-remove-left uk-padding-remove-right  uk-button-small  "> <span uk-icon="tripadvisor"></span> <label class="  uk-margin-small-left ">DM Express</label></button>
                        <button class="uk-button  uk-width-small offer-btn1 uk-padding-remove-left uk-padding-remove-right  uk-button-small  "> <span uk-icon="home"></span> <label class="  uk-margin-small-left ">DM Speciality</label></button>
                         
                    </div>
                </div>
            </div>
                
                {/* 3 buttons */}
              </div>
      {/* 1stnd container end */}
      {/* 3rd container  */}
      
        {/* 3rd container end */}
      </div>


 
 
      </div>




 
<div class=" uk-visible@s uk-hidden@m   ">
    <div class="uk-container cntnr1">
        <span class="uk-margin-medium-left"   uk-toggle="target: #offcanvas-nav"  uk-icon="table"></span>
        <div id="offcanvas-nav" uk-offcanvas="overlay: true">
            <div class="uk-offcanvas-bar   ">
                <ul class="uk-nav uk-nav-default  ">
                    <li class="uk-active"><a href="#">HOME</a></li>
                    <li class="uk-parent">
                        <a href="#">SHOP BY CATEGORY</a>
                        <a href="#">OFFERS <span class="uk-margin-right"  uk-icon="pluse"></span></a>
                        <a href="#">DM Express</a>
                        <a href="#">DM SPECIALITY STORE</a>
                        <a href="#">MORE SHOPESS</a>
                    </li>
                </ul>
            </div>
        </div>
        <span class="uk-margin-medium-left"  uk-icon="user"></span>
        <img src={first} className=" mob-logo uk-margin-medium-left"  alt="logo"/>
        <span class="uk-margin-medium-left"  uk-icon="location"></span>
        <span class="uk-margin-medium-left"  uk-icon="cart"></span>
        <div class="uk-margin">
            {/* <form class="uk-search   uk-margin-medium-left uk-margin-large-bottom input-style  uk-search-default">
                <span class="uk-search-icon"></span>
                <input class="uk-search-input   " type="search" placeholder="Search..."/>
            </form> */}
        </div> 
</div>
</div>

 
 
</div>
{/* 
<div uk-sticky="bottom: #offset" class="sticky-back-style">
    <img src={first} className=" img-sticky"  alt="logo"/>
    <div class="uk-button-group  button-style">
        <button class="uk-button  uk-margin-remove-left uk-padding-remove-top shope-list">SHOP BY</button><button class="uk-button drop-icon-btn"  type="button"><span class="uk-padding-remove-right" uk-icon="icon:  triangle-down"></span></button>
        <div uk-dropdown="pos: bottom uk-width-expand@m">
        <ul class="uk-nav uk-dropdown-nav    ">
        <div class="uk-inline uk-list-divider">
            <li>
            <Link type="link " to="/FruitsVeg"><a href="/FruitsVeg" class="uk-text-muted uk-margin-small-bottom list-style">Fruits & Vegetables</a></Link>
            </li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
            <Link type="link " to="/Freshfruits"><a href="/Freshfruits" class="uk-text-muted uk-margin-small-bottom list-style">Fresh Fruits </a></Link>
                    </li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#"> Herbs & Seasonings</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Fresh Fruits</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Organic Fruits & Vegetables</a></li>
            <div uk-dropdown="pos: right-center">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Potato, Onion & Tomato </a></li>
                    <li><a href="#">Cucumber & Capsicum Beans</a></li>
                    <li><a href="#">Brinjals & Okra Gourd</a></li>
                    <li><a href="#">Pumpkin</a></li>
                    <li><a href="#">Drumstick </a></li>
                    <li><a href="#">Leafy Vegetables </a></li>
                    <li><a href="#">Root Vegetables </a></li>
                    <li><a href="#">Cabbage & Cauliflower </a></li>
                    <li><a href="#">Specialty</a></li>
                </ul>
            </div>
                    <li><a href="#">Exotic Fruits & Veggies</a></li>
                    <li><a href="#">Cuts & Sprouts</a></li>
                    <li><a href="#">Flower Bouquets, Bunches</a></li>
                    
                </ul>
            </div>
            <li>
                <Link type="link " to="/Foodgrains"><a href="/Foodgrains" class="uk-text-muted uk-margin-small-bottom list-style">Foodgrains, Oil & Masala </a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/AttaFloursSooji"><a href="/AttaFloursSooji" class="uk-text-muted uk-margin-small-bottom list-style">Atta,Flours & Sooji </a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li>
                        <Link type="link " to="/DalsPulses"><a href="/DalsPulses" class="uk-text-muted uk-margin-small-bottom list-style">Dals & Pulses   </a></Link>
                    </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li>
                        <Link type="link " to="/DryFruits"><a href="/DryFruits" class="uk-text-muted uk-margin-small-bottom list-style">Dry Fruits </a></Link>
                   </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                <li><a href="#">Toor, Channa & Moong Dals</a></li>
                    <li><a href="#"> Urad & Other Dals</a></li>
                    <li><a href="#">Cereals & Millet</a></li>
                </ul>
            </div>
                    <li><a href="#">Rice & Rice Products</a></li>
                    <li><a href="#">Edible Oils & Ghee </a></li>
                    <li><a href="#">Masalas & Spices</a></li>
                    <li><a href="#">Salt,Sugar & Jagger</a>y</li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/BakeryCakesDairy"><a href="/BakeryCakesDairy" class="uk-text-muted uk-margin-small-bottom list-style">Bakery, Cakes & Dairy</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/BakerySnacks"><a href="/BakerySnacks" class="uk-text-muted uk-margin-small-bottom list-style">Bakery Snacks</a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/BreadsBuns"><a href="/BreadsBuns" class="uk-text-muted uk-margin-small-bottom list-style">Bread and Bun</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/CakesPastries"><a href="/CakesPastries" class="uk-text-muted uk-margin-small-bottom list-style">Cakes and Pasteries</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/Beverages"><a href="/Beverages" class="uk-text-muted uk-margin-small-bottom list-style">Beverages</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li>
                    <Link type="link " to="/Coffee"><a href="/Coffee" class="uk-text-muted uk-margin-small-bottom list-style">Coffee</a></Link>
                </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/EnergySoftDrinks"><a href="/EnergySoftDrinks" class="uk-text-muted uk-margin-small-bottom list-style">Energy and SoftDrinks</a></Link>
                </li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                <li>
                    <Link type="link " to="/FruitJuicesDrinks"><a href="/FruitJuicesDrinks" class="uk-text-muted uk-margin-small-bottom list-style">Fruit Juice and Drink</a></Link>
                </li>
                    <li><a href="#">Fruit Juice and Drink</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Ground Coffee</a></li>
                    <li><a href="#"> Instant Coffee </a></li>
                </ul>
            </div>
                    <li><a href="#">Health Drink</a></li>
                    <li><a href="#">Tea</a></li>
                    <li><a href="#">Water</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/SnacksBrandedFoods"><a href="/SnacksBrandedFoods" class="uk-text-muted uk-margin-small-bottom list-style">Snacks & Branded Foodsm</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li><a href="#">Bakery Snacks</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Bread and Bun</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cakes and Pasteries</a></li>
                    <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Bread Sticks & Lavash</a></li>
                    <li><a href="#">Cheese & Garlic Bread</a></li>
                    <li><a href="#">Organic & Free From</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/BeautyHygiene"><a href="/BeautyHygiene" class="uk-text-muted uk-margin-small-bottom list-style">Beauty & Hygiene</a></Link>
            </li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider "> 
                <li><a href="#">Makeup</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#"> Skin care</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#">oral Care</a></li>
            <div uk-dropdown="pos: right-bottom">
                <ul class="uk-nav uk-dropdown-nav uk-list-divider"> 
                    <li><a href="#">Face</a></li>
                    <li><a href="#">Nails</a></li>
                    <li><a href="#">Lips</a></li>
                    <li><a href="#">Eye</a></li>
                </ul>
            </div>
                    <li><a href="#">Cookiws and Rusks</a></li>
                    <li><a href="#">Dairy</a></li>
                    <li><a href="#"> Gourmet Breads</a></li>
                </ul>
            </div>
            <li>
                <Link type="link " to="/CleanHousehold"><a href="/CleanHousehold" class="uk-text-muted uk-margin-small-bottom list-style">Cleaning & Household</a></Link>
            </li>
            <li>
                <Link type="link " to="/KitchenGarden"><a href="/KitchenGarden" class="uk-text-muted uk-margin-small-bottom list-style">Kitchen, Garden & Pets</a></Link>
            </li>
            <li>
                <Link type="link " to="/EggsMeatFish"><a href="/EggsMeatFish" class="uk-text-muted uk-margin-small-bottom list-style">Eggs, Meat & Fish</a></Link>
            </li>
            <li>
                <Link type="link " to="/GourmetWorldFood"><a href="/GourmetWorldFood" class="uk-text-muted uk-margin-small-bottom list-style">Gourmet & World Foodages</a></Link>
            </li>
            <li>
                <Link type="link " to="/BabyCare"><a href="/BabyCare" class="uk-text-muted uk-margin-small-bottom list-style">Baby Care</a></Link>
            </li>
            <li>
                <Link type="link " to="/ViewAll"><a href="/ViewAll" class="uk-text-muted uk-margin-small-bottom list-style">View All</a></Link>
            </li>
            </div>
        </ul>
        
        
    </div> &nbsp;&nbsp;&nbsp;&nbsp; */}
    {/* search dm and cart */}
                    {/* <div class="uk-margin uk-padding-remove-top uk-margin-remove-top">
                        <form class="uk-search uk-width-large  uk-search-default">
                                <input class="uk-search-input   " type="search" placeholder="Search for Products.." />
                        </form>
                        <button class="uk-button uk-button-default  search-btn " type="button"><span uk-icon="search"></span></button>
                        <Link type="button " to="/Dmstar"><img src={DMstar} className=" img-star uk-margin-left "  alt="logo"/></Link>
                        
                        <div class="uk-inline  ">
                            <button class="uk-button  uk-width-small   uk-button-xsmall dm-btn uk-margin-left"><label class="uk-text-italic  "> <span uk-icon="cart"></span> Cart</label></button>
                            <div uk-drop="mode: hover">
                                <div class="uk-card uk-card-body  uk-padding-remove-left uk-padding-remove-right uk-card-default">
                                    <p class="uk-margin-small-left uk-margin-small-right"> Your basket is empty. Start shopping now!</p>
                                </div>
                            </div>
                        </div> 
                    </div> */}
                    {/* end search dm and cart */}
{/*                        
                    </div>
                 
     </div>
   
    */}
   
   
    </div>
    










    

  );
}


 

