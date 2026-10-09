# Votação dos bichinhos

Abra `index.html` no navegador. Não é necessário instalar nada, usar servidor ou ter internet.

- `index.html`: conteúdo da página.
- `style.css`: cores, tamanhos e layout.
- `script.js`: votação e agradecimento.
- `imagens/`: fotos dos animais e logo da escola.

As crianças votam no mesmo aparelho. Depois de cada voto, clique em **VOTAR NOVAMENTE**.

Os totais ficam no armazenamento local do navegador, na chave `ecoescola-votos-pelucia-v1`. Não são sincronizados entre aparelhos. Use sempre o mesmo navegador e caminho do arquivo; limpar os dados do navegador apaga os votos. Alguns navegadores bloqueiam o armazenamento de páginas abertas como arquivo: nesse caso, a página mostra uma mensagem e não confirma o voto.

Para consultar os totais, abra o console do navegador (F12) e execute:

```js
JSON.parse(localStorage.getItem("ecoescola-votos-pelucia-v1"))
```

As fotos têm seus créditos em `imagens/creditos.md`. A logo foi obtida de https://eml.com.br/wp-content/uploads/2025/05/logo.svg.

A pasta `votacao/` contém a versão anterior. Ela não é necessária para usar esta versão simples.
