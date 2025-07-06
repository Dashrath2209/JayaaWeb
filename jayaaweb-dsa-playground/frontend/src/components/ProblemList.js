// frontend/src/components/ProblemList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';

export default function ProblemList({ onSelect }) {
  const [probs, setProbs] = useState([]);
  useEffect(() => {
    axios.get('/api/problems').then(res => setProbs(res.data));
  }, []);
  return (
    <ListGroup>
      {probs.map(p => (
        <ListGroup.Item key={p._id} action onClick={()=>onSelect(p._id)}>
          {p.title} <span className="badge bg-secondary">{p.difficulty}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}