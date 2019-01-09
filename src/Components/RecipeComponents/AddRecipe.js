import React, { Component } from 'react'
import { Button, FormGroup } from 'react-bootstrap';
import { Form, Text } from 'informed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class AddRecipe extends Component {

    validateName = (fieldValue) => {
        if(fieldValue.length <=3 && fieldValue.contains) {

        } else {

        }
    }




    render() {
    return (
      <div className='col-xs-6' style={{'border': 1 + 'px solid #ddd', 'borderRadius': 4 + 'px', 'padding': 5 + 'px'}}>
        <h2>Add recipes here</h2>
        <Form id="newRecipe">
            <FormGroup>
                <label htmlFor="recipeName" >Recipe Name :</label>
                <Text field='name' id='RecipeName'/>
                <h3>
                    Ingredients:
                    <Button ><FontAwesomeIcon icon="user-plus" /></Button>
                </h3>
            </FormGroup>
            <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}
