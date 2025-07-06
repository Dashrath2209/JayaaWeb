import React, { useEffect, useState } from "react";
import { fetchRepos } from "../api";

export default function RepoList({ owner, onSelect }) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!owner) return;
    fetchRepos(owner).then(r => setRepos(r.data));
  }, [owner]);
  return (
    <ul className="list-group">
      {repos.map(r => (
        <li key={r.id}
            className="list-group-item list-group-item-action"
            onClick={()=> onSelect(r.name)}>
          {r.name}
        </li>
      ))}
    </ul>
  );
}