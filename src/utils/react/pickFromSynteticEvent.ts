//ф-ция получает generic элемента на к-ом происходит событие, ключ, callback
//и далее вызывает callback со значением ключа

//по сути заменяет эту запись 
//<input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)}/>
//<input value={value} onChange={getValue(callbackFn)}/>


import React from "react";

export function pickFromSynteticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => 
    <E extends (t: T[K]) => void>(fn: E) => 
      (e: React.SyntheticEvent<T>) =>
         fn(e.currentTarget[key]);
}
  
export const getValue = pickFromSynteticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSynteticEvent<HTMLInputElement>()('checked');
//getValue(callbackFn)
