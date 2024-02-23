import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function Hamburger({isOpen, toggleNavbar}) {
 
  return ( 
    <div onClick={toggleNavbar} className='absolute top-[10px] right-4  md:hidden'>
      {isOpen ? <MenuOpenIcon style={{ fontSize: '2.5rem' }}/> : <MenuIcon style={{ fontSize: '2.5rem' }}/>}
    </div>
   );
}

export default Hamburger;