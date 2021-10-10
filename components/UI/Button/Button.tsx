import classes from './Button.module.scss';
interface Props {}

const Button: React.FC<Props> = (props) => {
  return <button className={classes.btn}>{props.children}</button>;
};

export default Button;
