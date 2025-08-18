import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const link = 'px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800';
  const active = 'bg-gray-200 dark:bg-gray-700';

  return (
    <header className='sticky top-0 z-20 border-b bg-white/70 backdrop-blur dark:bg-neutral-900/70'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
        <div className='font-extrabold tracking-tight'>🌱 Lieafline 🌿</div>
        <ul className='flex gap-1 text-sm'>
          <li>
            <NavLink to='/' end className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/settings' className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
