import Navbar from './component/Layout/Navbar';
import Sidebar from './component/Layout/Sidebar';
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
      <footer className='footer w-full bg-gray-200 text-center p-4'>
        <p>&copy; 2025 Lieafline. All rights reserved.</p>
      </footer>
    </div>
  );
}
