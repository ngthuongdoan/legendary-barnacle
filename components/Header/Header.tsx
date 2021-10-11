import Logo from '@components/Logo/Logo';
import Navigation from '@components/Navigation/Navigation';
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
