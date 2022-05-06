import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact/Contact";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Login from "./pages/Login";
import Book from "./pages/Book";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import store from "./store";

function App(){
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path=" :uid/:token" element={<ResetPasswordConfirm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>

    
  );
}
export default App;
