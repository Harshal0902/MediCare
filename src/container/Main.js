import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Disease from '../pages/Disease';
import ParkinsonPred from '../pages/ParkinsonPred';
import Doctors from '../pages/Doctors';
import AdamChatroom from '../pages/AdamChatroom/Chatroom';
import AmeliaChatroom from '../pages/AmeliaChatroom/Chatroom';
import AundreyChatroom from '../pages/AundreyChatroom/Chatroom';

export default function Main() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/parkinson" element={<ParkinsonPred />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/doctors/adam" element={<AdamChatroom />} />
                <Route path="/doctors/amelia" element={<AmeliaChatroom />} />
                <Route path="/doctors/aundrey" element={<AundreyChatroom />} />
            </Routes>
        </BrowserRouter>
    )
}
