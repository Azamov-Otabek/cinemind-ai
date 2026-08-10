import "./Header.scss"
import { Search, Bell, ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <header className="header">
        <div className="header__left">
            <div className="header__search">
                <Search className="header__search-icon" size={18}/>
                <input className="header__search-input" type="text" placeholder='Search movies, TV shows...' />
            </div>
        </div>


        <div className="header__right">
            <button className="header__notification">
                <Bell size={20}/>
                <span></span>
            </button>



            <div className="header__profile">
                <div className="header__profile-avatar">OA</div>
                <div className="header__profile-info">
                      <p className="profile-info--name">Otabek</p>
                      <p className="profile-info--role">Movie Explorer</p>
                </div>
                <ChevronDown size={17} className="header__profile-ChevronDown"/>
            </div>
        </div>
    </header>
  )
}

export default Header
