(function ($) {
  $.fn.timer = function (options) {
    const finalOptions = $.extend({
      message: 'Default Message',
      counter: '00:00:00'
    }, options);

    const hourDozen = $('<span>').html(0);
    const hourUnity = $('<span>').html(0);
    const minuteDozen = $('<span>').html(0);
    const minuteUnity = $('<span>').html(0);
    const secondDozen = $('<span>').html(0);
    const secondUnity = $('<span>').html(0);

    const separator01 = $('<span>').html(':');
    const separator02 = $('<span>').html(':');
    const message = $('<div>').html(finalOptions.message)

    $(this).append(message,
      hourDozen, hourUnity, separator01,
      minuteDozen, minuteUnity, separator02,
      secondDozen, secondUnity
    );
    const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/);
    const targetTime = regex.exec(finalOptions.counter)
    // console.log(targetTime)

    const timer = setInterval(() => {
      const currentTime = new Date();
      const currentTimeTarget = new Date();

      currentTimeTarget.setHours(targetTime[1])
      currentTimeTarget.setMinutes(targetTime[2])
      currentTimeTarget.setSeconds(targetTime[3])

      const millisecondsDifference = currentTimeTarget.getTime() - currentTime.getTime() 

      if (millisecondsDifference >= 0) {
        const difference = regex.exec(new Date(millisecondsDifference).toISOString())

        hourDozen.html(difference[1][0])
        hourUnity.html(difference[1][1])
        minuteDozen.html(difference[2][0])
        minuteUnity.html(difference[2][1])
        secondDozen.html(difference[3][0])
        secondUnity.html(difference[3][1])
      }
      else {
        clearInterval(timer)
      }
    }, 1000);

    return this;
  }
}(jQuery))

// extend define default values and merge it with recieved object, if no value is recieved
// default is kept, else default values are overwritten;