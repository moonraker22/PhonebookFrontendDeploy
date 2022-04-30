import useAxios from "../../util/useAxios";

const People = ({
  persons,
  filter,
  setPersons,
  setMessage,
  setMessageType,
}) => {
  const deletePerson = (person) => {
    const result = window.confirm(
      "Are you sure you want to delete this person?"
    );
    if (result) {
      const id = person.id;
      const deleted = useAxios.remove(id);
      deleted
        .then((response) => {
          setPersons(persons.filter((p) => p.id !== id));
          setMessage(`${person.name} was deleted`);
          setMessageType("success");
        })
        .catch((error) => {
          setMessage(`${person.name} was not deleted`);
          setMessageType("error");
          console.log(error);
        });
    }
  };
  return (
    <div>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(filter))
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}{" "}
              <button onClick={() => deletePerson(person)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default People;
