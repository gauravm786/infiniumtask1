import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from './components/Home';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <div>
      <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path='/login' element={<LoginPage />}/>
      </Routes >
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
