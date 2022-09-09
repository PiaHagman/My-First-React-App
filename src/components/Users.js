import FetchData from "./FetchData";
import { useState } from "react";

function Users() {
  const [showUsers, setShowUsers] = useState(false);
  const [data, setData] = useState([]);

  const onClickFetchUsers = () => {
    setShowUsers(!showUsers);
    fetchData();
  };

  async function fetchData() {
    const fetchedData = await FetchData("https://api.github.com/users");
    setData(fetchedData);
  }
  return (
    <div className="component-frame">
      <h1 className="component-heading">GitHub Users</h1>
      <p>
        This component fetches data from an open source API and displays a
        number of GitHub Users, when (and if) you press the button. Nothing
        fancy really, just a way to practice this as well.
      </p>

      <button className="my-button" onClick={onClickFetchUsers}>
        <span>{showUsers ? "Hide" : "Show"}</span> GitHub Users!
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
