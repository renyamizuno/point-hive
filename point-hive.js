const isWorker = !!this.importScripts;

class Pointhive {
  constructor () {}

  start () {
    this['?'] = 0;
    if (!isWorker) {
      console.log('start!');
      this.id = setInterval(this.__run.bind(this), 100);
    }
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
    if (!isWorker) {
      console.log('mining!!!');
    }
    // 足し算したい
    for(let i = 0; i< 1000000; i++) this['?'] += i;
  }
}

if (isWorker) {
  console.log('start mining!!!');
  const miner = new Pointhive('AS89asdfASDF8fjjaeiig0239458J!'); // this site key
  for (;;) {
    miner.start();
  }
}
