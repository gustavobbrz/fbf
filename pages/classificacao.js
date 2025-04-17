import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SportsIcon from '@mui/icons-material/Sports';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

// Dados simulados para mostrar na tabela de classificação
const times = [
  { id: 1, nome: 'URUN', jogos: 10, vitorias: 8, empates: 1, derrotas: 1, gm: 25, gs: 10, saldo: 15, pontos: 25, ultimos: ['V', 'V', 'V', 'D', 'E'] },
  { id: 2, nome: 'FBF All-Stars', jogos: 10, vitorias: 7, empates: 2, derrotas: 1, gm: 22, gs: 12, saldo: 10, pontos: 23, ultimos: ['V', 'V', 'E', 'V', 'E'] },
  { id: 3, nome: 'Spartak', jogos: 10, vitorias: 6, empates: 2, derrotas: 2, gm: 19, gs: 11, saldo: 8, pontos: 20, ultimos: ['V', 'D', 'V', 'V', 'E'] },
  { id: 4, nome: 'Haxball FC', jogos: 10, vitorias: 5, empates: 3, derrotas: 2, gm: 17, gs: 12, saldo: 5, pontos: 18, ultimos: ['E', 'V', 'V', 'E', 'E'] },
  { id: 5, nome: 'Cruzeiro', jogos: 10, vitorias: 5, empates: 2, derrotas: 3, gm: 15, gs: 13, saldo: 2, pontos: 17, ultimos: ['V', 'D', 'V', 'V', 'D'] },
  { id: 6, nome: 'Vasco', jogos: 10, vitorias: 4, empates: 3, derrotas: 3, gm: 13, gs: 12, saldo: 1, pontos: 15, ultimos: ['D', 'E', 'V', 'V', 'E'] },
  { id: 7, nome: 'Botafogo', jogos: 10, vitorias: 3, empates: 4, derrotas: 3, gm: 11, gs: 11, saldo: 0, pontos: 13, ultimos: ['E', 'E', 'V', 'D', 'E'] },
  { id: 8, nome: 'Flamengo', jogos: 10, vitorias: 2, empates: 4, derrotas: 4, gm: 10, gs: 12, saldo: -2, pontos: 10, ultimos: ['E', 'D', 'E', 'D', 'V'] },
  { id: 9, nome: 'Fluminense', jogos: 10, vitorias: 2, empates: 2, derrotas: 6, gm: 8, gs: 18, saldo: -10, pontos: 8, ultimos: ['D', 'D', 'E', 'V', 'D'] },
  { id: 10, nome: 'São Paulo', jogos: 10, vitorias: 0, empates: 3, derrotas: 7, gm: 5, gs: 21, saldo: -16, pontos: 3, ultimos: ['D', 'D', 'D', 'E', 'D'] },
];

const torneios = ['FBF Principal', 'FBF Aspirantes', 'URUN X4', 'FBF Semanal'];

