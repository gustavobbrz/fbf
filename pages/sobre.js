import { TrophyIcon, UsersIcon, CalendarIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const StatCard = ({ icon, value, label }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }} // Anima uma vez quando 30% visível
    variants={cardVariants}
  >
    <div className="text-yellow-500 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-yellow-50 dark:bg-gray-700 mb-4">
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</h3>
    <p className="text-gray-600 dark:text-gray-300">{label}</p>
  </motion.div>
);

const LeaderCard = ({ name, role, period }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={cardVariants}
  >
    <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-800 dark:to-black flex flex-col items-center justify-center text-center p-4">
      {/* Ícone representativo - pode ser trocado por imagem se disponível */}
      <AcademicCapIcon className="h-16 w-16 text-yellow-400 mb-2" /> 
      <p className="text-sm font-medium text-gray-300 dark:text-gray-400">Liderança</p>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
      <p className="text-yellow-500 font-medium mt-1">{role}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{period}</p>
    </div>
  </motion.div>
);

export default function Sobre() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section com Gradiente Animado (Sugestão) */}
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black overflow-hidden animate-gradient-x">
        {/* Adicione a animação 'animate-gradient-x' ao seu CSS global ou tailwind.config.js se não existir */}
        <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nossa História
          </h1>
          <p className="mt-6 text-xl text-yellow-200 max-w-3xl">
            Considerado o maior campeonato de futsal x3 da america latina!!
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard icon={<TrophyIcon className="h-8 w-8" />} value="17+" label="Títulos Nacionais" />
          <StatCard icon={<UsersIcon className="h-8 w-8" />} value="2000+" label="Jogadores" />
          <StatCard icon={<CalendarIcon className="h-8 w-8" />} value="7" label="Anos de História" />
          <StatCard icon={<ChartBarIcon className="h-8 w-8" />} value="1000+" label="Partidas" />
        </div>

        {/* Nova Seção da História */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">A Trajetória da FBF</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p>
              A FBF (Federação Brasileira de Futsal) nasceu em março de 2018, fundada por richasard e Verón i Legend, durante a transição do Haxball do Flash para o HTML5. Desde sua primeira temporada, destacou-se pela organização impecável, rivalidades eletrizantes e um altíssimo nível técnico, consolidando-se como um dos principais campeonatos de futsal 3x3 do cenário virtual.
            </p>
            <p>
              Após duas temporadas de sucesso, a FBF enfrentou uma pausa devido a desafios pessoais e mudanças na administração. Mas, em julho de 2018, ressurgiu com força total sob nova liderança: bubble, TylerK e bitoristo. A partir daí, a federação cresceu exponencialmente, aumentando o número de equipes e o engajamento da comunidade, tornando-se uma referência incontestável no futsal virtual.
            </p>
            <p>
              A estabilidade da FBF sempre foi mantida graças ao trabalho dedicado de voluntários e à relação próxima entre administração e jogadores, baseada em transparência e colaboração. Com o tempo, a federação expandiu seus horizontes e, em parceria com a SAF/LFA, criou a CONSUDFUT (atual Haxball America), organizando torneios intercontinentais entre clubes e seleções da América do Sul e do Norte. A Seleção Brasileira, representando a FBF, conquistou títulos históricos, incluindo a Copa do Mundo de Futsal.
            </p>
            <p>
              Hoje, sob a presidência de ator e bubble, a FBF continua sendo um exemplo de organização e resiliência, sempre comprometida com o crescimento do esporte. Em um marco recente, uniu forças com a URUN, o maior campeonato de futsal 4x4, em um único servidor, fortalecendo ainda mais a comunidade e ampliando as oportunidades competitivas para todos os jogadores.
            </p>
            <p>
              O legado da FBF é construído a cada partida, a cada torneio e a cada jogador que faz parte dessa história.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Nossa Liderança</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <LeaderCard name="richasard & Verón i Legend" role="Fundadores" period="2018" />
            <LeaderCard name="bubble, TylerK, Ator & bitoristo" role="Administradores" period="2018-2025" />
          </div>
        </div>
      </div>
    </div>
  );
}
