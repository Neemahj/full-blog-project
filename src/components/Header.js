import { Link } from "react-router-dom";
import {FaUserPlus} from "react-icons/fa"
const Header = () => {
  return (
    <header>
      <h1>The Writing Room</h1>
      <Link to="/" className="nav-items">Home</Link>
      <Link to="new-blog" className="nav-items">New Blog</Link>
      <Link to="register" className="nav-items">< FaUserPlus style={{font: 100}} /></Link>
    </header>
  )
}

export default Header
