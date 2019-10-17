import React from 'react';
import { Tilbakeknapp } from 'nav-frontend-ikonknapper';
import { useTranslation } from 'react-i18next';

function BackButton() {
  const { t } = useTranslation();
  return (
    <a href="https://nav.no/dagpenger">
      <Tilbakeknapp mini>{t('TilbakeTilInfoKnapp')}</Tilbakeknapp>
    </a>
  );
}
export default BackButton;