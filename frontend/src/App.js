import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Root/Root';
import Home, { loader as itemLoader } from './components/Home/Home';
import Create, { action as createAction } from './pages/Create';
import Profile, {loader as profileLoader} from './pages/Profile';
import Auth from './pages/Auth';
import { tokenLoader } from './store/Auth';
import Edit,{action as editAction, } from './pages/Edit';
import ProfileDetails from './pages/ProfileDetails';
import ProfileRoot ,{loader as editLoader}from './pages/ProfileRoot';

function App() {

  const router = createBrowserRouter([
    {
      path: '',
      element: <Root />,
      id: 'root',
      loader: tokenLoader,
    
      children: [
        { index: true, element: <Home />, loader: itemLoader },
        { path: 'auth', element: <Auth /> },
        { path: 'create', element: <Create />, action: createAction, },
        {
          path: 'profile', element: <ProfileRoot  />,
          id:'profile', 
          loader:editLoader,
          children: [
            { index:true, element: <Profile />, loader:profileLoader }, // Render profile details component
            
            { path: ':profileId', element: <Edit/>, action:editAction, } // Render edit component for the specified profile
          ]
        }
      ]
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
