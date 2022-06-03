import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="border-b-2 border-gray-200 sm:px-4 py-2.5 mb-4">
            <menu>
                <Link href='/'>
                    <a className="pr-4 pl-4">Home</a>
                </Link>
                <Link href='/about'>
                    <a className="pr-4">About</a>
                </Link>
            </menu>
        </nav>
    );
}

export default Navbar;