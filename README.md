# base principles of redux

1. Everything that changes in your application including the data and ui state is contained in a single object called state.
2. Statetree is read only. You cant modify it, if you want to change the chage, dispatch an action.
3.

# redux_form

> Redux form primarily cinsusts if three things

1. A Redux reducer that listens to dispatched redux form actions to maintain your form state in redux.
2. A React component decorator that wraps your entire form in a higher order component and provides functionality via props
3. A Field component to connect your individual field inputs to the redux Store

> Implementation guide

### Step One

The first thing that we have to do is let Redux know that our redux-form exists. This only happens once, the following code does the job:

```js
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const reducers = {
  //... all our other reducers
  form: formReducer //... here we specify our formReducer is mounted as form
};
const reducer = combineReducers(reducers);
const store = createStore(reducer);
```

### Step Two

Decorate your form component with reduxForm(). This will provide your component with props that provide information about form state and functions to submit your form.
**note**
Each input component must be placed inside the component prop of a Field component. The Field component will pass props such as value, onChange, onBLur etc to React.DOM.input component to populate its value and listen for changes.

```js
import React, { Component } from "react";
import { reduxForm } from "redux-form";

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component={React.DOM.input} type="text" />
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component={React.DOM.input} type="text" />
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component={React.DOM.input} type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

//... decorate the form component
ContactForm = reduxForm({
  form: "contact"
})(ContactForm);
```
