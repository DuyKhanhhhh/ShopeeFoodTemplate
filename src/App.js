import HeadMerchant from './compoment/HeadMerchant';
import CreateMerchant from './page/CreateMerchant';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeMerchant from './page/HomeMerchant';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeMerchant />} ></Route>
          <Route path='/create' element={<CreateMerchant />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
