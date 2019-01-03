const schedule = require('node-schedule');

module.exports = () => {
  const rule = new schedule.RecurrenceRule();
  rule.minute = 11;

  const job = schedule.scheduleJob(rule, () => {
    // console.log('OLAAAAAAAAAAAAAAAR');
  });
}
