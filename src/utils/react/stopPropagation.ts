//ф-ция отменяет всплытие события и вызывает переданную ф-цию - аргумент

//stopPropagation(fn)

export function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  };
}
  