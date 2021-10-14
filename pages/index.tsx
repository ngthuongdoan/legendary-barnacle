import Introduction from '@components/Section/Introduction/Introduction';
import OurPricing from '@components/Section/OurPricing/OurPricing';
import SubcribeNewsletter from '@components/Section/SubcribeNewsletter/SubcribeNewsletter';
import WhatWeOffer from '@components/Section/WhatWeOffer/WhatWeOffer';
import WhoWeAre from '@components/Section/WhoWeAre/WhoWeAre';
import DefaultLayout from '@layout/DefaultLayout/DefaultLayout';

export default function Home() {
  return (
    <DefaultLayout>
      <Introduction></Introduction>
      <WhoWeAre></WhoWeAre>
      <WhatWeOffer></WhatWeOffer>
      <OurPricing></OurPricing>
      <SubcribeNewsletter></SubcribeNewsletter>
    </DefaultLayout>
  );
}
