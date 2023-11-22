import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router-dom';
import AddStudent from './Component/Pages/Addstudent';
import ListStudent from './Component/Pages/ListodStudent';
import Main from './Component/Pages/Main'




const App = (props) => {


    return (
        <Fragment>
            <Main></Main>

            <Route path='/'>
                <AddStudent />
            </Route>
            <Route path='/list'>
                <ListStudent />
            </Route>


        </Fragment>
    );
};

export default App;
