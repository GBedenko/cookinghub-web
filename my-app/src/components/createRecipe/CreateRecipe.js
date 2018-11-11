import React, { Component } from 'react';

import './CreateRecipe.css'

class CreateRecipe extends Component {
  
    constructor(props){
        super(props);

        this.state = {
        };        
    }

    render() {

        return (

            <div className="CreateRecipe">
                <form id="createRecipeForm">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Name:</label>
                        <br/>
                        <input type="text" class="form-control" placeholder="What is the name of your Recipe?"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Category:</label>
                        <br/>
                        <select class="form-control">
                        <option>Starter</option>
                        <option>Main</option>
                        <option>Dessert</option>
                        <option>Breakfast</option>
                        <option>Drink</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description:</label>
                        <br/>
                        <textarea class="form-control" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Main Image:</label>
                        <br/>
                        <input type="file" class="form-control-file"/>
                    </div>
                    <div class="form-group">
                        <input type="hidden" name="count" value="1" />
                        <label class="control-label" for="field1">Ingredients:</label>
                        <br/>
                        <div class="form-group" id="fields">
                            <div class="controls" id="profs"> 
                                <form class="input-append">
                                    <div id="field"><input autocomplete="off" class="input" id="field1" name="prof1" type="text" placeholder="Add Ingredient..." data-items="8"/><button id="b1" class="btn add-more" type="button">+</button></div>
                                </form>
                                <br/>
                                <small>Press + to add another form field :)</small>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Preperation Steps:</label>
                        <p>1.</p><textarea class="form-control" rows="3"></textarea>
                        <br/>
                        <label for="exampleFormControlFile1">Step Image:</label>
                        <br/>
                        <input type="file" class="form-control-file"/>
                        <br/>
                        <small>Press + to add another form field :)</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Video File:</label>
                        <br/>
                        <input type="file" class="form-control-file"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlFile1">Audio File:</label>
                        <br/>
                        <input type="file" class="form-control-file"/>
                        <br/>
                    </div>
                </form>
                <button type="submit" form="createRecipeForm" value="publish_recipe">Publish Recipe</button>
                <button type="submit" form="createRecipeForm" value="save_recipe">Save Recipe for Later (Won't be published)</button>
            </div>
        );
    }
}
export default CreateRecipe;