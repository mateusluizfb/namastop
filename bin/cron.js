const schedule = require('node-schedule');
const GratitudeMessage = require('../app/models/gratitude_message');

module.exports = () => {
  const rule = new schedule.RecurrenceRule();
  rule.minute = 03;

  const job = schedule.scheduleJob(rule, () => GratitudeMessage.notifyGratefulUsers());
  console.log(`Scheduling reminder job`);
}
