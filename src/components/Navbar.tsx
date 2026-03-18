'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DRIP ARG.
        </Link>

        {/* Desktop links */}
        <div className={styles.navLinks}>
          <div
            className={styles.dropdownContainer}
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={styles.dropdownBtn}>
              Categorías
              <span className={styles.chevron}>▼</span>
            </button>
            <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
              <Link href="/categoria/remeras" className={styles.dropdownItem} onClick={closeMenu}>Remeras</Link>
              <Link href="/categoria/pantalones" className={styles.dropdownItem} onClick={closeMenu}>Pantalones</Link>
              <Link href="/categoria/gorras" className={styles.dropdownItem} onClick={closeMenu}>Gorras</Link>
              <Link href="/categoria/conjuntos" className={styles.dropdownItem} onClick={closeMenu}>Conjuntos</Link>
              <Link href="/categoria/zapatillas" className={styles.dropdownItem} onClick={closeMenu}>Zapatillas</Link>
              <Link href="/categoria/abrigo" className={styles.dropdownItem} onClick={closeMenu}>Abrigo</Link>
              <Link href="/categoria/accesorios" className={styles.dropdownItem} onClick={closeMenu}>Accesorios</Link>
            </div>
          </div>
          <Link href="/como-pedir" className={styles.link}>¿Cómo Pedir?</Link>
        </div>

        {/* Hamburger button */}
        <button
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileCategoryTitle}>CATEGORÍAS</div>
        <Link href="/categoria/remeras" className={styles.mobileLink} onClick={closeMenu}>Remeras</Link>
        <Link href="/categoria/pantalones" className={styles.mobileLink} onClick={closeMenu}>Pantalones</Link>
        <Link href="/categoria/gorras" className={styles.mobileLink} onClick={closeMenu}>Gorras</Link>
        <Link href="/categoria/conjuntos" className={styles.mobileLink} onClick={closeMenu}>Conjuntos</Link>
        <Link href="/categoria/zapatillas" className={styles.mobileLink} onClick={closeMenu}>Zapatillas</Link>
        <Link href="/categoria/abrigo" className={styles.mobileLink} onClick={closeMenu}>Abrigo</Link>
        <Link href="/categoria/accesorios" className={styles.mobileLink} onClick={closeMenu}>Accesorios</Link>
        <div style={{ margin: '1rem 0', borderTop: '1px solid #333' }}></div>
        <Link href="/como-pedir" className={styles.mobileLinkSpecial} onClick={closeMenu}>¿Cómo Pedir?</Link>
      </div>
    </nav>
  );
}
