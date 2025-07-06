const router = require("express").Router();
const { getRepos, getCommitStats, getPullRequests } = require("../controllers/gitController");

router.get("/repos", getRepos);
router.get("/commits", getCommitStats);
router.get("/pulls", getPullRequests);

module.exports = router;