import { PLANS } from '@common/plans';
import PlanCard from '@components/PlanCard/PlanCard';
import Dot from '@components/UI/Dot/Dot';
import classes from './OurPricing.module.scss';
interface Props {}

const OurPricing = (props: Props) => {
  return (
    <section className={classes['our-pricing']}>
      <div className={classes['our-pricing__headline']}>
        <h2 className={classes['our-pricing__headline--highlight']}>Pricing</h2>
        <h1 className={classes['our-pricing__headline--normal']}>Our Pricing</h1>
      </div>
      <div className={classes['our-pricing__plans']}>
        {PLANS.map((plan, index) => (
          <PlanCard key={index} {...plan}></PlanCard>
        ))}
      </div>
      <div className={classes['our-pricing__indicators']}>
        <Dot></Dot>
        <Dot></Dot>
        <Dot active={true}></Dot>
      </div>
    </section>
  );
};

export default OurPricing;
