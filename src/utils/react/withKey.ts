//ф-ция withKey принимает название какого-то ключа
//возвращает ф-цию принимающую компонент
//и наделяющая его ключом (в зависимости от переданного значения)

//withIdKey = withKey('value');
//withIdKey(Block)

import React from "react";

export function withKey(key?: string) {
  return <E extends Object, T extends React.ComponentType<E>>(component: T) => 
    (props: E, index: number) =>
      React.createElement(component, {
        ...props,
        key: key ? props[(key as keyof E)] : index
  }, []);
}
