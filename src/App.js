import HeadMerchant from './compoment/HeadMerchant';
import CreateMerchant from './page/CreateMerchant';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateNewFood from './page/CreateNewFood';
import FoodList from './page/FoodList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMerchant from './page/HomeMerchant';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/HomeMerchant' element={<HomeMerchant />} ></Route>
      <Route path='/CreateMerchant' element={<CreateMerchant />} ></Route>
      <Route path="/CreateNewFood" element={<CreateNewFood />}></Route>
      <Route path="/FoodList" element={<FoodList />}></Route>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
