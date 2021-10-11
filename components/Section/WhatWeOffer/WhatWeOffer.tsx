import { SERVICES } from '@common/services';
import ServiceCard from '@components/Service/Service';
import classes from './WhatWeOffer.module.scss';
interface Props {}

const WhatWeOffer = (props: Props) => {
  return (
    <section className={classes['what-we-offer']}>
      <div className={classes['what-we-offer__headline']}>
        <h2>OUR SERVICES</h2>
        <h1>What We Offer</h1>
      </div>
      <div className={classes['what-we-offer__services']}>
        {SERVICES.map((service, index) => (
          <ServiceCard key={index} {...service}></ServiceCard>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
