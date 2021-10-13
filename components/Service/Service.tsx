import Button from '@components/UI/Button/Button';
import DOMPurify from 'isomorphic-dompurify';
import { Service } from '@model/Service';
import classes from './Service.module.scss';
interface Props {}

const ServiceCard: React.VFC<Props & Service> = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.image} className={classes['card__image']} />
      <h3 className={classes['card__title']}>{props.title}</h3>
      <p className={classes['card__description']} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(props.description) }}></p>
      <Button className={classes['card__button']}>SEE MORE</Button>
    </div>
  );
};

export default ServiceCard;
