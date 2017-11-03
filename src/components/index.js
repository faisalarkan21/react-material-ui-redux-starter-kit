import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import TextField from '../containers/text-field';

const App = () => (

  <div>

    <h2> User List </h2>
    <UserList />

    <hr />
    <UserDetail />


    <hr />

    <TextField />


  </div>

);


export default App;
