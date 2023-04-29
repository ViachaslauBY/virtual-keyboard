const { body } = document;
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
body.appendChild(keyboard);

const keyboardKeys = [
  {
    Backquote: '`',
    Digit1: '1',
    Digit2: '2',
    Digit3: '3',
    Digit4: '4',
    Digit5: '5',
    Digit6: '6',
    Digit7: '7',
    Digit8: '8',
    Digit9: '9',
    Digit0: '0',
    Minus: '-',
    Equal: '=',
    Backspace: 'Backspace',
  },
  {
    Tab: 'Tab',
    KeyQ: 'q',
    KeyW: 'w',
    KeyE: 'e',
    KeyR: 'r',
    KeyT: 't',
    KeyY: 'y',
    KeyU: 'u',
    KeyI: 'i',
    KeyO: 'o',
    KeyP: 'p',
    BracketLeft: '[',
    BracketRight: ']',
    Delete: 'Delete',
  },
  {
    CapsLock: 'CapsLock',
    KeyA: 'a',
    KeyS: 's',
    KeyD: 'd',
    KeyF: 'f',
    KeyG: 'g',
    KeyH: 'h',
    KeyJ: 'j',
    KeyK: 'k',
    KeyL: 'l',
    Semicolon: ';',
    Quote: "'",
    Backslash: '\\',
    Enter: 'Enter',
  },
  {
    ShiftLeft: 'Shift',
    KeyZ: 'z',
    KeyX: 'x',
    KeyC: 'c',
    KeyV: 'v',
    KeyB: 'b',
    KeyN: 'n',
    KeyM: 'm',
    Comma: ',',
    Period: '.',
    Slash: '/',
    ArrowUp: '▲',
    ShiftRight: 'Shift',
  },
  {
    ControlLeft: 'Ctrl',
    // MetaLeft: 'Meta',
    AltLeft: 'Alt',
    Space: ' ',
    AltRight: 'Alt',
    ArrowLeft: '◄',
    ArrowDown: '▼',
    ArrowRight: '►',
    ControlRight: 'Ctrl',
  },
]; 

const addButtons = () => {
  for (let i = 0; i < keyboardKeys.length; i++) {
    const div = document.createElement('div');
    div.classList.add('line');
    let block = '';

    Object.values(keyboardKeys[i]).map((el) => {      
      block += `<div class="button" data="${el.charCodeAt()}">${el}</div>`;
    });

    div.innerHTML = block;
    keyboard.append(div);
  }
};

// По клику на клавишу
document.onkeypress = (event) => {
  console.log(event);
  document.querySelectorAll('.button').forEach((el) => {
    el.classList.remove('active');
  });

  document.querySelector(`.button[data="${event.keyCode}"]`).classList.add('active');
  
};

addButtons();



// const arr = [];
// document.onkeydown = event => {
//   console.log(event);
//   console.log(event.code);
//   arr.push(event.code)
//    console.log(arr);
// }
