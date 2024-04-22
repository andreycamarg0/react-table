import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import PrincipalPage from './pages/PrincipalPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ThirdExercise from './exercises/ThirdExercise';
import NavbarComponent from './components/NavBarComponent';
import FirstExercise from './exercises/FirstExercise';
import SecondExercise from './exercises/SecondExercise';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage />
  },
  {
    path: "/FirstExercise",
    element: <FirstExercise />
  },
  {
    path: "/SecondExercise",
    element: <SecondExercise />
  },
  {
    path: "/teste",
    element: <ThirdExercise />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent></NavbarComponent>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
