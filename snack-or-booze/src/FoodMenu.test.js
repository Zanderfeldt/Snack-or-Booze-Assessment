import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FoodMenu from "./FoodMenu";

test("should show 'Nachos', 'Hummus', and 'Arugula and Walnut Salad' on the /snacks route", () => {
  // Render the FoodMenu component with the actual snacks data and /snacks route
  render(
    <MemoryRouter initialEntries={['/snacks']}>
      <Route path="/snacks">
        <FoodMenu snacks={[
          { id: "nachos", name: "Nachos" },
          { id: "hummus", name: "Hummus" },
          { id: "arugula-salad", name: "Arugula and Walnut Salad" },
        ]} />
      </Route>
    </MemoryRouter>
  );

  // Check if each item is present in the rendered component
  const nachosItem = screen.getByText("Nachos");
  const hummusItem = screen.getByText("Hummus");
  const saladItem = screen.getByText("Arugula and Walnut Salad");

  // Expect each item to be present in the component
  expect(nachosItem).toBeInTheDocument();
  expect(hummusItem).toBeInTheDocument();
  expect(saladItem).toBeInTheDocument();
});
