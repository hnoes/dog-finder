import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet our dogs:</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              {dog.name} - {dog.age} years old
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;
