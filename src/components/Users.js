import useFetchData from "./useFetchData";
import { useState } from "react";

function Users() {
  //const apiKey = "aa64c80b";
  const { data } = useFetchData("https://api.github.com/users");
  const [showUsers, setShowUsers] = useState(false);

  const onClickFetchUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="component-frame">
      <h1>GitHub Users:</h1>
      <button onClick={onClickFetchUsers}>
        <span>{showUsers ? "Dölj" : "Hämta"}</span> GitHub Users!
      </button>

      {showUsers &&
        data && //Using the && operator, the DOM will only get updated when the data variable has been updated with data from the API request – that is, when data != null
        data.map((user) => (
          <div className="text-white" key={user.id}>
            <h3>{user.login}</h3>
          </div>
        ))}
    </div>
  );
}
export default Users;
