import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/HomeLayouts'

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default AppRoute;