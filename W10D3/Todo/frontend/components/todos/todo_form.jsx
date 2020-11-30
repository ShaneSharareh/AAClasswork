import React from 'react';
import { uniqueId } from '../../util/id_generator'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                title: "",
                body: ""
                //done: false
        };
        this.updateForm = this.updateForm.bind(this);
    }
    
      //inside props
      //call receive todo 
      //pass in value of the input field when we click submit, which will update the list
      // const element = get the element by its id 
      //element.value 

    updateState(attribute) {
        return e => this.setState({
          [attribute]: e.target.value
        })
    }
    
    updateForm(e) {
      e.preventDefault();
      const todo = Object.assign({},this.state,{id:uniqueId()})
      this.props.receiveTodo(todo);
      this.setState({title:"",body:""})
    }
    
    
    render() {
      return(
        <form onSubmit={this.updateForm}>
            <label>Title:
                <input 
                ref = "title" 
                placeholder="Buy Soda" 
                onChange={this.updateState("title")} 
                type="text" 
                value={this.state.title}
                required/>
            </label>
            
            
            <label>Body
              <textarea 
                ref = "body" 
                placeholder="Buy soda for game night" 
                onChange={this.updateState("body")} 
                value={this.state.body}
                required>
                </textarea>
            </label>
            <button>ADD</button>

        </form>
      )
    }
}

export default TodoForm;