import axios from "axios";
const API = axios.create({ baseURL: "/api/git" });

export const fetchRepos = owner =>
  API.get("/repos", { params: { owner } });

export const fetchCommits = (owner, repo) =>
  API.get("/commits", { params: { owner, repo } });

export const fetchPulls = (owner, repo, state) =>
  API.get("/pulls", { params: { owner, repo, state } });