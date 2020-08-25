import { createStore } from 'redux';

// DOM
const divToggle = document.querySelector('#toggle');
const divIncreaseBtn = document.querySelector('#increase');
const divDecreaseBtn = document.querySelector('#decrease');
const divCounter = document.querySelector('#counter');


// Action Definiton
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


// Action Creator
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increaseBtn = (differ) => ({ type: INCREASE, differ });
const decreaseBtn = () => ({ type: DECREASE });


// State init
const initialState = {
  toggle: false,
  counter: 0
};


// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.differ
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
        return state;
  }
}


// store
const store = createStore(reducer);


// render
const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  divCounter.innerText = state.counter;
};

render();

store.subscribe(render);


// EventListner
window.onload = () => {
  divToggle.onclick = () => store.dispatch(toggleSwitch());
  divIncreaseBtn.onclick = () => store.dispatch(increaseBtn(1));
  divDecreaseBtn.onclick = () => store.dispatch(decreaseBtn());
}