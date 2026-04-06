import express from 'express';
import cors from 'cors';
import conteudos from './conteudos.js';

//Criando o servidor
const servidor = express();

//Configurações do servidor
servidor.use(cors());
servidor.use(express.json());

//Rotas do servidor 
servidor.get('/api', (req, res) => {
  res.status(200).json(conteudos); //Retorna a lista de conteúdos convertida para JSON
});

//Rota para lidar com rotas não encontradas
servidor.use((req, res) => { 
  res.status(404).json({ erro: "Página não encontrada" }); //Retorna um erro 404 para rotas não encontradas
});
``

//Iniciando o servidor
const PORTA = 4000;
servidor.listen(PORTA, () => {
  console.log('Servidor rodando');
});