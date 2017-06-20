 // SIGNATURE PROGRESS
  function moveProgressBar(percent, bar) {
      var getPercent = (percent.data('progress-percent') / 100);
      var getProgressWrapWidth = percent.width();
      var progressTotal = getPercent * getProgressWrapWidth;
      var animationLength = 1000;

      // on page load, animate percentage bar to data percentage length
      // .stop() used to prevent animation queueing
      bar.stop().animate({
          left: progressTotal
      }, animationLength);
  }

  module.exports = {moveProgressBar: moveProgressBar}; //exporting it instead of calling it