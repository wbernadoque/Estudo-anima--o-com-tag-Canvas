let ultimoScroll = 0;

const canvas = document.getElementById('imagem');

const frames = 21;
const frameAtual = (index) => `./img/${(index + 1).toString()}.jpeg`;
const imagens = [];
const eu = {
  frame: 0,
};

for (let i = 0; i <= frames; i++) {
  const img = new Image();
  img.src = frameAtual(i);
  imagens.push(img);
}
console.log(imagens);
document.addEventListener('scroll', (event) => {
  const context = canvas.getContext('2d');
  canvas.width = 768;
  canvas.height = 1024;
  var scroll = window.pageYOffset;
  if (scroll > ultimoScroll) {
    context.clearRect(0, 0, canvas.width, canvas.heigth);
    context.drawImage(imagens[eu.frame], 0, 0);
    let atual = eu.frame + 1;
    eu.frame = atual;
  } else {
    context.drawImage(imagens[eu.frame], 0, 0);
    let atual = eu.frame - 1;
    eu.frame = atual;
  }
  if (eu.frame >= 21) {
    eu.frame = 21;
  } else if (eu.frame <= 0) {
    eu.frame = 0;
  }
  console.log(eu.frame);
  ultimoScroll = scroll;
});
