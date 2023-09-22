import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {RouterProvider} from "react-router-dom";
import { WebRoutes } from "./WebRoutes";
import {Provider} from "react-redux";
import {store} from "./storeRedux/store";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <CookiesProvider>
              <RouterProvider router={WebRoutes}/>
          </CookiesProvider>
      </Provider>
  </React.StrictMode>
);

