class Coinhive {
  constructor () {}

  start () {
    console.log('start!');
    this['?'] = 0;
    this.id = setInterval(this.__run.bind(this), 100);
  }

  stop () {
    if (this.id) {
      console.log('stop!');
      clearInterval(this.id);
      this.id = null;
      this['?'] = null;
    }
  }

  __run () {
    console.log('mining!!!');
    // 足し算したい
    for(let i = 0; i< 1000000; i++) this['?'] += i;
  }
}
