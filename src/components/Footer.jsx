import {memo} from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from '@mui/material';
import classes from './Css Modules/Footer.module.css';

function Footer() {
  return (
    <div className="footer">
      <div className={classes.connect}>
        <Link
          color={'white'}
          underline="none"
          href="https://www.linkedin.com/in/hrishikesh-a-tiwari-5b672a229/"
        >
          <LinkedInIcon className={classes.icon}></LinkedInIcon>
        </Link>
        <Link
          href="https://github.com/Hrishikesh-das-Tiwari"
          underline="none"
          color={'white'}
        >
          <GitHubIcon className={classes.icon}></GitHubIcon>
        </Link>
        <Link
          href="https://www.instagram.com/_hrishi_1903/"
          underline="none"
          color={'white'}
        >
          <InstagramIcon className={classes.icon}></InstagramIcon>
        </Link>
      </div>
    </div>
  );
}

export default memo(Footer)