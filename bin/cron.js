const schedule = require('node-schedule');
const GratitudeMessage = require('../app/models/gratitude_message');

module.exports = () => {
  const rule = new schedule.RecurrenceRule();
  if (process.env.CRON_TIME == 'sexta') {
    rule.dayOfWeek = 5;
  } else {
    rule.minute = process.env.CRON_TIME;
  }


  const job = schedule.scheduleJob(rule, () => GratitudeMessage.notifyGratefulUsers());
  console.log(`Scheduling reminder job`);
}
