import {Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UsersPage />} />
        <Route path='/details/:userId' element={<UserDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
