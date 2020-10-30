const schedule = require('node-schedule');

const task_0 = schedule.scheduleJob('*/5 * * * * *', function(){
    console.log('Executing task 0...\nSeconds:', new Date().getSeconds());
});

setTimeout(function(){
    task_0.cancel();
    console.log('Stopping Task 0...');
}, 20000);

const timeRule = new schedule.RecurrenceRule();
timeRule.dayOfWeek = [new schedule.Range(0, 7)]
timeRule.second = 30;

const task_1 = schedule.scheduleJob(timeRule, function(){
    console.log('Executing task 1...\nSeconds:', new Date().getSeconds());
});