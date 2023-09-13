import { NavLink } from "react-router-dom";
import './styles.css'

const Header = ({isLogged, handleLogout}:{isLogged:boolean, handleLogout: Function}):JSX.Element => {
    return (<header>
        {isLogged && (
          <nav>
            <ul>
              <li>
                <NavLink to={'/'} aria-label="Redirect to Home">Home</NavLink>
              </li>
              <li>
                <NavLink to={'/GameBoard'} aria-label="Redirect to game board">Game Board</NavLink>
              </li>
              <li>
                <NavLink to={'/ScoreBoard'} aria-label="Redirect to score board">Score Board</NavLink>
              </li>
              <li>
                <NavLink to={'/login'} aria-label="logout option" onClick={()=>handleLogout()}>Log out</NavLink>
              </li>
            </ul>
          </nav>
        )}
      </header>);
}

export default Header;