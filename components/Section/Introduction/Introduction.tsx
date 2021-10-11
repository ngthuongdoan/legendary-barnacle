import Header from '../../Header/Header';
import PromoteImage from '../../../assets/svg/promote-image.svg';
import ScrollIcon from '../../../assets/svg/scroll-icon.svg';
import classes from './Introduction.module.scss';
import Button from '../../UI/Button/Button';
import SocialMenu from '../../../components/SocialMenu/SocialMenu';
interface Props {}

const Introduction = (props: Props) => {
  return (
    <section className={classes.introduction}>
      <SocialMenu></SocialMenu>
      <Header></Header>
      <div className={classes['main-content']}>
        <div className={classes['main-content__headline']}>
          <h1>
            SOCIAL MEDIA <br />
            <span className={classes['main-content__headline--highlight']}>FOR BUSINESS!</span>
          </h1>
          <h2>
            PERFOMANCE BASED SOCIAL MEDIA AGENCY <br /> WE ARE LOREM MEDIA
          </h2>
          <Button className={classes['main-content__button']}>GET A FREE AUDIT</Button>
        </div>
        <div className={classes['main-content__image']}>
          <PromoteImage></PromoteImage>
        </div>
      </div>
      <div className={classes['scroll-down']}>
        <ScrollIcon></ScrollIcon>
      </div>
    </section>
  );
};

export default Introduction;
