import SportsMmaIcon from '@mui/icons-material/SportsMma';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Interests() {
    return (
    <div className="skills">
        <h2>Loisirs</h2>
        <ul>
            <li className='loisir'><SportsMmaIcon />Escrime</li>
            <li className='loisir'><SportsSoccerIcon />Football</li>
            <li className='loisir'><SportsEsportsIcon />Jeux Vidéos</li>
            <li className='loisir'><LocalMoviesIcon />Cinéma</li>
            <li className='loisir'><MusicNoteIcon />Musique Live</li>
        </ul>
    </div>
    )
}

export default Interests