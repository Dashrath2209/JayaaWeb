import React, { useEffect, useState } from "react";
import { fetchPulls } from "../api";
import { Table } from "react-bootstrap";

export default function PullRequests({ owner, repo }) {
  const [prs, setPrs] = useState([]);
  useEffect(() => {
    if (!repo) return;
    fetchPulls(owner, repo, "all").then(r => setPrs(r.data));
  }, [repo]);

  return repo ? (
    <Table striped size="sm">
      <thead>
        <tr><th>Title</th><th>State</th><th>Created At</th></tr>
      </thead>
      <tbody>
        {prs.map(p=>(
          <tr key={p.id}>
            <td><a href={p.html_url} target="_blank">{p.title}</a></td>
            <td>{p.state}</td>
            <td>{new Date(p.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : <p>Select a repository</p>;
}