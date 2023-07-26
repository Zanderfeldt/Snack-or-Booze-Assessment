import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import FoodItem from "./FoodItem";
import ItemForm from "./ItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    let isMounted = true; // Flag to track the mounted status

    async function getItems() {
      try {
        let snacks = await SnackOrBoozeApi.getSnacks();
        let drinks = await SnackOrBoozeApi.getDrinks();

        // Check if the component is still mounted before updating state
        if (isMounted) {
          setSnacks(snacks);
          setDrinks(drinks);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        // Handle the error if needed
      }
    }

    getItems();

    // Cleanup function: set the flag to false when the component is unmounted
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  //callback function to update state with new item
  const addNewItem = (newItem, category) => {
    //determine whether new item is snack or drink
    if (category === 'snack') {
      setSnacks([...snacks, newItem]);
    } else if (category === 'drink') {
      setDrinks([...drinks, newItem]);
    }
  };

  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <FoodItem items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu drinks={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <FoodItem items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/new">
              <ItemForm addNewItem={addNewItem}/>
            </Route>
            <Route>
              <p style={{color: 'black'}}>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
