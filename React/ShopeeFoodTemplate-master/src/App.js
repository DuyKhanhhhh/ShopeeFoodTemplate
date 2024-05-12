import 'bootstrap/dist/css/bootstrap.min.css'
import CreateNewFood from './Product/CreateNewFood';
import FoodList from './Product/FoodList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeMerchant from './Merchant/HomeMerchant';
import CreateMerchant from './Merchant/CreateMerchant';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeMerchant />} ></Route>
          <Route path='/createMerchant' element={<CreateMerchant />} ></Route>
          <Route path="/createFood" element={<CreateNewFood />}></Route>
          <Route path="/foodList" element={<FoodList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
