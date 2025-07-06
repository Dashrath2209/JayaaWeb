require("dotenv").config();
const express = require("express");
const gitRoutes = require("./routes/gitRoutes");
const app = express();

app.use(express.json());
app.use("/api/git", gitRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`🚀 GitOps API on port ${PORT}`));