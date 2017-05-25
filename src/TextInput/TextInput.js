import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { css } from 'aphrodite';

import defaultStyles from './styles';

import Icon from '../Icon';

class TextInput extends Component {

  setInputIcon() {
    const { icon, className } = this.props;
    if(typeof icon === typeof '') {
      return (<Icon name={this.props.icon} appearance="input" color={className} />);
    }
    return icon;
  }
  render() {
    const { className, disabled } = this.props;
    return (
      <div className={css(defaultStyles.wrapper)}>
        {this.props.icon && this.setInputIcon()}
        <input {...this.props} className={css(defaultStyles[className])} disabled={ className === 'disabled' ? true : disabled} />
      </div>
    );
  }

}

TextInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

TextInput.defaultProps = {
  type: 'text',
  className: 'active'
};

export default TextInput;