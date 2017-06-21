import React, { PropTypes } from 'react';

const titleContainer = {
  backgroundColor: '#F3F2F3',
  height: '124px',
  margin: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const title = {
  textAlign: 'center',
  fontWeight: 'bold',
  margin: '0 100px',
  width: '450px',
};

const childContainer = {
  maxWidth: '500px',
  margin: '0 auto',
};

const TitleNav = props => (
  <div>
    <div style={titleContainer}>
      <h1 style={title}>{props.title}</h1>
    </div>
    <div style={childContainer}>
      {props.children}
    </div>
  </div>
);

TitleNav.propTypes = {
  title: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default TitleNav;
