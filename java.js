const botaoNao = document.getElementById('nao');

botaoNao.addEventListener('click', () => {
  botaoNao.classList.add('mudando');
  setTimeout(() => {
    botaoNao.classList.remove('mudando');
  }, 2000);
});

const botaoSim = document.getElementById('sim');

botaoSim.addEventListener('click', () => {
  window.location.href = 'https://www.youtube.com/shorts/h3l7FqfEpBA';
});
