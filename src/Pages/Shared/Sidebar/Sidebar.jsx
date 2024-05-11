import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="drawer ">
          
           
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-14 min-h-full bg-gradient-to-t from-[#9e50d6] to-[#211137] text-white ">
                    

                    <div className='flex items-center justify-center mt-5 '>
                    <ul className='flex flex-col gap-2  w-full'>
                        
                        <NavLink to='/dashboard/skills' className={({ isActive }) => `flex gap-2 hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A] items-center px-3 py-2 text-primary-color ${isActive ? ' bg-gradient-to-r from-[#7E4AE8] to-[#371C6A] px-3 py-2  shadow-sm' : ''}`}> 
                        <div className='size-1 rounded-md bg-primary-color'></div>
                        <span className="truncate">Skills</span>
                        </NavLink>
                        <NavLink to='/dashboard/projects' className={({ isActive }) => `px-3 py-2 flex hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A] gap-2 items-center text-primary-color ${isActive ? 'text-primary-color bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]  shadow-sm' : ''}`}>
                            <div className='size-1 rounded-md bg-primary-color'></div>
                            <span className="truncate">Projects</span>
                        </NavLink>
                        <NavLink to='/dashboard/blogs' className={({ isActive }) => `px-3 py-2 hover:bg-gradient-to-r from-[#7E4AE8] to-[#371C6A] flex gap-2 items-center text-primary-color ${isActive ? 'text-primary-color bg-gradient-to-r from-[#7E4AE8] to-[#371C6A]   shadow-sm' : ''}`}>
                            <div className='size-1 rounded-md bg-primary-color'></div>
                            <span className="truncate">Blogs</span>
                        </NavLink>
                    </ul>
                </div>
                 
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;