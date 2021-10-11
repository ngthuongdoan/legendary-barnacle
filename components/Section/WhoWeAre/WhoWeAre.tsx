import Button from '@components/UI/Button/Button';
import WhoWeAreImage from '@assets/svg/who-we-are-image.svg';
import WhoWeAreBackground from '@assets/svg/who-we-are-bg.svg';
import classes from './WhoWeAre.module.scss';

interface Props {}

const WhoWeAre = (props: Props) => {
  return (
    <section className={classes['who-we-are']}>
      <div className={classes['main-content']}>
        <div className={classes['main-content__image']}>
          <WhoWeAreImage></WhoWeAreImage>
        </div>
        <div className={classes['main-content__headline']}>
          <WhoWeAreBackground className={classes['who-we-are__background']}></WhoWeAreBackground>
          <h1>
            <span className={classes['main-content__headline--highlight']}>Biography</span>
            <span className={classes['main-content__headline--normal']}>Who We Are</span>
          </h1>
          <h2>
            Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you
            in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving
            your public relations. <br />
            Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time. <br />{' '}
            <br /> It's 2019: time to sink or swim.
          </h2>
          <Button className={classes['main-content__button']}>SEE MORE</Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
