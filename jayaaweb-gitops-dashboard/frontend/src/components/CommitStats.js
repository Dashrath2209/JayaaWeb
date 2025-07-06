import React, { useEffect, useState } from "react";
import { fetchCommits } from "../api";
import { Line } from "react-chartjs-2";

export default function CommitStats({ owner, repo }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!repo) return;
    fetchCommits(owner, repo).then(r => setData(r.data));
  }, [repo]);

  const chartData = {
    labels: data.map(w => new Date(w.week * 1000).toLocaleDateString()),
    datasets: [{
      label: "Commits per Week",
      data: data.map(w => w.total),
      borderColor: "blue",
      fill: false
    }]
  };

  return repo ? (
    <Line data={chartData} />
  ) : <p>Select a repository</p>;
}