import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";

// after running npm run build
// dist/assets/index-60c87e15.css   31.32 kB │ gzip:   5.22 kB
// dist/assets/index-3e7b31e9.js   527.18 kB │ gzip: 149.36 kB

// vite/webpack automatically splits the bundles when it encounters lazy() function
const Homepage = lazy(() => import("./pages/Homepage"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Product = lazy(() => import("./pages/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));

// lazy loaded chunks
// dist/assets/Product.module-02d70b80.js    0.06 kB │ gzip:   0.07 kB
// dist/assets/PageNotFound-fb290e1d.js      0.15 kB │ gzip:   0.15 kB
// dist/assets/Logo-77d22a4a.js              0.21 kB │ gzip:   0.19 kB
// dist/assets/PageNav-975812ab.js           0.49 kB │ gzip:   0.27 kB
// dist/assets/Pricing-b8655a41.js           0.65 kB │ gzip:   0.41 kB
// dist/assets/Homepage-5d7021b5.js          0.67 kB │ gzip:   0.41 kB
// dist/assets/Product-120b8ad0.js           0.86 kB │ gzip:   0.49 kB
// dist/assets/Login-4f8b4ddd.js             1.02 kB │ gzip:   0.54 kB
// dist/assets/AppLayout-06cf8b1d.js       156.99 kB │ gzip:  46.13 kB
// dist/assets/index-ff84057f.js           368.58 kB │ gzip: 102.73 kB

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                {/* replace fixes the back button of the browser */}
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
