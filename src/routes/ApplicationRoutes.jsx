import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from '../pages/Sobre/Sobre';
import Portfolio from '../pages/Portfolio/Portfolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer';

function ApplicationRoutes() {
    return(
        <>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Sobre />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/comentarios" element={<Comentarios />} />
            </Routes>
        </BrowserRouter>
        <Footer footerText="Feito com amor por Mariana" />
        </>
    )
}

export default ApplicationRoutes