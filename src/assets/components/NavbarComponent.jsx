import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { House, BusFront, Sun } from 'react-bootstrap-icons';
import styles from './NavbarComponent.module.css';

export default function NavbarComponent({
}) {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className={styles.navbarItems}> <House></House> Home</Link>
                <Link to="weather" className={styles.navbarItems}> <Sun></Sun> Weather</Link>
            </nav>
            <Outlet></Outlet>
        </>
    );
}