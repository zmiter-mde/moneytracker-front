import React from 'react';
import PropTypes from 'prop-types';

const AuthFormContainer = props => <div>
  {props.children}
</div>;

AuthFormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default AuthFormContainer;