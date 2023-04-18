import { Routes, Route } from "react-router-dom";

import { AuthProviderComponent } from "./contexts/AuthContext";
import { CarProvider } from "./contexts/CarContext";

import { CreateCar } from "./components/CreateCar/CreateCar";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Catalog } from "./components/Catalog/Catalog";
import { Register } from "./components/Register/Register";
import { CarDetails } from "./components/CarDetails/CarDetails";
import { Logout } from "./components/Logout/Logout";
import { EditCar } from "./components/EditCar/EditCar";
import { RouteGuard } from "./common/RouteCuard";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProviderComponent>
      <CarProvider>
        <div className="allContent">
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />

              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:carId" element={<CarDetails />} />

              <Route element={<RouteGuard />}>
                <Route path="/create" element={<CreateCar />} />
              </Route>

              <Route element={<RouteGuard />}>
                <Route path="/catalog/:carId/edit" element={<EditCar />} />
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </CarProvider>
    </AuthProviderComponent>
  );
}

export default App;
