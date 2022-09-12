import FetchData from "../FetchData";
import { useState } from "react";

function Users() {
  const [showUsers, setShowUsers] = useState(false);
  const [data, setData] = useState();

  const onClickFetchUsers = () => {
    fetchData();
    setShowUsers(!showUsers);
  };

  async function fetchData() {
    const fetchedData = await FetchData("https://api.github.com/users");
    setData(fetchedData[0]);
    console.log(fetchedData[0]);
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
        data?.map((item) => (
          <div className="text-white" key={item.id}>
            <h3>{item.login}</h3>
          </div>
        ))}
    </div>
  );
}
export default Users;
