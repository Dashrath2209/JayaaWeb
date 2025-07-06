const { Configuration, OpenAIApi } = require('openai');
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
module.exports = new OpenAIApi(config);