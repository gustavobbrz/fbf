import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { PlusIcon, TrashIcon, UserCircleIcon, ShieldCheckIcon, ArrowUpOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Lista de campeonatos (idealmente vinda de props ou API)
const todosCampeonatos = [
  { name: 'FBF Principal', slug: 'fbf-principal'},
  { name: 'FBF Aspirantes', slug: 'fbf-aspirantes'},
  { name: 'URUN X4', slug: 'urun-x4'},
  { name: 'FBF Semanal', slug: 'fbf-semanal'},
  { name: 'FBF X1 Rei das Quadradas', slug: 'fbf-x1-rei-quadradas'},
  { name: 'FBF Pré Temporada', slug: 'fbf-pre-temporada'},
];

export default function InscricaoPage() {
  const router = useRouter();
  const { campeonato: initialCampeonatoSlug } = router.query;

  const [teamName, setTeamName] = useState('');
  const [players, setPlayers] = useState([{ id: 1, name: '', isCaptain: false }]);
  const [nextPlayerId, setNextPlayerId] = useState(2);
  const [logoPreview, setLogoPreview] = useState(null);
  const [selectedChampionships, setSelectedChampionships] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para feedback

  // Pré-seleciona o campeonato da URL quando a página carrega
  useEffect(() => {
    if (initialCampeonatoSlug) {
      setSelectedChampionships([initialCampeonatoSlug]);
    }
  }, [initialCampeonatoSlug]);

  const addPlayer = () => {
    setPlayers([...players, { id: nextPlayerId, name: '', isCaptain: false }]);
    setNextPlayerId(nextPlayerId + 1);
  };

  const removePlayer = (id) => {
    // Não permite remover o último jogador
    if (players.length <= 1) return;
    // Se remover o capitão, desmarca todos (ou define um novo padrão)
    const playerToRemove = players.find(p => p.id === id);
    if (playerToRemove?.isCaptain) {
        handleCaptainChange(null); // Desmarca capitão ao remover
    }
    setPlayers(players.filter(player => player.id !== id));
  };

  const handlePlayerNameChange = (id, name) => {
    setPlayers(players.map(player => player.id === id ? { ...player, name } : player));
  };

  const handleCaptainChange = (captainId) => {
    setPlayers(players.map(player => ({ ...player, isCaptain: player.id === captainId })));
  };

  const handleLogoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      // Guardar o arquivo real para envio:
      // setLogoFile(file); // Precisaria de outro estado para o File object
    }
  };

  const handleChampionshipChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedChampionships([...selectedChampionships, value]);
    } else {
      setSelectedChampionships(selectedChampionships.filter(slug => slug !== value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validação básica (pode ser mais robusta)
    if (!teamName || players.some(p => !p.name) || !players.some(p => p.isCaptain) || selectedChampionships.length === 0) {
        alert('Por favor, preencha todos os campos obrigatórios, adicione jogadores, selecione um capitão e pelo menos um campeonato.');
        return;
    }
    
    const formData = {
      teamName,
      players,
      selectedChampionships,
      // logoFile, // Incluir o estado do arquivo do logo aqui
    };
    console.log('Dados do Formulário:', formData);
    // Aqui iria a lógica para enviar os dados para o backend (API)
    alert('Inscrição enviada com sucesso! (Simulação)');
    setFormSubmitted(true);
    // Opcional: Redirecionar ou limpar o formulário
    // router.push('/times');
  };

  // Se o formulário foi enviado, mostra mensagem de sucesso
  if (formSubmitted) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center px-4 py-12">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Inscrição Recebida!</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Sua inscrição foi registrada com sucesso. Entraremos em contato em breve.</p>
            <button 
                onClick={() => router.push('/times')}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
                Ver Times
            </button>
        </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gray-800 dark:bg-gray-950 p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-center text-white">Inscrição de Time</h1>
          <p className="mt-2 text-center text-lg text-yellow-300 dark:text-yellow-400">Complete os dados para registrar sua equipe</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Nome do Time */}
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome do Time <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="teamName"
              id="teamName"
              required
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm dark:bg-gray-700 dark:text-white"
              placeholder="Ex: Feras do Futsal"
            />
          </div>

          {/* Escudo do Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Escudo do Time</label>
            <div className="mt-1 flex items-center space-x-4">
              <span className="inline-block h-16 w-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {logoPreview ? (
                  <img src={logoPreview} alt="Preview" className="h-full w-full object-cover" />
                ) : (
                  <ShieldCheckIcon className="h-10 w-10 text-gray-400 dark:text-gray-500" />
                )}
              </span>
              <label htmlFor="logo-upload" className="cursor-pointer bg-white dark:bg-gray-700 py-2 px-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 inline-flex items-center">
                <ArrowUpOnSquareIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                <span>Carregar Escudo</span>
                <input id="logo-upload" name="logo-upload" type="file" className="sr-only" accept="image/*" onChange={handleLogoChange} />
              </label>
            </div>
             <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">PNG, JPG, GIF até 2MB.</p>
          </div>

          {/* Jogadores */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Jogadores <span className="text-red-500">*</span></h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Adicione os membros da sua equipe e selecione o capitão.</p>
            <div className="mt-4 space-y-4">
              {players.map((player, index) => (
                <div key={player.id} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                  <UserCircleIcon className="h-6 w-6 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  <input
                    type="text"
                    required
                    value={player.name}
                    onChange={(e) => handlePlayerNameChange(player.id, e.target.value)}
                    className="flex-grow block w-full px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm dark:bg-gray-600 dark:text-white"
                    placeholder={`Nome do Jogador ${index + 1}`}
                  />
                  <div className="flex items-center flex-shrink-0 ml-auto space-x-2">
                    <label htmlFor={`captain-${player.id}`} className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer flex items-center">
                      <input
                        id={`captain-${player.id}`}
                        name="captainRadio"
                        type="radio"
                        checked={player.isCaptain}
                        onChange={() => handleCaptainChange(player.id)}
                        className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 dark:border-gray-500 dark:bg-gray-600 dark:checked:bg-yellow-500 cursor-pointer"
                      />
                       <span className="ml-1.5">Capitão</span>
                    </label>
                    {players.length > 1 && (
                       <button
                        type="button"
                        onClick={() => removePlayer(player.id)}
                        className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                        title="Remover Jogador"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addPlayer}
              className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Adicionar Jogador
            </button>
             <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Pelo menos 1 jogador é necessário. Marque um como capitão.</p>
          </div>

          {/* Campeonatos a Participar */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-lg font-medium text-gray-900 dark:text-white">Campeonatos a Participar <span className="text-red-500">*</span></h2>
             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Selecione um ou mais campeonatos que seu time deseja disputar.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {todosCampeonatos.map((camp) => (
                <div key={camp.slug} className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={`camp-${camp.slug}`}
                      name="campeonatos[]"
                      type="checkbox"
                      value={camp.slug}
                      checked={selectedChampionships.includes(camp.slug)}
                      onChange={handleChampionshipChange}
                      className="focus:ring-yellow-500 h-4 w-4 text-yellow-600 border-gray-300 dark:border-gray-500 dark:bg-gray-600 dark:checked:bg-yellow-500 rounded cursor-pointer"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={`camp-${camp.slug}`} className="font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
                      {camp.name}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            {selectedChampionships.length === 0 && <p className="mt-2 text-xs text-red-600 dark:text-red-400">Selecione pelo menos um campeonato.</p> }
          </div>

          {/* Botão de Envio */}
          <div className="pt-5 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Registrar Time
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
