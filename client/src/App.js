import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
                <main className="main">
                    <Routes>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Routes>
                </main>
            <Footer /> 
        </div>
    );
}

export default App;
