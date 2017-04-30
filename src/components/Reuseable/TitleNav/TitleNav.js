import React, { PropTypes } from 'react';

const container = {
  display: 'absolute',
};

class TitleNav extends React.Component {
  render() {
    return (
      <div>
        <div style={container}>
          <h1>{this.props.title}</h1>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default TitleNav;
