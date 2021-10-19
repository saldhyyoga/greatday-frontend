import React, { useState, useEffect } from 'react';
import axios from 'axios';
import photo from './fakedata';
import Title from '../../components/Header';
import CardList from '../../components/CardList'
import Navbar from '../../components/Navbar';

export default function Photos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => {
      let temp = res.data.slice(0,15)
      setData(temp)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <Navbar />
      <Title title={"Photo List"} />
      <CardList data={data} />
    </div>
  )
}
