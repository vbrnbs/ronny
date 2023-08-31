import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className='flex justify-between items-center px-6 h-24'>
      <div>
        <Link to='/'>RONNY</Link>  
        </div>
      <div className='flex gap-6'>
        <div>About</div>
        <div>Gallery</div>
        <div>Contact</div>
      </div>
    </div>
  )
}

export default Header
