var stopWatch = {
  registerHandlers: function() {
    this.$action.on('click', this.handleAction.bind(this));
    this.$reset.on('click', this.handleReset.bind(this));
  },
  handleAction: function(e) {
    if (this.$action.hasClass('start')) {
      this.handleStart();
      this.$action.removeClass('start').addClass('stop').text('Stop');
    } else {
      this.handleStop();
      this.$action.removeClass('stop').addClass('start').text('Start');
    }
  },
  handleStart: function() {
    this.interval = setInterval(this.incrementCenti.bind(this), 10);
  },
  incrementCenti: function() {
    var centi = this.increment(this.$centi.html(), 99, this.incrementSeconds.bind(this));
    this.$centi.html(centi);
  },
  incrementSeconds: function() {
    var seconds = this.increment(this.$seconds.html(), 59, this.incrementMinutes.bind(this));
    this.$seconds.html(seconds);
  },
  incrementMinutes: function() {
    var minutes = this.increment(this.$minutes.html(), 59, this.incrementHours.bind(this));
    this.$minutes.html(minutes);
  },
  incrementHours: function() {
    var hours = this.increment(this.$hours.html(), 59, this.resetHours.bind(this));
    this.$hours.html(hours);
  },
  resetHours: function() {
    this.$hours.html('00');
  },
  handleStop: function() {
    clearInterval(this.interval);
  },
  handleReset: function() {
    var zeros = '00';
    this.$centi.html(zeros);
    this.$seconds.html(zeros);
    this.$minutes.html(zeros);
    this.$hours.html(zeros);
  },
  increment: function(number, max, func) {
    ++number;
    if (number > max) {
      func();
      return '00';
    } else if (number < 10) {
      return '0' + number;
    }
    return String(number);
  },
  init: function() {
    this.$centi = $('#centi');
    this.$seconds = $('#seconds');
    this.$minutes = $('#minutes');
    this.$hours = $('#hours');

    this.$action = $('#action');
    this.$reset = $('#reset');
    this.registerHandlers();
  }
}
stopWatch.init();



