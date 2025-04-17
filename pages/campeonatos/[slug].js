import { useRouter } from 'next/router';
import { TrophyIcon, StarIcon, ShieldCheckIcon, CalendarDaysIcon, UserIcon, RocketLaunchIcon, ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Simulação da fonte de dados - Idealmente viria de uma API ou DB
const campeonatosData = [
  { name: 'FBF Principal', slug: 'fbf-principal', icon: <TrophyIcon className="h-8 w-8" />, description: 'A liga principal da FBF, reunindo os melhores times.', teams: ['Time Alpha', 'Time Beta', 'Time Gamma', 'Time Omega'], table: [{pos: 1, team: 'Time Alpha', pts: 9}, {pos: 2, team: 'Time Omega', pts: 7}, {pos: 3, team: 'Time Beta', pts: 6}], matches: [{home: 'Alpha', score: '3-1', away: 'Beta', status: 'Finalizado'}, {home: 'Gamma', score: '2-2', away: 'Omega', status: 'Finalizado'}, {home: 'Beta', score: 'vs', away: 'Gamma', status: 'Próximo'}, {home: 'Omega', score: 'vs', away: 'Alpha', status: 'Próximo'}] },
  { name: 'FBF Aspirantes', slug: 'fbf-aspirantes', icon: <StarIcon className="h-8 w-8" />, description: 'Oportunidade para novos talentos brilharem e buscarem acesso à elite.', teams: ['Time Delta', 'Time Epsilon', 'Time Zeta', 'Time Eta'], table: [{pos: 1, team: 'Time Delta', pts: 10}, {pos: 2, team: 'Time Eta', pts: 8}, {pos: 3, team: 'Time Epsilon', pts: 5}], matches: [{home: 'Delta', score: '4-0', away: 'Zeta', status: 'Finalizado'}, {home: 'Epsilon', score: '1-1', away: 'Eta', status: 'Finalizado'}, {home: 'Zeta', score: 'vs', away: 'Epsilon', status: 'Próximo'}] },
  { name: 'URUN X4', slug: 'urun-x4', icon: <ShieldCheckIcon className="h-8 w-8" />, description: 'Campeonato internacional especial na emocionante modalidade X4.', teams: ['Team Uruguay', 'Team Brazil', 'Team Argentina', 'Team Chile'], table: [{pos: 1, team: 'Team Brazil', pts: 6}, {pos: 2, team: 'Team Uruguay', pts: 4}], matches: [{home: 'Brazil', score: '5-3', away: 'Argentina', status: 'Finalizado'}, {home: 'Uruguay', score: 'vs', away: 'Chile', status: 'Próximo'}] },
  { name: 'FBF Semanal', slug: 'fbf-semanal', icon: <CalendarDaysIcon className="h-8 w-8" />, description: 'Competições rápidas toda semana valendo premiações.', teams: ['Equipe Rapida', 'Equipe Veloz', 'Equipe Flash'], table: [{pos: 1, team: 'Equipe Flash', pts: 3}], matches: [{home: 'Rapida', score: '2-3', away: 'Flash', status: 'Finalizado'}, {home: 'Veloz', score: 'vs', away: 'Rapida', status: 'Próximo'}] },
  { name: 'FBF X1 Rei das Quadradas', slug: 'fbf-x1-rei-quadradas', icon: <UserIcon className="h-8 w-8" />, description: 'Disputas individuais eletrizantes para coroar o Rei da Quadrada.', teams: ['Jogador Mestre', 'Jogador Pro', 'Jogador Ágil', 'Jogador Tático'], table: [{pos: 1, team: 'Jogador Mestre', pts: 12}, {pos: 2, team: 'Jogador Tático', pts: 9}], matches: [{home: 'Mestre', score: '1-0', away: 'Pro', status: 'Finalizado'}, {home: 'Ágil', score: 'vs', away: 'Tático', status: 'Próximo'}] },
  { name: 'FBF Pré Temporada', slug: 'fbf-pre-temporada', icon: <RocketLaunchIcon className="h-8 w-8" />, description: 'Aquecimento e testes das equipes para a temporada principal.', teams: ['Time Teste A', 'Time Teste B', 'Time Teste C'], table: [{pos: 1, team: 'Time Teste B', pts: 4}], matches: [{home: 'Teste A', score: '1-1', away: 'Teste B', status: 'Finalizado'}, {home: 'Teste C', score: 'vs', away: 'Teste A', status: 'Próximo'}] },
];

// Mapeamento de ícones para evitar problemas de serialização
const iconMap = {
  'fbf-principal': <TrophyIcon className="h-16 w-16" />,
  'fbf-aspirantes': <StarIcon className="h-16 w-16" />,
  'urun-x4': <ShieldCheckIcon className="h-16 w-16" />,
  'fbf-semanal': <CalendarDaysIcon className="h-16 w-16" />,
  'fbf-x1-rei-quadradas': <UserIcon className="h-16 w-16" />,
  'fbf-pre-temporada': <RocketLaunchIcon className="h-16 w-16" />,
};

export async function getStaticPaths() {
  const paths = campeonatosData.map((camp) => ({
    params: { slug: camp.slug },
  }));

  return { paths, fallback: false }; // fallback: false significa que slugs não listados darão 404
}

export async function getStaticProps({ params }) {
  const campeonato = campeonatosData.find((camp) => camp.slug === params.slug);

  if (!campeonato) {
    return { notFound: true };
  }

  // Passa apenas dados serializáveis como props
  const { icon, ...serializableData } = campeonato;
  return { 
    props: { 
        campeonato: serializableData 
    }, 
    revalidate: 60 // Opcional: revalida a página a cada 60 segundos
  };
}


export default function CampeonatoPage({ campeonato }) {
  const router = useRouter();

  // Se a página ainda não foi gerada estaticamente (raro com fallback: false)
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  // Se getStaticProps retornou notFound
  if (!campeonato) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4">
            <ExclamationTriangleIcon className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Campeonato não encontrado</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">O campeonato que você está procurando não existe ou foi movido.</p>
            <Link href="/campeonatos" legacyBehavior>
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                    <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                    Voltar para Campeonatos
                </a>
            </Link>
        </div>
    );
  }

  const IconComponent = iconMap[campeonato.slug] || <TrophyIcon className="h-16 w-16" />; // Ícone padrão

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section Específica */}
      <div className="relative bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-600 dark:to-yellow-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto text-white mb-4">
            {IconComponent}
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {campeonato.name}
          </h1>
          <p className="mt-6 text-xl text-yellow-100 dark:text-yellow-200 max-w-3xl mx-auto">
            {campeonato.description || 'Informações detalhadas sobre este campeonato.'}
          </p>
          <div className="mt-8">
              <Link href="/campeonatos" legacyBehavior>
                  <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-yellow-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                      <ArrowLeftIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                      Ver Todos Campeonatos
                  </a>
              </Link>
          </div>
        </div>
      </div>

      {/* Conteúdo do Campeonato (Times, Tabela, Jogos) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Coluna 1: Times Inscritos */}
          <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Times Inscritos</h2>
            {campeonato.teams && campeonato.teams.length > 0 ? (
              <ul className="space-y-2">
                {campeonato.teams.map((team, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">- {team}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Nenhum time inscrito ainda.</p>
            )}
          </div>

          {/* Coluna 2 e 3: Tabela e Jogos */}
          <div className="lg:col-span-2 space-y-8">
            {/* Seção Tabela */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Tabela</h2>
              {campeonato.table && campeonato.table.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pos</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Time</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Pts</th>
                                {/* Adicionar mais colunas se necessário (Jogos, Vitórias, etc.) */}
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                            {campeonato.table.map((row) => (
                                <tr key={row.pos}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{row.pos}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.team}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{row.pts}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">Tabela ainda não disponível.</p>
              )}
            </div>

            {/* Seção Jogos */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Jogos</h2>
              {campeonato.matches && campeonato.matches.length > 0 ? (
                <ul className="space-y-4">
                  {campeonato.matches.map((match, index) => (
                    <li key={index} className={`p-4 rounded-md ${match.status === 'Finalizado' ? 'bg-gray-100 dark:bg-gray-700' : 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800'}`}>
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className={` ${match.status === 'Finalizado' ? 'text-gray-700 dark:text-gray-300' : 'text-yellow-800 dark:text-yellow-300'}`}>{match.home}</span>
                        <span className={`px-2 py-1 rounded ${match.status === 'Finalizado' ? 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-100' : 'bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100'}`}>{match.score}</span>
                        <span className={`${match.status === 'Finalizado' ? 'text-gray-700 dark:text-gray-300' : 'text-yellow-800 dark:text-yellow-300'}`}>{match.away}</span>
                      </div>
                      <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-400">{match.status}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">Nenhum jogo agendado ou realizado ainda.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
