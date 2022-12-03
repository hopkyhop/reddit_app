//ф-ция отменяет действия браузера по умолчанию у события и вызывает переданную ф-цию - аргумент

//preventDefault(fn)

export function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  };
}
  