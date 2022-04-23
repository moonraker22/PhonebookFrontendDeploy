import { useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import PersonForm from "./components/personForm/PersonForm";
import People from "./components/people/People";
import useAxios from "./util/useAxios";
import Notification from "./components/notification/Notification";
import "./App.css";

const App = () => {
  const url = "http://localhost:3001/persons";

  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const onFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const resp = useAxios.get(url);
    resp
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <div>
      <h1 className={"header"}>Phonebook</h1>
      <Notification
        type={messageType}
        message={message}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      <Filter
        filter={filter}
        setFilter={setFilter}
        onFilterChange={onFilterChange}
      />
      <br />
      <h2>Add a new number:</h2>
      <PersonForm
        setPersons={setPersons}
        persons={persons}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
      <h2>Numbers:</h2>
      <People
        persons={persons}
        setPersons={setPersons}
        filter={filter}
        message={message}
        setMessage={setMessage}
        setMessageType={setMessageType}
      />
    </div>
  );
};

export default App;
