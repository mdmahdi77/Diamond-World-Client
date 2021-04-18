import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componenets/Home/Home/Home';
import Booking from './componenets/Dashboard/Booking/Booking';
import { createContext, useState } from 'react';
import Dashboard from './componenets/Dashboard/Dashboard/Dashboard';
import BookingList from './componenets/Dashboard/BookingList/BookingList';
import Login from './componenets/Login/Login/Login';
import Review from './componenets/Dashboard/Review/Review';
import AddService from './componenets/Dashboard/AddService/AddService';
import MakeAdmin from './componenets/Dashboard/MakeAdmin/MakeAdmin';
import AllBooking from './componenets/Dashboard/AllBooking/AllBooking';
import PrivateRoute from './componenets/Login/PrivateRoute/PrivateRoute'

export const ServiceDataLoad = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <ServiceDataLoad.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/allBooking">
            <AllBooking></AllBooking>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/booking/:bookId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </ServiceDataLoad.Provider>
  );
}

export default App;
