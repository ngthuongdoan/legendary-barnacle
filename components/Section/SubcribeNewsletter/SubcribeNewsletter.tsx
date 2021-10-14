import Button from '@components/UI/Button/Button';
import classes from './SubcribeNewsletter.module.scss';
interface Props {}

const SubcribeNewsletter = (props: Props) => {
  return (
    <section className={classes['newsletter']}>
      <div className={classes['newsletter__headline']}>
        <h2 className={classes['newsletter__headline--highlight']}>Newsletter</h2>
        <h1 className={classes['newsletter__headline--normal']}>
          Do you want to get <span>Special News?</span>
        </h1>
      </div>
      <form className={classes['subscribe__form']}>
        <label>
          <input className={classes['subscribe__input']} type="email" placeholder="Drop Your Email" />
        </label>
        <Button className={classes['subscribe__button']}>Subcribe</Button>
      </form>
    </section>
  );
};

export default SubcribeNewsletter;
