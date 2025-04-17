import { motion } from 'framer-motion';
import { TrophyIcon, StarIcon, ShieldCheckIcon, CalendarDaysIcon, UserIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const campeonatos = [
  { name: 'FBF Principal', slug: 'fbf-principal', icon: <TrophyIcon className="h-10 w-10" /> },
  { name: 'FBF Aspirantes', slug: 'fbf-aspirantes', icon: <StarIcon className="h-10 w-10" /> },
  { name: 'URUN X4', slug: 'urun-x4', icon: <ShieldCheckIcon className="h-10 w-10" /> },
  { name: 'FBF Semanal', slug: 'fbf-semanal', icon: <CalendarDaysIcon className="h-10 w-10" /> },
  { name: 'FBF X1 Rei das Quadradas', slug: 'fbf-x1-rei-quadradas', icon: <UserIcon className="h-10 w-10" /> },
  { name: 'FBF Pré Temporada', slug: 'fbf-pre-temporada', icon: <RocketLaunchIcon className="h-10 w-10" /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Campeonatos() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-800 dark:bg-gray-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nossos Campeonatos
          </h1>
          <p className="mt-6 text-xl text-yellow-300 dark:text-yellow-400 max-w-3xl mx-auto">
            Explore as diversas competições organizadas pela FBF.
          </p>
        </div>
      </div>

      {/* Grid de Campeonatos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {campeonatos.map((camp, index) => (
            <Link key={camp.slug} href={`/campeonatos/${camp.slug}`} legacyBehavior>
              <motion.a 
                className="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                custom={index} 
              >
                <div className="flex flex-col items-center p-8 text-center h-full">
                  <div className="text-yellow-500 dark:text-yellow-400 mb-5 p-3 bg-yellow-100 dark:bg-gray-700 rounded-full">
                    {camp.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex-grow">{camp.name}</h2>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Ver Detalhes →</p>
                </div>
              </motion.a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
