import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end gap-6 p-5 text-2xl bg-gray-300">
        <NavLink to='' className={({isActive}) => isActive?"text-sky-400":""}>Home</NavLink>
        <NavLink to='create-employee' className={({isActive}) => isActive?"text-sky-400":""}>Create Employee</NavLink>
        <NavLink to='employees' className={({isActive}) => isActive?"text-sky-400":""}>Employee List</NavLink>
    </nav>
  )
}

export default Header
