import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home';
import { Contact } from '../pages/Contact';
import { About } from '../pages/About';
import { Experience } from '../pages/Experience';
import { Specializations } from '../pages/Specializations';



export function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contato' element={<Contact />} />
            <Route path='/about' element={ <About />} />
            <Route path='/experience' element={ <Experience />} />
            <Route path='/specializations' element={ <Specializations />} />

        
        </Routes>
    )
}