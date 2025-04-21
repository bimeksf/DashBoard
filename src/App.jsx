import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SidebarLayout from './layout/SidebarLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Reports from './pages/Reports';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<SidebarLayout />}>
        
          <Route  index  element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
