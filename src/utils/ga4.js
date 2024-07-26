import ReactGA from 'react-ga4';

const TRACKING_ID = import.meta.env.GA_Tracking_ID;
ReactGA.initialize(TRACKING_ID);

export const trackPageView = (page) => {
  ReactGA.send({ hitType: 'pageview', page });
};