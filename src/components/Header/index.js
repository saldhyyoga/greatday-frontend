import React from 'react';
import './style.css';

export default function Title(props) {
  return (
    <div className="center-text">
      {props.title}
    </div>
  )
}
