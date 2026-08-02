import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "./Hero";
import ImagesContainer from "./ImagesContainer";
import ImageDetail from "./ImageDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <ImagesContainer />
              </>
            }
          />

          <Route
            path="/img/:id"
            element={
              <>
                <Header />
                <ImageDetail />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
