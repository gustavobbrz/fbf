import Link from 'next/link';
import { NewspaperIcon, PlusCircleIcon, UserCircleIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Dados de Exemplo para Notícias (em uma aplicação real, viria de uma API)
const noticiasExemplo = [
  {
    id: 1,
    title: 'Finais Eletrizantes Marcam o Fim da Temporada FBF Principal',
    excerpt: 'Após jogos disputados, a equipe "Trovões Azuis" sagrou-se campeã da FBF Principal em uma final emocionante contra "Fúria Vermelha".',
    imageUrl: '/images/noticia-final.jpg', // Substitua por URLs de imagens reais ou placeholders
    author: 'Redação FBF',
    date: '2024-07-15',
    slug: 'finais-eletrizantes-fbf-principal' // Para a URL da notícia individual
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
  {
    id: 4,
    title: 'Entrevista Exclusiva com o Artilheiro da FBF Aspirantes',
    excerpt: 'Conversamos com "Matador Silva", o destaque da FBF Aspirantes, sobre sua jornada, desafios e expectativas para o futuro.',
    imageUrl: '/images/noticia-artilheiro.jpg',
    author: 'Repórter Esportivo',
    date: '2024-07-01',
    slug: 'entrevista-artilheiro-aspirantes'
  },
  // Adicione mais notícias de exemplo se desejar
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function NoticiasPage() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 dark:bg-gray-950 py-20 sm:py-28 text-center overflow-hidden">
        <NewspaperIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 text-gray-700 dark:text-gray-800 opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Central de Notícias FBF
          </h1>
          <p className="mt-6 text-xl text-yellow-300 dark:text-yellow-400 max-w-3xl mx-auto">
            Fique por dentro de tudo que acontece no universo do futsal da FBF.
          </p>
           {/* Botão para Criar Nova Notícia (link para futura página) */}
           <div className="mt-10">
            <Link href="/noticias/nova" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:focus:ring-offset-gray-950">
                <PlusCircleIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                Criar Nova Notícia
             </Link>
           </div>
        </div>
      </div>

      {/* Grid de Notícias */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasExemplo.map((noticia, index) => (
             <Link key={noticia.id} href={`/noticias/${noticia.slug}`} legacyBehavior>
                <motion.a 
                    className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer group"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    // Adiciona um delay escalonado para a animação
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                {/* Imagem da Notícia */}
                <div className="flex-shrink-0 h-48 w-full overflow-hidden">
                    {/* Idealmente usar next/image, mas para simplicidade com placeholders: */}
                    <img 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        src={noticia.imageUrl || '/images/placeholder-news.jpg'} // Fallback para placeholder
                        alt={`Imagem para ${noticia.title}`}
                        onError={(e) => { e.target.onerror = null; e.target.src='/images/placeholder-news.jpg'; }} // Fallback se imagem não carregar
                    />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                    <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-200">
                        {noticia.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
                        {noticia.excerpt}
                    </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                        <div className="flex items-center space-x-1">
                            <UserCircleIcon className="h-4 w-4"/>
                            <span>{noticia.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                             <CalendarDaysIcon className="h-4 w-4"/>
                             <time dateTime={noticia.date}>{new Date(noticia.date + 'T00:00:00').toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric'})}</time>
                        </div>
                    </div>
                </div>
                </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
