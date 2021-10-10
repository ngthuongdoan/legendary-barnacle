import Link from 'next/link';
import classes from './Navigation.module.scss';
interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className={classes.navigation}>
      <ul>
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/">SERVICES</Link>
        </li>
        <li>
          <Link href="/">PRICES</Link>
        </li>
        <li>
          <Link href="/">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
