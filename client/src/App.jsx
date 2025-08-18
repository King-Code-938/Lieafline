import Navbar from './component/Layout/Navbar';
import Sidebar from './component/Layout/Sidebar';
import Footer from './component/Layout/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className=''>
      <header className='header'>
        <Navbar />
      </header>
      <div className='body flex flex-row'>
        <div className='mr-3'>
          <Sidebar />
        </div>
        <div className='p-3'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
