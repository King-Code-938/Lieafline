import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const link = 'px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800';
  const active = 'bg-gray-200 dark:bg-gray-700';

  return (
    <aside className='w-40 bg-green-100 h-screen p-4 hidden md:block'>
      <ul>
        <li className='mb-2'>🏠 Dashboard</li>
        <li className='mb-2'>
          <NavLink to='/skills' className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
            🌱 Skills
          </NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/progress' className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
            🌱 Progress
          </NavLink>
        </li>
        <li className='mb-2'>
          <NavLink to='/profile' className={({ isActive }) => `${link} ${isActive ? active : ''}`}>
            🌱 Profile
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
