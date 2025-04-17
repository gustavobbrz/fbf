import { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Tabs, 
  Tab, 
  Button,
  Chip,
  Avatar,
  Divider,
  Paper
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Dados simulados para equipes
const equipes = [
  {
    id: 1,
    nome: 'URUN',
    logo: 'https://via.placeholder.com/150?text=URUN',
    capa: 'https://via.placeholder.com/800x200?text=URUN+TEAM',
    descricao: 'Um dos times mais tradicionais do cenário FBF, conhecido pela sua força tática e espírito de equipe.',
    fundacao: '2019',
    capitao: 'MarcosTeam',
    titulos: ['FBF Principal 2022', 'URUN X4 2023', 'FBF Semanal (5x)'],
    jogadores: [
      { id: 1, nome: 'MarcosTeam', posicao: 'Capitão/Atacante', foto: 'https://via.placeholder.com/80?text=M' },
      { id: 2, nome: 'GabrielDef', posicao: 'Zagueiro', foto: 'https://via.placeholder.com/80?text=G' },
      { id: 3, nome: 'LucasGK', posicao: 'Goleiro', foto: 'https://via.placeholder.com/80?text=L' },
      { id: 4, nome: 'PedroMid', posicao: 'Meio-Campo', foto: 'https://via.placeholder.com/80?text=P' },
      { id: 5, nome: 'RafaAttack', posicao: 'Atacante', foto: 'https://via.placeholder.com/80?text=R' },
      { id: 6, nome: 'ThiagoSub', posicao: 'Reserva', foto: 'https://via.placeholder.com/80?text=T' },
    ],
    estatisticas: {
      vitorias: 128,
      empates: 42,
      derrotas: 30,
      aproveitamento: '72%',
      golsMarcados: 345,
      golsSofridos: 190,
    }
  },
  {
    id: 2,
    nome: 'FBF All-Stars',
    logo: 'https://via.placeholder.com/150?text=FBF',
    capa: 'https://via.placeholder.com/800x200?text=FBF+All+Stars',
    descricao: 'Equipe formada pelos melhores jogadores da FBF, conhecida pelo seu estilo ofensivo e técnica apurada.',
    fundacao: '2020',
    capitao: 'AlexMaster',
    titulos: ['FBF Aspirantes 2021', 'FBF X1 2022', 'FBF Pré Temporada 2023'],
    jogadores: [
      { id: 1, nome: 'AlexMaster', posicao: 'Capitão/Meio-Campo', foto: 'https://via.placeholder.com/80?text=A' },
      { id: 2, nome: 'BrunoDefensor', posicao: 'Zagueiro', foto: 'https://via.placeholder.com/80?text=B' },
      { id: 3, nome: 'CarlosGK', posicao: 'Goleiro', foto: 'https://via.placeholder.com/80?text=C' },
      { id: 4, nome: 'DiegoAtt', posicao: 'Atacante', foto: 'https://via.placeholder.com/80?text=D' },
      { id: 5, nome: 'EduardoMid', posicao: 'Meio-Campo', foto: 'https://via.placeholder.com/80?text=E' },
      { id: 6, nome: 'FelipeSub', posicao: 'Reserva', foto: 'https://via.placeholder.com/80?text=F' },
    ],
    estatisticas: {
      vitorias: 115,
      empates: 35,
      derrotas: 40,
      aproveitamento: '66%',
      golsMarcados: 310,
      golsSofridos: 205,
    }
  },
  {
    id: 3,
    nome: 'Spartak',
    logo: 'https://via.placeholder.com/150?text=Spartak',
    capa: 'https://via.placeholder.com/800x200?text=Spartak+FC',
    descricao: 'Equipe conhecida pela sua disciplina tática e espírito guerreiro em cada partida.',
    fundacao: '2018',
    capitao: 'VictorKing',
    titulos: ['FBF Principal 2019', 'FBF Aspirantes 2020', 'URUN X4 2022'],
    jogadores: [
      { id: 1, nome: 'VictorKing', posicao: 'Capitão/Atacante', foto: 'https://via.placeholder.com/80?text=V' },
      { id: 2, nome: 'WilliamDef', posicao: 'Zagueiro', foto: 'https://via.placeholder.com/80?text=W' },
      { id: 3, nome: 'XavierGK', posicao: 'Goleiro', foto: 'https://via.placeholder.com/80?text=X' },
      { id: 4, nome: 'YuriMid', posicao: 'Meio-Campo', foto: 'https://via.placeholder.com/80?text=Y' },
      { id: 5, nome: 'ZecoAtt', posicao: 'Atacante', foto: 'https://via.placeholder.com/80?text=Z' },
      { id: 6, nome: 'AndreReserva', posicao: 'Reserva', foto: 'https://via.placeholder.com/80?text=A' },
    ],
    estatisticas: {
      vitorias: 98,
      empates: 52,
      derrotas: 50,
      aproveitamento: '61%',
      golsMarcados: 278,
      golsSofridos: 220,
    }
  },
  {
    id: 4,
    nome: 'Haxball FC',
    logo: 'https://via.placeholder.com/150?text=HFC',
    capa: 'https://via.placeholder.com/800x200?text=Haxball+FC',
    descricao: 'Time tradicional com foco no desenvolvimento de novos talentos e jogo coletivo.',
    fundacao: '2021',
    capitao: 'PauloLeader',
    titulos: ['FBF Semanal 2022', 'FBF Pré-Temporada 2023'],
    jogadores: [
      { id: 1, nome: 'PauloLeader', posicao: 'Capitão/Meio-Campo', foto: 'https://via.placeholder.com/80?text=P' },
      { id: 2, nome: 'QuentinDef', posicao: 'Zagueiro', foto: 'https://via.placeholder.com/80?text=Q' },
      { id: 3, nome: 'RobsonGK', posicao: 'Goleiro', foto: 'https://via.placeholder.com/80?text=R' },
      { id: 4, nome: 'SergioMid', posicao: 'Meio-Campo', foto: 'https://via.placeholder.com/80?text=S' },
      { id: 5, nome: 'TiagoAtt', posicao: 'Atacante', foto: 'https://via.placeholder.com/80?text=T' },
      { id: 6, nome: 'UlissesSub', posicao: 'Reserva', foto: 'https://via.placeholder.com/80?text=U' },
    ],
    estatisticas: {
      vitorias: 87,
      empates: 33,
      derrotas: 60,
      aproveitamento: '57%',
      golsMarcados: 245,
      golsSofridos: 230,
    }
  },
];

export default function Equipes() {
  const [tabValue, setTabValue] = useState(0);
  const [equipeSelecionada, setEquipeSelecionada] = useState(null);
  
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const mostrarDetalhesEquipe = (equipe) => {
    setEquipeSelecionada(equipe);
  };
  
  const voltarParaLista = () => {
    setEquipeSelecionada(null);
  };

  return (
    <Container maxWidth="lg" className="py-8">
      {!equipeSelecionada ? (
        // Lista de equipes
        <>
          <div className="mb-6">
            <Typography variant="h4" component="h1" className="font-bold mb-2">
              Equipes e Times
            </Typography>
            <Typography variant="body1" color="textSecondary" className="mb-4">
              Conheça as equipes que participam das competições da FBF Haxball.
            </Typography>
            
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleChangeTab} aria-label="categorias de equipes">
                <Tab label="Todos os Times" />
                <Tab label="FBF Principal" />
                <Tab label="FBF Aspirantes" />
                <Tab label="URUN X4" />
              </Tabs>
            </Box>
          </div>

          <Grid container spacing={3}>
            {equipes.map((equipe) => (
              <Grid item xs={12} sm={6} md={4} key={equipe.id}>
                <Card 
                  className="h-full flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  elevation={3}
                >
                  <Box 
                    sx={{ 
                      position: 'relative',
                      height: 140,
                      backgroundImage: `url(${equipe.capa})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <Box 
                      sx={{ 
                        position: 'absolute',
                        bottom: -40,
                        left: 20,
                        width: 80,
                        height: 80,
                        border: '3px solid white',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={equipe.logo}
                        alt={`Logo ${equipe.nome}`}
                        className="w-full h-full object-cover"
                      />
                    </Box>
                  </Box>
                  
                  <CardContent className="pt-6 flex-grow">
                    <Typography variant="h6" component="h2" className="font-bold mb-1">
                      {equipe.nome}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-3">
                      Fundado em {equipe.fundacao} • Capitão: {equipe.capitao}
                    </Typography>
                    <Typography variant="body2" className="mb-4" sx={{ minHeight: 60 }}>
                      {equipe.descricao}
                    </Typography>
                    
                    <Box className="flex items-center space-x-2 mb-3">
                      <Chip 
                        icon={<EmojiEventsIcon fontSize="small" />} 
                        label={`${equipe.titulos.length} títulos`} 
                        variant="outlined" 
                        color="primary" 
                        size="small"
                      />
                      <Chip 
                        icon={<PeopleIcon fontSize="small" />} 
                        label={`${equipe.jogadores.length} jogadores`} 
                        variant="outlined" 
                        size="small"
                      />
                    </Box>
                    
                    <Button 
                      variant="contained" 
                      color="primary" 
                      fullWidth
                      onClick={() => mostrarDetalhesEquipe(equipe)}
                    >
                      Ver Detalhes
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        // Detalhes da equipe selecionada
        <Paper elevation={3} className="p-6">
          <Button 
            variant="outlined" 
            onClick={voltarParaLista} 
            className="mb-4"
          >
            ← Voltar para lista
          </Button>
          
          <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-6">
            <CardMedia
              component="img"
              image={equipeSelecionada.capa}
              alt={`Capa ${equipeSelecionada.nome}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <div className="text-center">
                <Avatar 
                  src={equipeSelecionada.logo} 
                  alt={equipeSelecionada.nome} 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    border: '3px solid white',
                    margin: '0 auto 16px'
                  }}
                />
                <Typography variant="h4" component="h1" className="text-white font-bold drop-shadow-lg">
                  {equipeSelecionada.nome}
                </Typography>
              </div>
            </div>
          </div>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Typography variant="h5" className="font-bold flex items-center mb-4">
                <PeopleIcon className="mr-2" /> Elenco
              </Typography>
              
              <Grid container spacing={2}>
                {equipeSelecionada.jogadores.map((jogador) => (
                  <Grid item xs={12} sm={6} key={jogador.id}>
                    <Card variant="outlined" className="flex items-center p-3">
                      <Avatar src={jogador.foto} alt={jogador.nome} className="mr-3" />
                      <div>
                        <Typography variant="subtitle1" className="font-medium">
                          {jogador.nome}
                          {jogador.posicao.includes('Capitão') && (
                            <StarIcon fontSize="small" className="ml-1 text-yellow-500" />
                          )}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {jogador.posicao}
                        </Typography>
                      </div>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              
              <Typography variant="h5" className="font-bold flex items-center mt-6 mb-4">
                <EmojiEventsIcon className="mr-2" /> Títulos
              </Typography>
              
              <div className="space-y-2">
                {equipeSelecionada.titulos.map((titulo, index) => (
                  <Chip 
                    key={index}
                    label={titulo}
                    icon={<EmojiEventsIcon />}
                    color="primary"
                    className="mr-2 mb-2"
                  />
                ))}
              </div>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Typography variant="h5" className="font-bold mb-4">Sobre o Time</Typography>
              <Typography variant="body1" paragraph>
                {equipeSelecionada.descricao}
              </Typography>
              <Typography variant="body1" paragraph>
                Fundado em {equipeSelecionada.fundacao}, o time é liderado pelo capitão {equipeSelecionada.capitao} e vem 
                construindo uma história de conquistas no cenário competitivo da FBF Haxball.
              </Typography>
              
              <Divider className="my-4" />
              
              <Typography variant="h5" className="font-bold mb-4">Estatísticas</Typography>
              
              <div className="grid grid-cols-2 gap-4">
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Vitórias</Typography>
                  <Typography variant="h5" className="font-bold text-green-600">{equipeSelecionada.estatisticas.vitorias}</Typography>
                </Card>
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Empates</Typography>
                  <Typography variant="h5" className="font-bold text-yellow-600">{equipeSelecionada.estatisticas.empates}</Typography>
                </Card>
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Derrotas</Typography>
                  <Typography variant="h5" className="font-bold text-red-600">{equipeSelecionada.estatisticas.derrotas}</Typography>
                </Card>
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Aproveitamento</Typography>
                  <Typography variant="h5" className="font-bold text-blue-600">{equipeSelecionada.estatisticas.aproveitamento}</Typography>
                </Card>
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Gols Marcados</Typography>
                  <Typography variant="h5" className="font-bold">{equipeSelecionada.estatisticas.golsMarcados}</Typography>
                </Card>
                <Card variant="outlined" className="p-3">
                  <Typography color="textSecondary" variant="body2">Gols Sofridos</Typography>
                  <Typography variant="h5" className="font-bold">{equipeSelecionada.estatisticas.golsSofridos}</Typography>
                </Card>
              </div>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
}
