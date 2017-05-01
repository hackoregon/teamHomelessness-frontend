import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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
};

const link = {
  margin: '0 10px',
};

const childContainer = {
  maxWidth: '600px',
  margin: '0 auto',
};

const TitleNav = props => (
  <div>
    <div style={titleContainer}>
      <Link to={props.prev} style={link}>
        <img src="https://s3-us-west-2.amazonaws.com/hacko-homeless-staging/arrow-left.svg" />
      </Link>
      <h1 style={title}>{props.title}</h1>
      <Link to={props.next} style={link}>
        <img src="https://s3-us-west-2.amazonaws.com/hacko-homeless-staging/arrow-right.svg" />
      </Link>
    </div>
    <div style={childContainer}>
      {props.children}
    </div>
  </div>
);

TitleNav.propTypes = {
  title: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default TitleNav;
