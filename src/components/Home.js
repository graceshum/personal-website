import React from 'react'
import { About } from "./About";
import { Homepage } from "./Homepage";
import { Projects } from './Projects';
export default function Home() {
    return (
        <>
            <Homepage />
            <About />
            <Projects />
        </>
    );
}