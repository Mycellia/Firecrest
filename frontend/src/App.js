import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact/Contact";
import { StripePayment } from "./pages/StripePayment";
import Activate from "./pages/Activate";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordConfirm from "./pages/ResetPasswordConfirm";
import Login from "./pages/Login";
import Book from "./pages/Book";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book" element={<Book />} />
          <Route path="/checkout" element={<StripePayment />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/reset-password" element={<ResetPassword />} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token/"
            element={<ResetPasswordConfirm />}
          />
          <Route exact path="/activate/:uid/:token/" element={<Activate />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;

// function App() {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/book" element={<Book />} />
//           <Route path="/pay" element={<StripePayment />} />
//           <Route path="/contact-us" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/activate/:uid/:token" element={<Activate />} />
//           <Route path="/reset-password" element={<ResetPassword />} />
//           <Route path=" :uid/:token" element={<ResetPasswordConfirm />} />
//         </Routes>
//         <Footer />
//       </BrowserRouter>
//     </Provider>
//   );
// }
// export default App;
