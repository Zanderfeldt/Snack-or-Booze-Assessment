import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ItemForm from "./ItemForm";
import { MemoryRouter } from "react-router-dom";

test("should add new snack", () => {
  const mockAddNewItem = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <ItemForm addNewItem={mockAddNewItem} />
    </MemoryRouter>
  );

  const nameInput = screen.getByPlaceholderText('name');
  const descriptionInput = screen.getByPlaceholderText('description');
  const recipeInput = screen.getByPlaceholderText('recipe');
  const serveInput = screen.getByPlaceholderText('How to serve?');
  const categorySelect = screen.getByDisplayValue('Snack');
  const submitButton = screen.getByText('Add Item!');

  expect(nameInput).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(recipeInput).toBeInTheDocument();
  expect(serveInput).toBeInTheDocument();
  expect(categorySelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
 
});

// Mock the useHistory hook
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

test("submits the form with correct data", () => {
  const addNewItemMock = jest.fn();

  render(<ItemForm addNewItem={addNewItemMock} />, {
    wrapper: MemoryRouter,
  });

  const nameInput = screen.getByPlaceholderText('name');
  const descriptionInput = screen.getByPlaceholderText('description');
  const recipeInput = screen.getByPlaceholderText('recipe');
  const serveInput = screen.getByPlaceholderText('How to serve?');
  const categorySelect = screen.getByDisplayValue('Snack');
  const submitButton = screen.getByText('Add Item!');

  fireEvent.change(nameInput, { target: { value: 'Test Snack' } });
  fireEvent.change(descriptionInput, { target: { value: 'This is a test snack.' } });
  fireEvent.change(recipeInput, { target: { value: 'Test recipe.' } });
  fireEvent.change(serveInput, { target: { value: 'Serve test snack chilled.' } });
  fireEvent.change(categorySelect, { target: { value: 'snack' } });

  fireEvent.click(submitButton);

  expect(addNewItemMock).toHaveBeenCalledWith(
    {
      name: 'Test Snack',
      description: 'This is a test snack.',
      recipe: 'Test recipe.',
      serve: 'Serve test snack chilled.',
      id: 'test snack', 
    },
    'snack'
  );
});