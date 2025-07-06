// frontend/src/components/Leaderboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

export default function Leaderboard() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    axios.get('/api/submissions/leaderboard').then(res => setBoard(res.data));
  }, []);
  return (
    <div>
      <h5>Leaderboard</h5>
      <Table striped size="sm">
        <thead><tr><th>User</th><th>Accepted</th></tr></thead>
        <tbody>
          {board.map(r=>(
            <tr key={r._id}>
              <td>{r._id.slice(-6)}</td>
              <td>{r.wins}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}