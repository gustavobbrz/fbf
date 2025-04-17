import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'; // v2
import { useRouter } from 'next/router';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/campeonatos', label: 'Campeonatos' },
    { href: '/times', label: 'Times' },
    { href: '/museu', label: 'Museu' },
    { href: '/noticias', label: 'Notícias' },
    { href: '/sobre', label: 'Sobre' }
  ];

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Busca o perfil se estiver logado
    const token = typeof window !== 'undefined' && localStorage.getItem('token');
    if (token) {
      fetch(process.env.NEXT_PUBLIC_API_URL + '/perfil', {
        headers: { 'Authorization': 'Bearer ' + token }
      })
      .then(res => res.json())
      .then(data => {
        if (!data.error) setUser(data);
        else setUser(null);
      });
    } else {
      setUser(null);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  }

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors">
              FBF
            </Link>
          </div>

          {/* Desktop Nav */}
<nav className="hidden md:flex space-x-1 items-center">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="text-white hover:text-yellow-400 relative px-3 py-2 text-sm font-medium transition-colors group"
    >
      {link.label}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
    </Link>
  ))}
  {/* Login/Perfil Section */}
  {user ? (
    <div className="flex items-center space-x-2 ml-4">
      <UserCircleIcon className="h-7 w-7 text-yellow-400" />
      <span className="text-white text-sm font-medium">{user.nome}</span>
      <Link href="/perfil" className="text-yellow-400 hover:text-yellow-300 text-sm font-medium px-2">Perfil</Link>
      <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded text-xs">Sair</button>
    </div>
  ) : (
    <Link href="/login" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-1 rounded text-sm font-semibold ml-4">Entrar</Link>
  )}
</nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none p-2 rounded-md focus:ring-2 focus:ring-inset focus:ring-yellow-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
<<<<<<< HEAD
                onClick={closeMobileMenu}
=======
                onClick={closeMobileMenu} // Fecha o menu ao clicar
>>>>>>> 7bbcdac1ab70fb1d7470c21f3c89cbdef1e1f37c
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
<<<<<<< HEAD
            {/* Login/Perfil Section Mobile */}
            {user ? (
              <div className="mt-2 flex flex-col space-y-1">
                <span className="text-yellow-400 flex items-center"><UserCircleIcon className="h-6 w-6 mr-1" /> {user.nome}</span>
                <Link href="/perfil" onClick={closeMobileMenu} className="text-yellow-400 hover:text-yellow-300 px-3 py-2 rounded-md text-base font-medium">Perfil</Link>
                <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-base">Sair</button>
              </div>
            ) : (
              <Link href="/login" onClick={closeMobileMenu} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-3 py-2 rounded text-base font-semibold block mt-2">Entrar</Link>
            )}
=======
>>>>>>> 7bbcdac1ab70fb1d7470c21f3c89cbdef1e1f37c
          </div>
        </div>
      )}
    </header>
  );
}
