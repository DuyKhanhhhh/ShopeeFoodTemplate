import HeadMerchant from './compoment/HeadMerchant';
import CreateMerchant from './page/CreateMerchant';
import UpdateMerchant from './page/UpdateMerchant';
// import A from './page/A';
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
      <Route path='/' element={<HomeMerchant />} ></Route>
      <Route path='/create' element={<CreateMerchant />} ></Route>
      <Route path='/updateShop/:id' element={<UpdateMerchant />} ></Route>
          <Route path='/test' element={<testValidate />} ></Route>
      <Route path="/createFood" element={<CreateNewFood />}></Route>
      <Route path="/foodList" element={<FoodList />}></Route>
          {/* <Route path="/myButton" element={<MyButton />}></Route> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
