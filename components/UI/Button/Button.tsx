import { ClassNameProps } from '../../../model/ClassNameProps';
import classes from './Button.module.scss';
interface Props {}

const Button: React.FC<Props & ClassNameProps> = (props) => {
  return <button className={`${classes.btn} ${props.className}`}>{props.children}</button>;
};

export default Button;
