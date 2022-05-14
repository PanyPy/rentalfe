import Home from './components/Layout/Home';
import DefaultBar from './components/Layout/DefaultBar';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppartmentsPage from './components/Appartments/AppartmentsPage';
import CreateAppartment from './components/Appartments/CreateAppartment';
import EditAppartment from './components/Appartments/EditAppartment';

function App() {
  return (
    <div className="App">
      <DefaultBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appartments" element={<AppartmentsPage />} />
        <Route path="/appartments/create" element={<CreateAppartment />} />
        <Route path="/appartments/:id/edit" element={<EditAppartment />} />
      </Routes>
    </div>
  );
}

export default App;
