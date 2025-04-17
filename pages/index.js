import Paper from '@mui/material/Paper';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Link from 'next/link';
import { NewspaperIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

// Dados de Exemplo para Notícias (Copiar da página /noticias por enquanto)
// Idealmente, importe de um arquivo compartilhado ou API
const noticiasExemplo = [
  {
    id: 1,
    title: 'Finais Eletrizantes Marcam o Fim da Temporada FBF Principal',
    excerpt: 'Após jogos disputados, a equipe "Trovões Azuis" sagrou-se campeã da FBF Principal em uma final emocionante contra "Fúria Vermelha".',
    imageUrl: '/images/noticia-final.jpg', // Substitua por URLs de imagens reais ou placeholders
    author: 'Redação FBF',
    date: '2024-07-15',
    slug: 'finais-eletrizantes-fbf-principal' 
  },
  {
    id: 2,
    title: 'Novas Regras Anunciadas para a Próxima Temporada',
    excerpt: 'A diretoria da FBF anunciou mudanças importantes no regulamento para a temporada 2025, visando maior equilíbrio e competitividade.',
    imageUrl: '/images/noticia-regras.jpg',
    author: 'Comissão Técnica',
    date: '2024-07-10',
    slug: 'novas-regras-temporada-2025'
  },
  {
    id: 3,
    title: 'Inscrições Abertas para o Torneio de Pré-Temporada!',
    excerpt: 'Prepare sua equipe! As inscrições para o tradicional torneio de Pré-Temporada da FBF já estão abertas. Vagas limitadas!',
    imageUrl: '/images/noticia-inscricoes.jpg',
    author: 'Departamento de Competições',
    date: '2024-07-05',
    slug: 'inscricoes-pre-temporada'
  },
  // Apenas as 3 mais recentes serão exibidas na home
  {
    id: 4,
    title: 'Entrevista Exclusiva com o Artilheiro da FBF Aspirantes',
    excerpt: 'Conversamos com "Matador Silva", o destaque da FBF Aspirantes, sobre sua jornada, desafios e expectativas para o futuro.',
    imageUrl: '/images/noticia-artilheiro.jpg',
    author: 'Repórter Esportivo',
    date: '2024-07-01',
    slug: 'entrevista-artilheiro-aspirantes'
  },
];

// Pegar as 3 notícias mais recentes (assumindo que o array está ordenado pela data)
const ultimasNoticias = noticiasExemplo.slice(0, 3);

const navLinks = [
  { href: '/classificacao', label: 'Classificação' },
  { href: '/ranking', label: 'Ranking' },
  { href: '/sobre', label: 'Sobre Nós' },
  { href: '/jornal', label: 'Jornal FBF' },
  { href: '/noticias', label: 'Notícias' },
  { href: '/inscricoes', label: 'Inscrições' },
  { href: '/campeonatos', label: 'Campeonatos' },
  { href: '/times', label: 'Times' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/multimidia', label: 'Central Multimídia' },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Banner */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-4 text-center relative z-10">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-yellow-400">Futsal x3 de alto nível, é aqui!</span>
            Participe dos maiores campeonatos do Brasil
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl">
            Competições profissionais, ranking nacional e toda a emoção do futsal online
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link href="/inscricoes" className="rounded-md bg-yellow-600 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
              Inscreva seu time agora
            </Link>
            <Link href="/campeonatos" className="rounded-md bg-white/10 px-8 py-3 text-lg font-medium text-white shadow-lg transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
              Veja os campeonatos
            </Link>
          </div>
        </div>
      </div>
      {/* Seção Central - Título, Descrição e Links de Navegação */}
      <div className="flex flex-col items-center justify-center min-h-[30vh] py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white animate-fadeIn">
        {/* Bloco de Texto Centralizado */}
        <div className="flex flex-col items-center gap-3 mb-10 text-center px-4"> 
          <span className="rounded-full bg-yellow-600 p-3 shadow-lg">
            <SportsSoccerIcon fontSize="large" sx={{ color: 'white' }} />
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg text-center">FBF - Federação Brasileira de Futsal <span className="text-yellow-500">(Haxball)</span></h1>
          <p className="text-lg md:text-2xl max-w-2xl text-center mt-2 mb-1">Site oficial da FBF: classificação, ranking, notícias, campeonatos, inscrições e muito mais.</p>
          <p className="text-base md:text-lg text-center opacity-90">Seja bem-vindo à casa do futsal brasileiro!</p>
        </div>
        {/* Grid de Links de Navegação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full max-w-6xl px-4"> 
          {navLinks.map((link, index) => (
            <Link href={link.href} key={link.href} legacyBehavior>
              <a>
                <Paper 
                  elevation={4} 
                  className="flex items-center justify-center h-20 rounded-xl bg-yellow-600/90 dark:bg-yellow-700/80 text-white font-semibold text-base sm:text-lg shadow-md hover:scale-105 hover:bg-yellow-500 dark:hover:bg-yellow-600 transition-all duration-200 text-center p-2"
                  sx={{ animation: `fadeIn 0.3s ease-in-out ${index * 0.1}s` }}
                >
                  {link.label}
                </Paper>
              </a>
            </Link>
          ))}
        </div>
      </div>
      {/* Seção Últimas Notícias */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Últimas Notícias
            </h2>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
              Fique atualizado com as novidades mais recentes da FBF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ultimasNoticias.map((noticia) => (
              <Link key={noticia.id} href={`/noticias/${noticia.slug}`} legacyBehavior>
                <a className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 group">
                  <div className="flex-shrink-0 h-48 w-full overflow-hidden">
                    <img 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      src={noticia.imageUrl || '/images/placeholder-news.jpg'}
                      alt={`Imagem para ${noticia.title}`}
                      onError={(e) => { e.target.onerror = null; e.target.src='/images/placeholder-news.jpg'; }}
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="mt-2 text-lg leading-6 font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200 line-clamp-2">
                        {noticia.title}
                      </h3>
                    </div>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-1.5"/>
                        <time dateTime={noticia.date}>{new Date(noticia.date + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric'})}</time>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/noticias"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-offset-gray-800"
            >
               Ver todas as notícias
               <NewspaperIcon className="ml-3 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
