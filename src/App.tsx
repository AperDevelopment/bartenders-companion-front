import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Cocktails from './pages/Cocktails';
// import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        {/* <Route path='/' element={<Home />} index /> */}
                        <Route path="/cocktails" element={<Cocktails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
