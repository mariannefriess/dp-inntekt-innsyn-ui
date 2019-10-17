import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'nav-frontend-paneler';
import { Hovedknapp } from 'nav-frontend-knapper';
import { useTranslation } from 'react-i18next';
import { Normaltekst, Innholdstittel } from 'nav-frontend-typografi';
import Spacer from '../Components/Spacer';

export const SamtykkePanel = ({ onClickCallback }) => {
  const { t } = useTranslation();
  return (
    <Panel>
      <div className="padding16">
        <Innholdstittel tag="h2">{t('consent_innholdstittel')}</Innholdstittel>
        <Normaltekst>{t('consent_skattetinfo')}</Normaltekst>
        <Spacer twentyPx />
        <div className="flex center">
          <Hovedknapp onClick={onClickCallback}>{t('consent_knapp')}</Hovedknapp>
        </div>
      </div>
    </Panel>
  );
};

SamtykkePanel.propTypes = {
  onClickCallback: PropTypes.func.isRequired,
};

export default SamtykkePanel;