const { body } = document;
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

body.appendChild(wrapper);
wrapper.appendChild(textarea);
wrapper.appendChild(keyboard);

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

    Object.entries(keyboardKeys[i]).map(el => {
      block += `<div class="button" data="${el[0]}">${el[1]}</div>`;
    });

    div.innerHTML = block;
    keyboard.append(div);
  }
};

addButtons();

// По клику на кнопку
document.onkeydown = (event) => {
  document.querySelectorAll('.button').forEach((el) => {
    el.classList.remove('active');
  });

  document.querySelector(`.button[data="${event.code}"]`).classList.add('active');
};

document.onkeyup = () => {
  document.querySelectorAll('.button').forEach((el) => {
    el.classList.remove('active');
  });
};