import React from "react";
import App from "./App";
import { render, screen, act, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

test("renders without crashing", () => {
  render(<MemoryRouter><App /></MemoryRouter>);

  const loadingMessage = screen.getByText(/loading \u2026/i);
  expect(loadingMessage).toBeInTheDocument();
});

test("renders loading message while data is loading", async () => {
  await act(async () => {
    render(<App />);
  });

  const loadingMessage = screen.getByText(/loading \u2026/i);
  expect(loadingMessage).toBeInTheDocument();
});

test("should display 3 snacks and 4 drinks", async () => {
  // Render the App component
  const { findByText } = render(<MemoryRouter><App /></MemoryRouter>);

  // Wait for the loading message to disappear and check if all snack and drink names are displayed
  const snackAndDrinkMessage = await findByText("Welcome to Silicon Valley's premier dive cafe!");
  expect(snackAndDrinkMessage).toBeInTheDocument();
});
