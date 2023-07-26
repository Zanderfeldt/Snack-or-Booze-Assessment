import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

it("renders without crashing", () => {
  render(<MemoryRouter><NavBar /></MemoryRouter>)
})