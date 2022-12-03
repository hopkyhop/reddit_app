import { assoc } from "../js/assoc";

//генерирует рандомную строку
//generateRandomString()
export const generateRandomString = () => Math.random().toString(36).substring(2,15);

//передает в assoc ключ и сгенерированное значение
export const assignId = assoc('id', generateRandomString());

export const generateId = <O extends object>(obj: O) => 
    assoc('id', generateRandomString())(obj);
