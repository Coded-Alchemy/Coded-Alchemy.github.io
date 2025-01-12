import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css'
import {Header} from "../components/header.tsx";
import {Footer} from "../components/footer.tsx";

const Home: React.FC = () => <h1>Home Page</h1>;

const About: React.FC = () => <h1>About Page</h1>;

function App() {
    return (
        <div className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <Header/>
                <nav>
                    <Link to="/">Home</Link> | <Link to="/about">About</Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </div>
    )
}

export default App
