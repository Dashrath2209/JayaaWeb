// frontend/src/components/ProblemDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

export default function ProblemDetail({ id }) {
  const [prob, setProb] = useState(null);
  const [code, setCode] = useState('');
  const [result, setResult] = useState('');
  useEffect(() => {
    if (!id) return;
    axios.get(`/api/problems/${id}`).then(res => setProb(res.data));
  }, [id]);

  const submit = () => {
    axios.post('/api/submissions/submit', {
      userId: '64abc...', problemId: id, code
    }).then(res => setResult(res.data.status));
  };

  if (!prob) return <p>Select a problem</p>;
  return (
    <div>
      <h4>{prob.title}</h4>
      <p>{prob.description}</p>
      <Form.Group>
        <Form.Label>Code</Form.Label>
        <Form.Control as="textarea" rows={8}
          value={code} onChange={e=>setCode(e.target.value)} />
      </Form.Group>
      <Button className="mt-2" onClick={submit}>Submit</Button>
      {result && <p className="mt-2">Result: <strong>{result}</strong></p>}
    </div>
  );
}