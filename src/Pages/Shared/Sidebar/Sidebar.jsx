import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <div className="drawer ">
          
           
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 pt-14 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <NavLink to='/'>Home</NavLink>
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;