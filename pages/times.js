import { motion } from 'framer-motion';
import { UsersIcon, TrophyIcon, CalendarDaysIcon, ArrowRightIcon, PlusCircleIcon, ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/router';

// Importar dados dos campeonatos (idealmente de uma fonte única)
// Para simplificar, vamos copiar a definição de campeonatosData aqui
// Em uma aplicação real, importe de um arquivo compartilhado ou API
const campeonatosList = [
  { name: 'FBF Principal', slug: 'fbf-principal'}, 
  { name: 'FBF Aspirantes', slug: 'fbf-aspirantes'}, 
  { name: 'URUN X4', slug: 'urun-x4'}, 
  { name: 'FBF Semanal', slug: 'fbf-semanal'}, 
  { name: 'FBF X1 Rei das Quadradas', slug: 'fbf-x1-rei-quadradas'}, 
  { name: 'FBF Pré Temporada', slug: 'fbf-pre-temporada'}, 
];

// Dados de Exemplo para Times
const timesData = [
  { 
    slug: 'time-alpha', 
    name: 'Time Alpha', 
    logo: <ShieldCheckIcon className="h-10 w-10 text-blue-500" />, 
    titles: 5, 
    players: 7, 
    nextMatch: { opponent: 'Time Beta', date: '20/04' } 
  },
  { 
    slug: 'time-beta', 
    name: 'Time Beta', 
    logo: <ShieldCheckIcon className="h-10 w-10 text-red-500" />, 
    titles: 3, 
    players: 6, 
    nextMatch: { opponent: 'Time Alpha', date: '20/04' } 
  },
   { 
    slug: 'time-gamma', 
    name: 'Time Gamma', 
    logo: <ShieldCheckIcon className="h-10 w-10 text-green-500" />, 
    titles: 2, 
    players: 8, 
    nextMatch: { opponent: 'Time Omega', date: '21/04' } 
  },
   { 
    slug: 'time-omega', 
    name: 'Time Omega', 
    logo: <ShieldCheckIcon className="h-10 w-10 text-purple-500" />, 
    titles: 4, 
    players: 7, 
    nextMatch: { opponent: 'Time Gamma', date: '21/04' } 
  },
  // Adicionar mais times aqui...
];

// Variantes de Animação para os Cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Times() { 
  const router = useRouter();
  const [selectedCampeonatoSlug, setSelectedCampeonatoSlug] = useState(campeonatosList[0]?.slug || ''); // Inicializa com o primeiro slug ou vazio

  const handleInscricaoClick = () => {
    if (selectedCampeonatoSlug) {
      router.push(`/inscricao?campeonato=${selectedCampeonatoSlug}`);
    } else {
      // Opcional: Alerta se nenhum campeonato for selecionado
      alert('Por favor, selecione um campeonato.');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 dark:bg-gray-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nossas Equipes
          </h1>
          <p className="mt-6 text-xl text-yellow-300 dark:text-yellow-400 max-w-3xl mx-auto">
            Conheça os times que fazem a história da FBF acontecer.
          </p>
        </div>
      </div>

      {/* Seção de Inscrição (Chamada para Ação) */}
      <div className="bg-yellow-500 dark:bg-yellow-600 py-12">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-white mb-4">Quer fazer parte?</h2>
              <p className="text-lg text-yellow-100 dark:text-yellow-200 mb-6">Monte sua equipe e venha competir nos maiores campeonatos de futsal virtual!</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="relative w-full sm:w-auto">
                  <select 
                    id="campeonato" 
                    name="campeonato"
                    value={selectedCampeonatoSlug}
                    onChange={(e) => setSelectedCampeonatoSlug(e.target.value)}
                    className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm rounded-md appearance-none shadow-sm bg-white text-gray-900 cursor-pointer"
                  >
                    {campeonatosList.map((camp) => (
                      <option key={camp.slug} value={camp.slug}>
                        {camp.name}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                     <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleInscricaoClick}
                  disabled={!selectedCampeonatoSlug}
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-yellow-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-600 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlusCircleIcon className="-ml-1 mr-3 h-5 w-5" aria-hidden="true" />
                  Inscrever neste Campeonato
                </button>
              </div>
          </div>
      </div>

      {/* Grid de Times e Confrontos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Coluna Principal: Grid de Times */}
              <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Times Ativos</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {timesData.map((time, index) => (
                          <motion.div
                              key={time.slug}
                              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true, amount: 0.3 }}
                              variants={cardVariants}
                              custom={index}
                          >
                              <div className="p-6">
                                  <div className="flex items-center mb-4">
                                      <div className="mr-4 flex-shrink-0">
                                          {time.logo} 
                                      </div>
                                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{time.name}</h3>
                                  </div>
                                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
                                      <div className="flex items-center">
                                          <TrophyIcon className="h-5 w-5 mr-1 text-yellow-500" /> 
                                          <span>{time.titles} Títulos</span>
                                      </div>
                                      <div className="flex items-center">
                                          <UsersIcon className="h-5 w-5 mr-1 text-blue-500" /> 
                                          <span>{time.players} Jogadores</span>
                                      </div>
                                  </div>
                                  {/* Adicionar Link para detalhes do time no futuro: */}
                                  {/* <Link href={`/times/${time.slug}`}>Ver Detalhes</Link> */}
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>

              {/* Coluna Lateral: Confrontos Previstos */}
              <div className="lg:col-span-1">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-24"> {/* Sticky para fixar ao rolar */} 
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Próximos Confrontos</h2>
                      <ul className="space-y-4">
                          {timesData.slice(0, 4).map((time) => time.nextMatch && (
                              <li key={`${time.slug}-match`} className="p-4 rounded-md bg-gray-100 dark:bg-gray-700 flex justify-between items-center">
                                  <div>
                                      <span className="font-medium text-gray-800 dark:text-gray-200 block">{time.name}</span>
                                      <span className="text-sm text-gray-500 dark:text-gray-400">vs {time.nextMatch.opponent}</span>
                                  </div>
                                  <span className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 flex items-center">
                                      <CalendarDaysIcon className="h-4 w-4 mr-1"/>
                                      {time.nextMatch.date}
                                  </span>
                              </li>
                          ))}
                          {timesData.length === 0 && (
                            <p className="text-gray-500 dark:text-gray-400">Nenhum confronto agendado.</p>
                          )}
                      </ul>
                  </div>
              </div>

          </div>
      </div>
    </div>
  );
}
