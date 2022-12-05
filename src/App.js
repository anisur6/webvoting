import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Nopage from './Components/Nopage/Nopage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './contex/AuthProvider';
import Contendor from './Components/Contendor/Contendor';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddService from './Components/AddService/AddService';
import VoteConfirm from './Components/VoteConfirm/VoteConfirm';
import Allvotes from './Components/Allvotes/Allvotes';
import Register from './Components/Register/Register';



function App() {
  return (
    <div className="App">

      <AuthProvider>

 

      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>


          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/contendor">
                <Contendor></Contendor>
          </PrivateRoute>

          <Route path="/login">
          <Login></Login>
            </Route>
            
            <PrivateRoute path="/addservice">
          <AddService></AddService>
            </PrivateRoute>

            <PrivateRoute path="/allvotes">
          <Allvotes></Allvotes>
            </PrivateRoute>
            

            <PrivateRoute path="/booking/:userId">
              <VoteConfirm></VoteConfirm>
            </PrivateRoute>



          <Route path="/register">
            <Register></Register>
            </Route>
            

          <Route>
            <Nopage></Nopage>
          </Route>

        </Switch>

        <Footer></Footer>
      </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
