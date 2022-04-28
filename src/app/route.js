import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/HomeLayouts';
import JacobD from '../components/OurTeam/JacobD';
import GustavoL from '../components/OurTeam/GustavoL';
import PascualG from '../components/OurTeam/PascualG';

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/teams/jacobd" element={<JacobD />} />
                <Route path="/teams/gustavol" element={<GustavoL />} />
                <Route path="/teams/pascualg" element={<PascualG />} />
            </Routes>
        </div>
    );
};

export default AppRoute;