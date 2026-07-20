import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Hero from "./Hero";
import ImagesContainer from "./ImagesContainer";
import ImageDetail from "./ImageDetail";

function App() {
  return (
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
  );
}

export default App;