export default function Classificacao() {
  const [campeonatoAtual, setCampeonatoAtual] = useState(0);

  const handleChangeCampeonato = (event, novoCampeonato) => {
    setCampeonatoAtual(novoCampeonato);
  };

  const getResultadoColor = (resultado) => {
    switch (resultado) {
      case 'V': return 'success';
      case 'E': return 'warning';
      case 'D': return 'error';
      default: return 'default';
    }
  };

  const getPosicaoStyle = (posicao) => {
    if (posicao <= 4) return 'bg-green-100 dark:bg-green-900 border-l-4 border-green-500';
    if (posicao >= 9) return 'bg-red-50 dark:bg-red-900 border-l-4 border-red-500';
    return '';
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Classificação</h1>
          <p className="text-gray-600 dark:text-gray-300">Tabela atualizada dos campeonatos da FBF.</p>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: { xs: '100%', md: 'auto' }, mt: { xs: 2, md: 0 } }}>
          <Tabs value={campeonatoAtual} onChange={handleChangeCampeonato} variant="scrollable" scrollButtons="auto">
            {torneios.map((torneio, index) => (
              <Tab label={torneio} key={index} />
            ))}
          </Tabs>
        </Box>
      </div>
      
      <Paper elevation={3} className="overflow-hidden">
        <TableContainer component={Paper} className="dark:bg-gray-800 shadow-xl rounded-lg overflow-auto">
          <Table sx={{ minWidth: 650 }} aria-label="Tabela de classificação">
            <TableHead>
              <TableRow className="bg-blue-50 dark:bg-gray-700">
                <TableCell sx={{ fontWeight: 'bold' }}>Pos</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Clube</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>P</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>J</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>V</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>E</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>D</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>GP</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>GC</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>SG</TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold' }}>Últimos 5</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {times
                .sort((a, b) => {
                  if (b.pontos !== a.pontos) return b.pontos - a.pontos;
                  if (b.vitorias !== a.vitorias) return b.vitorias - a.vitorias;
                  return b.saldo - a.saldo;
                })
                .map((time, index) => (
                  <TableRow 
                    key={time.id} 
                    className={`${getPosicaoStyle(index + 1)} hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200`}
                  >
                    <TableCell className="font-medium">
                      {index === 0 && <EmojiEventsIcon fontSize="small" className="text-yellow-500 mr-1" />}
                      {index + 1}
                    </TableCell>
                    <TableCell component="th" scope="row" className="font-medium">
                      {time.nome}
                    </TableCell>
                    <TableCell align="center" className="font-bold">{time.pontos}</TableCell>
                    <TableCell align="center">{time.jogos}</TableCell>
                    <TableCell align="center" className="text-green-600 dark:text-green-400 font-medium">{time.vitorias}</TableCell>
                    <TableCell align="center" className="text-yellow-600 dark:text-yellow-400">{time.empates}</TableCell>
                    <TableCell align="center" className="text-red-600 dark:text-red-400">{time.derrotas}</TableCell>
                    <TableCell align="center">{time.gm}</TableCell>
                    <TableCell align="center">{time.gs}</TableCell>
                    <TableCell align="center" className={time.saldo > 0 ? 'text-green-600 dark:text-green-400' : time.saldo < 0 ? 'text-red-600 dark:text-red-400' : ''}>
                      {time.saldo > 0 ? `+${time.saldo}` : time.saldo}
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex justify-center gap-1">
                        {time.ultimos.map((resultado, idx) => (
                          <Chip 
                            key={idx} 
                            label={resultado} 
                            color={getResultadoColor(resultado)} 
                            size="small"
                            variant="outlined"
                            sx={{ minWidth: '28px' }}
                          />
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <Typography>Libertadores</Typography>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <Typography>Zona de Rebaixamento</Typography>
        </div>
      </div>

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <Typography variant="h6" className="mb-4 font-semibold flex items-center gap-2">
          <SportsIcon /> Estatísticas do Campeonato
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Paper elevation={1} className="p-4 rounded-lg flex items-center justify-between">
            <div>
              <Typography variant="body2" color="text.secondary">Jogos Realizados</Typography>
              <Typography variant="h5" component="div" className="font-bold">50</Typography>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
              <CompareArrowsIcon className="text-blue-500 dark:text-blue-300" />
            </div>
          </Paper>
          <Paper elevation={1} className="p-4 rounded-lg flex items-center justify-between">
            <div>
              <Typography variant="body2" color="text.secondary">Gols Marcados</Typography>
              <Typography variant="h5" component="div" className="font-bold">145</Typography>
            </div>
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
              <SportsIcon className="text-green-500 dark:text-green-300" />
            </div>
          </Paper>
          <Paper elevation={1} className="p-4 rounded-lg flex items-center justify-between">
            <div>
              <Typography variant="body2" color="text.secondary">Média por Jogo</Typography>
              <Typography variant="h5" component="div" className="font-bold">2.9</Typography>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-full">
              <EmojiEventsIcon className="text-yellow-500 dark:text-yellow-300" />
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
}
