import React from 'react'
import { About } from "./About";
import { Homepage } from "./Homepage";
import { Projects } from './Projects';
import { Footer } from './Footer';

export default function Home() {
    return (
        <>
            <Homepage />
            <About />
            <Projects />
            <Footer />
        </>
    );
}