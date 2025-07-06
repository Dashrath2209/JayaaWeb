const axios    = require('axios');
const openai   = require('../config/openai');

const SPRING_URL = process.env.SPRING_SERVICE_URL; 
// e.g. http://localhost:8081/appraisals

/**
 * Fetch all appraisals and generate summaries
 */
exports.generateSummaries = async (req, res, next) => {
  try {
    // 1. Get appraisal data
    const { data: appraisals } = await axios.get(SPRING_URL);
    // 2. Build prompt for each record
    const summaries = await Promise.all(appraisals.map(async apr => {
      const prompt = `
        Employee: ${apr.employee.name}
        Period: ${apr.period}
        KPI Score: ${apr.kpiScore}
        DSA Score: ${apr.dsaScore}
        Total Score: ${apr.totalScore}
        Please write a concise performance summary and recommendation for salary increment.
      `;
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 150,
        temperature: 0.7,
      });
      return {
        id: apr.id,
        summary: response.data.choices[0].text.trim()
      };
    }));
    res.json(summaries);
  } catch (err) {
    next(err);
  }
};