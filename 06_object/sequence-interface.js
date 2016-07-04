function ArraySeq(array) {
  this.array = array;
  this.counter = 0;
}

ArraySeq.prototype.next = function() {
  var next = this.array[this.counter];
  this.counter++;
  return next;
}

ArraySeq.prototype.hasNext = function() {
  return this.counter <= this.array.length-1;
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
  this.counter = 0;
}

RangeSeq.prototype.next = function() {
  var next = this.from + this.counter;
  this.counter++;
  return next;
}

RangeSeq.prototype.hasNext = function() {
  return this.counter <= (this.to - this.from);
}

function logFive(seq) {
  var count = 5;
  while (seq.hasNext() && count > 0) {
    console.log(seq.next());
    count--;
  }
}
