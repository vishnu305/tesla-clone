import React from 'react';
import styled from 'styled-components';
import bac1 from './images/model-s.jpg';
import bac2 from './images/model-x.jpg';
import bac3 from './images/model-y.jpg';
import bac4 from './images/model-3.jpg';
import solar from './images/solar-panel.jpg';
import solar1 from './images/solar-roof.jpg';
import acc from './images/accessories.jpg';

import Section from './Section';
function Home(){
  return(<Container>
        <Section
          id="S"
          title="Model S"
          backgroundimg={bac1}
          description="Order Online for Touchless Delivery"
          left="Custom Order"
          right="Existing inventory"
        />
        <Section
          id="X"
          title="Model X"
          backgroundimg={bac2}
          description="Order Online for Touchless Delivery"
          left="Custom Order"
          right="Existing inventory"
        />
        <Section
          id="Y"
          title="Model Y"
          backgroundimg={bac3}
          description="Order Online for Touchless Delivery"
          left="Custom Order"
          right="Existing inventory"
        />
        <Section
          id="3"
          title="Model 3"
          backgroundimg={bac4}
          description="Order Online for Touchless Delivery"
          left="Custom Order"
          right="Existing inventory"
        />
        <Section
          id=""
          title="Lowest Cost Solar Panels in America"
          description="Money-back guarantee"
          backgroundimg={solar}
          left="Order Now"
          right="Learn more"
        />
        <Section
          id=""
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundimg={solar1}
          left="Order Now"
          right="Learn more"
        />
        <Section
          id=""
          title="Accessories"
          description=""
          backgroundimg={acc}
          left="Order Now"
        />
    </Container>)
}

export default Home;

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`
