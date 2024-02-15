import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ExplorePage from './Pages/ExplorePage'
import Notification from './Pages/Notification'

import Messages from './Pages/Messages';
import BookmarkPage from './Pages/BookmarkPage';
import HomePage from './Pages/HomePage';
import ListPage from './Pages/ListPage';
import PrimiumPage from './Pages/PrimiumPage';
import ProfilePage from './Pages/ProfilePage';
import CommunityPage from './Pages/CommunityPage';

import LoginResistrationPage from './Pages/LoginResistrationPage';
import UserProfile from './Pages/UserProfile';


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/home", element: <App /> },
  { path: "/explore", element: <ExplorePage /> },
  { path: "/messages", element: <Messages /> },
  { path: "/bookmarks", element: <BookmarkPage /> },
  { path: "/login", element: <LoginResistrationPage /> },
  { path: "/notification", element: <Notification /> },
  { path: "/primium", element: <PrimiumPage /> },
  { path: "/list", element: <ListPage /> },
  { path: "/profilepage", element: <ProfilePage /> },
  { path: "/communities", element: <CommunityPage /> },
  { path: "/userprofile/:friendId", element: <UserProfile /> },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
