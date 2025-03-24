import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
const [state, setState] = useState(() => {  //тази функция ще се изпълни само първия път, когато се mount-не компонента
const persistedState = localStorage.getItem(stateKey);
if(!persistedState) {
    return typeof initialState === 'function'
    ? initialState() //ако е функция изпълни я
    : initialState; //върни данните, или подадения на hook-а, в случая празен обект {}
}

const persistedStateData = JSON.parse(persistedState); //ако имаме данни, трябва да ги обърнем в обект
return persistedStateData; //това са началните данни на state-a [state, setState]
});


const setPersistedState = (input) => {
    const data = typeof input === 'function'
    ? input(state)
    : input;

    
const persistedData = JSON.stringify(data);
localStorage.setItem(stateKey, persistedData); //first update local storage

setState(data); // след това сетваме данните в state-a
}

return [
    state,
    setPersistedState,
]
}