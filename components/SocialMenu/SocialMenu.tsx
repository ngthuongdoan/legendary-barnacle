import Twitter from '@assets/svg/001-twitter-logo-silhouette.svg';
import Google from '@assets/svg/002-google-plus.svg';
import Facebook from '@assets/svg/003-facebook.svg';
import Instagram from '@assets/svg/instagram.svg';
import Line from '@assets/svg/line.svg';
import classes from './SocialMenu.module.scss';
interface Props {}

const SocialMenu = (props: Props) => {
  return (
    <ul className={classes.social}>
      <li>
        <Facebook></Facebook>
      </li>
      <li>
        <Google></Google>
      </li>
      <li>
        <Twitter></Twitter>
      </li>
      <li>
        <Instagram></Instagram>
      </li>
      <li>
        <Line></Line>
      </li>
    </ul>
  );
};

export default SocialMenu;
