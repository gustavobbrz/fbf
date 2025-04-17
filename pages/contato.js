import { useState } from 'react';
import { 
  Box, 
  Paper, 
  TextField, 
  Button, 
  Typography, 
  Grid, 
  Snackbar, 
  Alert,
  MenuItem,
  FormControl,
  InputLabel,
  Select
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const assuntos = [
  'Inscrições em campeonatos',
  'Dúvidas sobre a FBF',
  'Parceria/Patrocínio',
  'Problemas técnicos',
  'Reportar problema',
  'Outros assuntos'
];

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpa erro do campo quando o usuário começa a digitar
    if (erros[name]) {
      setErros(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validarFormulario = () => {
    const novosErros = {};
    
    if (!formData.nome.trim()) {
      novosErros.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      novosErros.email = 'E-mail inválido';
    }
    
    if (!formData.assunto) {
      novosErros.assunto = 'Selecione um assunto';
    }
    
    if (!formData.mensagem.trim()) {
      novosErros.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.length < 10) {
      novosErros.mensagem = 'Mensagem muito curta (mínimo 10 caracteres)';
    }
    
    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // Simulação de envio (aqui seria a chamada para API)
      console.log('Enviando:', formData);
      
      // Feedback de sucesso
      setEnviado(true);
      
      // Limpa formulário
      setFormData({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
    }
  };

  const handleCloseSnackbar = () => {
    setEnviado(false);
  };

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <Typography variant="h4" component="h1" className="font-bold mb-2">
        Entre em Contato
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom className="mb-8">
        Dúvidas, sugestões ou parcerias? Estamos à disposição para atendê-lo.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} className="p-6 md:p-8 dark:bg-gray-800 mb-4">
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" className="mb-4 font-semibold">
                Preencha o formulário
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nome completo"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!erros.nome}
                    helperText={erros.nome}
                    variant="outlined"
                    className="mb-2"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="E-mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    error={!!erros.email}
                    helperText={erros.email}
                    variant="outlined"
                    className="mb-2"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth error={!!erros.assunto}>
                    <InputLabel>Assunto</InputLabel>
                    <Select
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      label="Assunto"
                    >
                      {assuntos.map((assunto) => (
                        <MenuItem key={assunto} value={assunto}>
                          {assunto}
                        </MenuItem>
                      ))}
                    </Select>
                    {erros.assunto && (
                      <Typography variant="caption" color="error">
                        {erros.assunto}
                      </Typography>
                    )}
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={!!erros.mensagem}
                    helperText={erros.mensagem}
                    variant="outlined"
                    className="mb-4"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    endIcon={<SendIcon />}
                    className="hover:shadow-lg transition-all"
                  >
                    Enviar Mensagem
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={5}>
          <Paper elevation={3} className="p-6 md:p-8 dark:bg-gray-800 bg-blue-50 dark:bg-gray-800 h-full">
            <Typography variant="h6" className="mb-6 font-semibold">
              Informações de Contato
            </Typography>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <LocationOnIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <Typography variant="subtitle1" className="font-medium">Nosso Endereço</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Avenida Virtual, 1000 - Haxball Tower<br />
                    Rio de Janeiro - RJ, Brasil
                  </Typography>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <EmailIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <Typography variant="subtitle1" className="font-medium">E-mail</Typography>
                  <Typography variant="body2" color="textSecondary">
                    contato@fbfhaxball.com.br<br />
                    suporte@fbfhaxball.com.br
                  </Typography>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-blue-600 dark:text-blue-400" />
                <div>
                  <Typography variant="subtitle1" className="font-medium">Telefone</Typography>
                  <Typography variant="body2" color="textSecondary">
                    +55 (21) 1234-5678<br />
                    Horário: 9h às 18h (Segunda a Sexta)
                  </Typography>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
              <Typography variant="subtitle1" className="mb-2 font-medium">
                Redes Sociais
              </Typography>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-500 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.47.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
                  </svg>
                </a>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* Mapa simulado */}
      <Paper elevation={3} className="mt-8 overflow-hidden">
        <div className="h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <Typography variant="body1" className="text-gray-500 dark:text-gray-300">
            Mapa interativo será carregado aqui (Google Maps/OpenStreetMap)
          </Typography>
        </div>
      </Paper>

      {/* Alerta de sucesso */}
      <Snackbar open={enviado} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" variant="filled">
          Mensagem enviada com sucesso! Retornaremos em breve.
        </Alert>
      </Snackbar>
    </div>
  );
}
