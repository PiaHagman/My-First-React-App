async function FetchData(url) {
  /*   const [data, setData] = useState(null); //We create a state to hold the data that will be returned – the initial state will be null
   */
  const data = await fetch(url)
    .then((res) => res.json())
    /*     .then((data) => data)
     */ .catch((err) => console.log(`Error: ${err}`));

  return [data];
}
export default FetchData;
