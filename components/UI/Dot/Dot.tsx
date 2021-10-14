import classes from './Dot.module.scss';

interface Props {
  active?: boolean;
}

const defaultProps = {
  active: false,
};
const Dot: React.VFC<Props> = (props) => {
  return <span className={`${classes.dot} ${props.active && classes['dot--active']}`}></span>;
};

Dot.defaultProps = defaultProps;
export default Dot;
