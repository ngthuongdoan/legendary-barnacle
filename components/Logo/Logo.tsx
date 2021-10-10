import LogoImage from '../../assets/svg/logo.svg';
import classes from './Logo.module.scss';

interface Props {}

const Logo = (props: Props) => {
  return (
    <div className={classes.logo}>
      <LogoImage />
      <h1>Marketing</h1>
    </div>
  );
};

export default Logo;
