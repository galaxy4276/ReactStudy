import { createStore } from 'redux';

// Document Object Model
const divToggle = document.querySelector('.toggle');
const countModel = document.querySelector('h3');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');


// Action Definition
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';


// Action Creator
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (num) => ({ type: INCREASE, num });
const decrease = () => ({ type: DECREASE });


// State Definition
const initialState = {
  toggle: false,
  counter: 0,
};


// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.num,
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

  countModel.innerText = state.counter;
};

render();

// subscribe
store.subscribe(render);


// dispatch
divToggle.onclick = () => store.dispatch(toggleSwitch());
increaseBtn.onclick = () => store.dispatch(increase(1));
decreaseBtn.onclick = () => store.dispatch(decrease());
