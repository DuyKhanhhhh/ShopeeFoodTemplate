import HeadMerchant from './compoment/HeadMerchant';
import CreateMerchant from './page/CreateMerchant';
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateNewFood from './page/CreateNewFood';
import FoodList from './page/FoodList';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateNewFood />}></Route>
      <Route path="/FoodList" element={<FoodList />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
