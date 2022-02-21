import React from "react";
import Person from "./Person";
function NameList() {
  // const names = ['VK','ABD','FAF']
  const persons = [
    {
      id: 1,
      name: "VK",
      age: 27,
    },
    {
      id: 2,
      name: "ABD",
      age: 37,
    },
    {
      id: 3,
      name: "FAF",
      age: 35,
    },
  ];
  // const NameList= names.map(name => <h2>{name}</h2>)
  const personList = persons.map(person => <Person key={person.id} person={person}/>);
  return <div>{personList}</div>;
}

export default NameList;
