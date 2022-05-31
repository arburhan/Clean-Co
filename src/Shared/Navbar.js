import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navTabs = <>
        <li> <NavLink className='rounded-xl' to='/' > Home </NavLink> </li>
        <li> <NavLink className='rounded-xl' to='/about' > About </NavLink> </li>
        <li> <NavLink className='rounded-xl' to='/services' > Services </NavLink> </li>
        <li> <NavLink className='rounded-xl' to='/contact' > Contact </NavLink> </li>
        <li> <NavLink className='rounded-xl' to='/login' > Login </NavLink> </li>
    </>
    return (
        <nav>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-300  px-12">
                        <div className="flex-1 px-2 mx-2 text-2xl font-bold">Clean Co</div>
                        <div className="flex-none lg:hidden">
                            <label for="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal  gap-x-2">
                                {/* <!-- Navbar menu content here --> */}
                                {navTabs}
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Page content here --> */}
                    Content
                </div>
                <div className="drawer-side">
                    <label for="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {/* <!-- Sidebar content here --> */}
                        {navTabs}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;