import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultComponent from './assets/components/DefaultComponent';
import Home from './assets/components/Home';
import WeatherComponent from './assets/components/WeatherComponent';
import BusComponent from './assets/components/BusComponent';
import { AuthContextProvider } from './assets/components/AuthContextProvider';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          {/* Pass the auth context as props to Home */}
          <Route path='/' element={<Home />} />
          <Route path='weather' element={<WeatherComponent />} />
          <Route path='bus' element={<BusComponent />} />

          {/* Default page when no route is matched */}
          <Route path='*' element={<DefaultComponent />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
