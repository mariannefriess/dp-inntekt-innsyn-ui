import React, { useState } from 'react';
import { init } from '@sentry/browser';
import { useTranslation } from 'react-i18next';
import AlertStripe from 'nav-frontend-alertstriper';
import Header from '../Components/Header';
import BackButton from '../Components/BackButton';
import SamtykkePanel from '../Kalkulator/SamtykkePanel';
import Spacer from '../Components/Spacer';
import Kalkulator from '../Kalkulator/Kalkulator';
import ErrorBoundary from '../Components/ErrorBoundary';
import { instance } from '../Api';
import tracking from '../lib/tracking';
import './App.css';

// sentry
const environment = window.location.hostname;
init({
  dsn: 'https://07ffd2b8012e4e9ba2a6643e2864d828@sentry.nav.no/21',
  environment,
});

export const App = () => {
  const { t } = useTranslation();
  const [isSamtykke, setSamtykke] = useState(false);
  const [errors, setError] = useState({ hasError: false, status: null, statusText: null });
  // axios apply interceptor on response
  instance.interceptors.response.use(response => response, error => setError({ hasError: true, ...error }));

  tracking.logEvent('ANKOMMER_FORSIDEN', {
    environment,
  });

  const handleSetSamtykke = () => {
    tracking.logEvent('GITT_SAMTYKKE');
    setSamtykke(true);
  };

  return (
    <div className="App">
      <Header />

      <div className="content">
        <AlertStripe type="info">{t('APP.BETA')}</AlertStripe>
        <Spacer twentyPx />
        <ErrorBoundary apiErrors={errors}>{isSamtykke ? <Kalkulator /> : <SamtykkePanel onClickCallback={handleSetSamtykke} />}</ErrorBoundary>
        <Spacer twentyPx />
        <BackButton />
        <Spacer twentyPx />
      </div>
    </div>
  );
};

export default App;
