import React, {useState} from "react";
import SnackOrBoozeApi from "./Api";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import { useHistory } from "react-router-dom";
import './ItemForm.css'

function ItemForm({addNewItem}) {
  //initial state of form that accepts name, description, recipe, and serve
  const INITIAL_STATE = {
    name: '',
    description: '',
    recipe: '',
    serve: '',
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  //logic for submission
  const handleSubmit = e => {
    e.preventDefault();

    // Get the selected category directly from the form data
    const category = e.target.elements.category.value;

    //handle submission depending on category: snack or drink
    if (category === 'snack') {
      SnackOrBoozeApi.addSnack({...formData, id : formData.name.toLowerCase()});
      addNewItem({...formData, id : formData.name.toLowerCase()}, 'snack');
    } else if (category === 'drink') {
      SnackOrBoozeApi.addDrink({...formData, id : formData.name.toLowerCase()});
      addNewItem({...formData, id : formData.name.toLowerCase()}, 'drink');
    }   
    setFormData(INITIAL_STATE);
    history.push(`/${category}s`);
  };

  //logic for controlled form component
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  //all form fields must be filled to display submit button
  const isFormValid = Object.values(formData).every(Boolean);

  return (
    <Card className="item-form">
    <form onSubmit={handleSubmit}>
    <CardTitle className="font-weight-bold text-center">
      <input 
        id="name"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
      />
    </CardTitle>
    <CardBody>
    <ListGroup>
    <ListGroupItem>
      <select 
        id="category"
        name="category"
        defaultValue="snack"
      >
        <option value="snack">Snack</option>
        <option value="drink">Drink</option>
      </select>
    </ListGroupItem>
    <ListGroupItem>
      <textarea 
        id="description"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
      />
    </ListGroupItem>
    <ListGroupItem>
      <textarea 
        id="recipe"
        name="recipe"
        placeholder="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />
    </ListGroupItem>
    <ListGroupItem>
      <input 
        id="serve"
        name="serve"
        placeholder="How to serve?"
        value={formData.serve}
        onChange={handleChange}
      />
    </ListGroupItem>
    </ListGroup>
      <button className="btn-submit" disabled={!isFormValid}>Add Item!</button>
    </CardBody>
    </form>
    </Card>
  )

}


export default ItemForm;