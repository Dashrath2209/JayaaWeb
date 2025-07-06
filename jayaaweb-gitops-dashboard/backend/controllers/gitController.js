const octokit = require("../config/github");

// GET /api/repos?owner=org&repo=name
exports.getRepos = async (req, res, next) => {
  const { owner } = req.query;
  try {
    const repos = await octokit.rest.repos.listForOrg({
      org: owner, per_page: 100
    });
    res.json(repos.data);
  } catch (err) { next(err); }
};

// GET /api/commits?owner=org&repo=name
exports.getCommitStats = async (req, res, next) => {
  const { owner, repo } = req.query;
  try {
    const stats = await octokit.rest.repos.getCommitActivityStats({
      owner, repo
    });
    // stats.data is array of weekly {week, total, days}
    res.json(stats.data);
  } catch (err) { next(err); }
};

// GET /api/pulls?owner=org&repo=name&state=all
exports.getPullRequests = async (req, res, next) => {
  const { owner, repo, state = "all" } = req.query;
  try {
    const pulls = await octokit.rest.pulls.list({
      owner, repo, state, per_page: 100
    });
    res.json(pulls.data);
  } catch (err) { next(err); }
};