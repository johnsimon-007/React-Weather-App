import ReactDom from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Signup from './Signup';
import Login from './Login';
import Landing from './Landing';
import { useState } from 'react';
const root = ReactDom.createRoot(document.getElementById('root'));

function App() {
  const [user, setUser] = useState(
        [
            {
                username: "john",
                password: "123"
            }
        ]
    );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/landing" element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

root.render(
<App/>
)