import React from 'react';
import PropTypes from 'prop-types';

import { GOOGLE_AUTH_URL } from '../../../../constants';

const GoogleAuth = props => <span><a href={GOOGLE_AUTH_URL}>{props.text}</a></span>;

GoogleAuth.propTypes = {
  text: PropTypes.string
};

export default GoogleAuth;