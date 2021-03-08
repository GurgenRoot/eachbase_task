import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter,Switch, Route} from "react-router-dom";

import Header from "./Header";
import {Home} from "./Pages/Home.js";

import {getTasksThunk} from "./store/createTaskReducer";

import './App.scss';

export const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
        dispatch(getTasksThunk());
    },[])

  const tasks = useSelector(state => state.CreateTaskReducer.tasks)

  return (
      <BrowserRouter>
          <div className="App">
            <div className='layout'>
              <Switch>
                <Route exact path='/' render={() => <Header tasks={tasks}/>}/>
              </Switch>
              <Home/>
            </div>
          </div>
      </BrowserRouter>
  );
}