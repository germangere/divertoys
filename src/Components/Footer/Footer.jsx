import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
      <div>
        <p>Desarrollado por Germán para Divertoys Inc.</p>
      </div>
      <div>
        <a href='http://www.github.com/germangere/divertoys.geredus' target='__blank' rel='noopener noreferer'><FontAwesomeIcon icon={faGithub} /></a>
        <a href='http://www.linkedin.com/in/germangere' target='__blank' rel='noopener noreferer'><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </div>
  )
}

export default Footer