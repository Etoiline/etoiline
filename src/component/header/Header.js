import header from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={header.main}>
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/portfolio'>Portfolio</Link>
    
    </div>
  )
}

export default Header