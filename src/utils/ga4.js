import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};