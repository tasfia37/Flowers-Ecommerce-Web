import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { store } from "./redux/store";
import PrivateRoute from "./component/PrivateRoute";
import LoginPage from "./component/LoginPage";
import Signup from "./component/Signup";
import Admin from "./component/Admin";
import Flowers from "./component/Flowers";
import Welcome from "./component/Welcome";
import Home from "./component/Home";
import UnAuth from "./component/UnAuth";
import NotFound from "./component/NotFound";
import { Login } from "./redux/action-creator";
import ProductDetail from "./component/ProductDetail";
import AddProduct from "./component/AddProduct";
import DeleteProduct from "./component/DeleteProduct";
import UpdateProduct from "./component/UpdateProduct";

//Accessing LocalStorage Info for private Routing
if (!!localStorage.getItem("loginInfo")) {
  const parsedData = JSON.parse(localStorage.getItem("loginInfo"));
  const userName = parsedData.username;
  const Id = parsedData.userID;
  const isAuth = parsedData.isAuth;
  console.log("LocalStorage", userName, Id, isAuth);

  store.dispatch(Login(userName, Id));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/flowers" element={<Flowers />} />
            <Route path="/details" element={<ProductDetail />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/delete" element={<DeleteProduct />} />
          </Route>

          <Route path="/unauth" element={<UnAuth />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
