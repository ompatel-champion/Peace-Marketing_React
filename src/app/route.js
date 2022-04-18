import { Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/HomeLayouts'

function AppRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default AppRoute;