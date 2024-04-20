import "./Styles-Components/User.css"
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const User = () => {
    return (
        <div className='user'>
            <img className='photo-avatar' src="./images/Image-perso.png" alt="Photo officiel pour le CV" />
            <h1 className='user-name'>Benjamin DE LOOF</h1>
            <p className="user-profession">Ambulancier en reconversion</p>
            <div className="user-infos">
                <p className="user-info"><HomeIcon/> 66 Bd Jacques Amyot <br /> 93410 Vaujours</p>
                <p className="user-info"><a href="tel:+330644161627"><LocalPhoneIcon/> 0644161627</a></p>
                <p className="user-info"><a href="mailto:bdeloof@gmail.com"><AlternateEmailIcon/> bdeloof@gmail.com</a></p>
                <p className="user-info"><CalendarMonthIcon/> Date de naissance : <br /> 23 Janvier 1988</p>
                <p className="user-info"><DirectionsCarIcon/> Permis B</p>
            </div>
        </div>
    );
};

export default User;