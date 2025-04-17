import { BuildingLibraryIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; // Importar Link para navegação interna se necessário

export default function MuseuPage() {
  // !! IMPORTANTE: Substitua pela URL REAL do seu convite do Discord !!
  const discordInviteUrl = 'https://discord.gg/SEU_CONVITE_AQUI'; // <--- COLOQUE O LINK AQUI

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 dark:bg-gray-950 py-20 sm:py-28 text-center overflow-hidden">
        <BuildingLibraryIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 text-gray-700 dark:text-gray-800 opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Museu FBF
          </h1>
          <p className="mt-6 text-xl text-yellow-300 dark:text-yellow-400 max-w-3xl mx-auto">
            Reviva os momentos gloriosos e explore a rica história da Federação Brasileira de Futsal.
          </p>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Link Discord */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Explore Nosso Acervo Completo</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Mergulhe em nosso arquivo detalhado de títulos, premiações, times históricos e lendas do futsal em nosso servidor dedicado no Discord.
          </p>
          <a
            href={discordInviteUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
          >
            Acessar Museu no Discord
            <ArrowTopRightOnSquareIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </a>
        </div>

        {/* Seção Futura Migração */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Em Breve: Títulos e Premiações Aqui!</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Estamos trabalhando para trazer todo o nosso acervo histórico diretamente para o site. Em breve, você poderá consultar todas as conquistas das equipes e jogadores que marcaram época na FBF aqui mesmo.
          </p>
           <div className="animate-pulse flex justify-center space-x-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Aguarde as novidades!
            </p>
        </div>
      </div>
    </div>
  );
}
