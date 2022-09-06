import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null); //We create a state to hold the data that will be returned – the initial state will be null

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, [url]); //We create an effect that runs on first render and every time the url parameter changes
  return { data };
}
export default useFetchData;
