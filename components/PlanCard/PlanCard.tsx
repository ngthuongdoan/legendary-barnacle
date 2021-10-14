import Button from '@components/UI/Button/Button';
import { Plan } from '@model/Plan';
import classes from './PlanCard.module.scss';

interface Props {}

const PlanCard: React.VFC<Props & Plan> = (props) => {
  return (
    <div className={classes.plan}>
      <h2 className={classes['plan__title']}>{props.title}</h2>
      <p className={classes['plan__description']}>{props.description}</p>
      <h3 className={classes['plan__price']}>$ {props.price}</h3>
      <Button className={`${classes['plan__button']} ${props.active ? classes['plan__button--active'] : classes['plan__button--inactive']} `}>
        See Details
      </Button>
    </div>
  );
};

export default PlanCard;
