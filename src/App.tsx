import React, { useEffect, useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
//import { PostsContextProvider } from "./shared/context/postsContext";
import { applyMiddleware, createStore } from "redux";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "./store/reducer";
import { saveToken, setToken } from './store/actions';

import thunk from 'redux-thunk'
import { BrowserRouter, MemoryRouter, Redirect, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { PageNotFound } from "./shared/PageNotFound";


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

function AppComponent() {
  //так как browserRouter не работает на сервере, отключим серверный рендеринг
  const [mounted, setMounted] = useState(false);

  const redirect = useSelector<RootState, boolean>(state => state.redirect);

  useEffect(() => {
    setMounted(true)
  }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(saveToken())
  }, [])

  return (
    <>
      {mounted && (
        <BrowserRouter>
          {redirect ? <Redirect to={{ pathname: '/posts' }} /> : null}
          <Layout>
            <Header />
            <Content>
              <Switch>
                <Route exact path="/" >
                  <CardsList />
                </Route>
                <Route path="/posts" >
                  <CardsList />
                </Route>
                <Route path="*">
                  <PageNotFound />
                </Route>
              </Switch>
            </Content>
          </Layout>
          <Route path="/posts/:id" >
            <Post />
          </Route>
        </BrowserRouter>
      )}
    </>
  );
}
export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
))
