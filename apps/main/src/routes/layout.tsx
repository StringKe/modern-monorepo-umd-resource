import { Link, Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>
        <span> | </span>
        <Link to={'/sub'}>sub</Link>
      </div>
      <Outlet />
    </div>
  );
}
