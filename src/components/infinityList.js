import React, { useState, useEffect } from "react";
import "../App.css";

const InfinityList = () => {
  const [listItems, setListItems] = useState(
    //Instantiating a new variable called listItems, and a new setter function called setListItems with the help of our new useState hook.
    Array.from(Array(30).keys(), (n) => n + 1) //Setting the initial value of listItems to an Array filled with 30 values from 1 to 30.
  );
  const [isFetching, setIsFetching] = useState(false); //set the initial value to false because when our web app loads for the first time, the window is scrolled to the top of the page.

  useEffect(() => {
    //the useEffect hook. This gives us functionality similar to the componentDidMount and componentWillUpdate lifecycle methods in React class components.
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //an empty array [] tells the useEffect function to act like componentDidMount and only run one time, when the component first mounts.

  useEffect(() => {
    //This effect will call every time isFetching changes state. That includes when it’s false. We don’t want that, so we add a conditional at the top which returns whenever isFetching is false.
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  function fetchMoreListItems() {
    setTimeout(() => {
      setListItems((prevState) => [
        ...prevState,
        ...Array.from(Array(20).keys(), (n) => n.prevState.length + 1),
      ]);
      setIsFetching(false);
    }, 2000); //For demo purposes, I’ve wrapped the setter inside a timeout to simulate two seconds of loading
  }

  function handleScroll() {
    //check if the Window object’s inner height, plus the Document object’s scrollTop, is equal to the Document’s offsetHeight.
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return (
    <>
      <ul className="">
        {listItems.map((listItem) => (
          <li className="list-group-item">Nummer {listItem}</li>
        ))}
      </ul>
      {isFetching && "Fetching more list items..."}
    </>
  );
};
export default InfinityList;
