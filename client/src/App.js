import { AuthProvider } from "./contexts/autContext";
import { EmployeeProvider } from "./contexts/employeeContext";
import { TaskProvider } from "./contexts/taskContext";

import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Router } from "./components/Router/Router";

function App() {
    return (
        <AuthProvider >
            <div className="App">
                <Header />
                <Navbar />
                <main className="main">
                    <EmployeeProvider>
                        <TaskProvider>
                           <Router />
                        </TaskProvider>
                    </EmployeeProvider>
                </main>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
