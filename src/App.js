import React from 'react';
import styles from './styles';

import {
  Navbar,
  Billings,
  CardDeal,
  Business,
  Clients,
  ClickToAction,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from './components/index';

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} sm:px-16 px-6`}>
        <Stats />
        <Business />
        <Billings />
        <CardDeal />
        <Testimonials />
        <Clients />
        <ClickToAction />
        <Footer />
      </div>
    </div>
    </div>
);

export default App;
