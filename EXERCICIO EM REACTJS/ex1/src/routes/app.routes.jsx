import {Route, Routes} from 'react-router-dom';

import {Home} from '../pages/Home';
import { Contact } from '../pages/Contact';

export function AppRouter() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contato' element={<Contact />} />
        
        </Routes>
    )
}