import {login, logout} from '../../services/firebase'
import Heading from '../Heading/Heading'
import headerphoto from '../../images/headerphoto.jpg'

const Header = (props) => (
    <header>
     {/* <img className="headerphoto" src={headerphoto} alt=""/> */}
        <h1 className="headerTitle">Fit Journal</h1>
        <ul>
            {
                props.user ? 
                <>
                <li><Heading /> {props.user.displayName}</li>
                <li><img src={props.user.photoURL} alt={props.user.displayName}/></li>
            <li className="auth-link" onClick={logout}>Logout</li>
                </>
                :
                <li className="auth-link" onClick={login}>Login</li>
            }
            
           
        </ul>
       
    </header>

)
    

export default Header;