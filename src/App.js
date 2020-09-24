import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from '../src/components/footer/Footer'
import Header from '../src/components/header/Header' 
import FruitsVeg from './components/pages/FruitsVeg/FruitsVeg' 
import Home from '../src/components/pages/home/Home' 
import { Route,BrowserRouter,Switch } from  'react-router-dom'; 
import Dmstar from './components/pages/dmstar/Dmstar';
import CutsSpouts from'../src/components/pages/CutsSpouts/CutsSpouts'
import ExoticFruitsVeggs from'../src/components/pages/ExoticFruitsVeggs/ExoticFruitsVeggs'
import Freshfruits from'../src/components/pages/Freshfruits/Freshfruits'
import Foodgrains from'../src/components/pages/Foodgrains/Foodgrains'
import AttaFloursSooji from'../src/components/pages/AttaFloursSooji/AttaFloursSooji'
import DalsPulses from'../src/components/pages/DalsPulses/DalsPulses'
import DryFruits from'../src/components/pages/DryFruits/DryFruits' 
import BakeryCakesDairy from'../src/components/pages/BakeryCakesDairy/BakeryCakesDairy'
import BakerySnacks from'../src/components/pages/BakerySnacks/BakerySnacks'
import BreadsBuns from'../src/components/pages/BreadsBuns/BreadsBuns'
import CakesPastries from'../src/components/pages/CakesPastries/CakesPastries'
import Beverages from'../src/components/pages/Beverages/Beverages'
import Coffee from'../src/components/pages/Coffee/Coffee'
import EnergySoftDrinks from'../src/components/pages/EnergySoftDrinks/EnergySoftDrinks'
import FruitJuicesDrinks  from'/home/aswathi/dailymart/src/components/pages/FruitJuicesDrinks/FruitJuicesDrinks.js'
import Login from'../src/components/pages/Login/Login'
import Offer from'../src/components/pages/Offer/Offer'
import SnacksBrandedFoods from'../src/components/pages/SnacksBrandedFoods/SnacksBrandedFoods'
import BeautyHygiene from'../src/components/pages/BeautyHygiene/BeautyHygiene'
import CleanHousehold from'../src/components/pages/CleanHousehold/CleanHousehold' 
import KitchenGarden from'../src/components/pages/KitchenGarden/KitchenGarden'
import EggsMeatFish from'../src/components/pages/EggsMeatFish/EggsMeatFish'
import GourmetWorldFood from'../src/components/pages/GourmetWorldFood/GourmetWorldFood'
import BabyCare from'../src/components/pages/BabyCare/BabyCare'
import ViewAll from'../src/components/pages/ViewAll/ViewAll'
function App() {
  return (
    <div>
       <div>
         <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
             <Route  path="/FruitsVeg" component={FruitsVeg}/>
             <Route  path="/CutsSpouts" component={CutsSpouts}/>
             <Route  path="/ExoticFruitsVeggs" component={ExoticFruitsVeggs}/>  
             <Route  path="/Freshfruits" component={Freshfruits}/>
             <Route  path="/Foodgrains" component={Foodgrains}/>
             <Route  path="/AttaFloursSooji" component={AttaFloursSooji}/>
             <Route  path="/DalsPulses" component={DalsPulses}/>
             <Route  path="/DryFruits" component={DryFruits}/>
             <Route  path="/BakeryCakesDairy" component={BakeryCakesDairy}/>
             <Route  path="/BakerySnacks" component={BakerySnacks}/>
             <Route  path="/BreadsBuns" component={BreadsBuns}/> 
             <Route  path="/CakesPastries" component={CakesPastries}/>
             <Route  path="/Beverages" component={Beverages}/> 
             <Route  path="/Coffee" component={Coffee}/> 
             <Route  path="/EnergySoftDrinks" component={EnergySoftDrinks}/>
             <Route  path="/FruitJuicesDrinks" component={FruitJuicesDrinks}/>
            <Route  path="/Dmstar" component={Dmstar}/>
            <Route  path="/Offer" component={Offer}/>
            <Route  path="/SnacksBrandedFoods" component={SnacksBrandedFoods}/>
            <Route  path="/BeautyHygiene" component={BeautyHygiene}/>
            <Route  path="/CleanHousehold" component={CleanHousehold}/>
            <Route  path="/KitchenGarden" component={KitchenGarden}/>
            <Route  path="/EggsMeatFish" component={EggsMeatFish}/> 
            <Route  path="/GourmetWorldFood" component={GourmetWorldFood}/> 
            <Route  path="/BabyCare" component={BabyCare}/>
            <Route  path="/ViewAll" component={ViewAll}/>
          </Switch>
         </BrowserRouter>
       </div>
     </div>
  );
}

export default App;
