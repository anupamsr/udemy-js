let button1 = document.createElement('button');
button1.setAttribute('class', 'sub-ms');
button1.innerHTML = 'Subscribe to Milliseconds';
document.body.appendChild(button1);
document.body.appendChild(document.createElement('br'));

let button2 = document.createElement('button');
button2.setAttribute('class', 'unsub-ms');
button2.innerHTML = 'Unsubscribe to Milliseconds';
document.body.appendChild(button2);
document.body.appendChild(document.createElement('br'));

document.body.appendChild(document.createElement('br'));

let button3 = document.createElement('button');
button3.setAttribute('class', 'sub-s');
button3.innerHTML = 'Subscribe to Seconds';
document.body.appendChild(button3);
document.body.appendChild(document.createElement('br'));

let button4 = document.createElement('button');
button4.setAttribute('class', 'unsub-s');
button4.innerHTML = 'Unsubscribe to Seconds';
document.body.appendChild(button4);
document.body.appendChild(document.createElement('br'));

document.body.appendChild(document.createElement('br'));

let firebutton = document.createElement('button');
firebutton.setAttribute('class', 'fire');
firebutton.innerHTML = 'Fire';
document.body.appendChild(firebutton);

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((item) => {
      if (item != fn) return item;
    });
    console.log(`You are now unsubscribed to ${fn.name}`);
  }

  fire() {
    console.log('Firing...');
    this.observers.forEach(item => item.call());
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', () => click.subscribe(getCurMilliseconds));
document.querySelector('.unsub-ms').addEventListener('click', () => click.unsubscribe(getCurMilliseconds));
document.querySelector('.sub-s').addEventListener('click', () => click.subscribe(getCurSeconds));
document.querySelector('.unsub-s').addEventListener('click', () => click.unsubscribe(getCurSeconds));
document.querySelector('.fire').addEventListener('click', () => click.fire());

// Click Handler
const getCurMilliseconds = () => console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
const getCurSeconds = () => console.log(`Current Seconds: ${new Date().getSeconds()}`);