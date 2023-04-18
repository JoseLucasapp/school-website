import './App.css';
import Home from './pages/home';
import Item from './pages/item';
import Login from './pages/login'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Menu from './pages/menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/home/:option',
    element: <Home />
  },
  {
    path: '/item/:itemId',
    element: <Item />
  },
  {
    path: '/menu',
    element: <Menu />
  },
])

function App() {
  return (
    <div className="App">
      < RouterProvider router={router} />
    </div>
  );
}

export default App;
