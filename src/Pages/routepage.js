import { Routes, Route } from 'react-router-dom';
import { Layout, Home, About, Models, TestimonialsPage, Team, Contact, NotFound} from '../Pages'


const RoutePage = () => {
    return (
        <Routes>
            {/* route PARENT */}
            <Route element={<Layout/>}>
                {/* route ENFANT */}
                <Route index element ={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/models" element={<Models />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound/>} />
            </Route>
        </Routes>
    );
};

export default RoutePage;