import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import classes from './Header.module.scss';

interface Props {}

const Header = (props: Props) => {
  return (
    <header className={classes.header}>
      <Logo></Logo>
      <Navigation></Navigation>
    </header>
  );
};

export default Header;
