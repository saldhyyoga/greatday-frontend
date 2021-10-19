import React from 'react';
import Card from '../Card';
import './style.css';

export default function CardList(props) {
  console.log(props.data)
  return (
    <div className="card-list">
      
      {props.data.map((item) => {
        return(
          <Card 
            image={item.url}
            title={item.title}
            description={item.description}
          />
        )
      })}
    </div>
  )
}
