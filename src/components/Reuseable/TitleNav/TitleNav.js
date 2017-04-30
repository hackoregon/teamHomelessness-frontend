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

const TitleNav = props => (
  <div>
    <div style={titleContainer}>
      <Link to={props.prev} style={link}>
        <img src="../../assets/arrow-left.svg" />
      </Link>
      <h1 style={title}>{props.title}</h1>
      <Link to={props.next} style={link}>
        <img src="../../assets/arrow-right.svg" />
      </Link>
    </div>
    {props.children}
  </div>
);

TitleNav.propTypes = {
  title: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default TitleNav;
