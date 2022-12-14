import { NavLink } from 'react-router-dom';
// import { HiOutlineHashtag, HiOutlineHome, HiOutlineMenu, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';
// import { RiCloseLine } from 'react-icons/ri';

import logo from '../assets/logoMusico.png'
import { links } from '../assets/constants';

// const links = [
//   { name: 'Discover', to: '/', icon: HiOutlineHome },
//   { name: 'Around You', to: '/around-you', icon: HiOutlinePhotograph },
//   { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
//   { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
// ];

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"

      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <NavLink
          key='Discover'
          to='/'
        >
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        </NavLink>

        <NavLinks />
      </div>
    </>
  );
};

export default Sidebar;