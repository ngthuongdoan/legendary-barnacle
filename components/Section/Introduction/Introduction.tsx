import PromoteImage from '@assets/svg/promote-image.svg';
import ScrollIcon from '@assets/svg/scroll-icon.svg';
import Button from '@components/UI/Button/Button';
import SocialMenu from '@components/SocialMenu/SocialMenu';
import IntroductionBackground from '@assets/svg/bg-shape.svg';
import classes from './Introduction.module.scss';
interface Props {}

const Introduction = (props: Props) => {
  return (
    <section className={classes.introduction}>
      <IntroductionBackground className={classes['introduction__background']}></IntroductionBackground>
      <SocialMenu></SocialMenu>
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
