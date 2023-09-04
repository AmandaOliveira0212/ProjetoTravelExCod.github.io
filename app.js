const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const sql = require('mssql');
const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

//DATABASE CONNECTION
const config = {
  user: "dev-amanda",
  password: "15975385Am@",
  server: "dev-amanda.database.windows.net",
  database: "TravelEx",
  options: {
    encrypt: true,
  },
};

//MSG ERROR
sql.connect(config)
  .then(() => {
    console.log("Conectado ao banco de dados!");

  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados: " + err);
  });



  
// Serve arquivos estáticos da pasta "projeto"
app.use(express.static(path.join(__dirname)));

// Rota para servir o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para servir o arquivo anuncio.html
app.get('/page-anc/anuncio', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-anc', 'anuncio.html'));
});

// Rota para servir o arquivo comentarios.html
app.get('/page-cmt/comentarios.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-cmt', 'comentarios.html'));
});

// Rota para servir o arquivo relatorios.html
app.get('/page-rlt/relatorios', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-rlt', 'relatorios.html'));
});

// Rota para servir o arquivo perfil.html
app.get('/page-pfl/perfil', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-pfl', 'perfil.html'));
});

// Rota para servir o arquivo agenda.html
app.get('/page-ger-agd/agenda', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-ger-agd', 'agenda.html'));
});

// Rota para servir o arquivo gerenciar anuncio.html
app.get('/page-ger-anc/geranuncio', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-ger-anc', 'geranuncio.html'));
});

// Rota para servir o arquivo gerenciar pagamentos.html
app.get('/page-ger-pag/pagamentos', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-ger-pag', 'pagamentos.html'));
});

// Rota para servir o arquivo gerenciar viajantes.html
app.get('/page-ger-vj/viajantes', (req, res) => {
  res.sendFile(path.join(__dirname, 'page-ger-vj', 'viajantes.html'));
});





app.post('/enviar-dados', async (req, res) => {
  const dadosRecebidos = req.body;
  console.log('entrei 1')

  try {
    const pool = await sql.connect(config);

    await pool.request()
      .input('titulo', sql.NVarChar, dadosRecebidos.titulo)
      .input('partida', sql.NVarChar, dadosRecebidos.partida)
      .input('destino', sql.NVarChar, dadosRecebidos.destino)
      .input('ida', sql.Date, new Date(dadosRecebidos.ida))
      .input('volta', sql.Date, new Date(dadosRecebidos.volta))
      .input('vagas', sql.Int, dadosRecebidos.vagas)
      .input('detalhes', sql.NVarChar, dadosRecebidos.detalhes)
      .input('image', sql.VarBinary, dadosRecebidos.image)
      .query(`
        INSERT INTO ANUNCIO (TITULO_VIAGEM, LOCAL_PARTIDA, LOCAL_DESTINO, DATA_IDA, DATA_VOLTA, TOTAL_VAGAS, DETALHES_VIAGEM, IMAGES)
        VALUES (@titulo, @partida, @destino, @ida, @volta, @vagas, @detalhes, @image)
      `);

    res.send('Dados da viagem inseridos no banco de dados');
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados', error);
    res.status(500).send('Erro ao inserir dados no banco de dados');
  }
});



app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
