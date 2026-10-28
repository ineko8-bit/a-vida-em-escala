// Conteúdo dos botões da seção “Escalas da vida”.
const scales = [
  ['Informação que atravessa gerações', 'O DNA armazena informação genética. Sua organização e expressão participam dos processos que conectam a atividade celular à diversidade dos organismos.'],
  ['A unidade fundamental da vida', 'As células realizam trocas de matéria e energia com o ambiente. Nos organismos multicelulares, diferentes tipos celulares atuam de forma coordenada.'],
  ['Um todo feito de relações', 'Um organismo depende da integração de suas funções e de suas relações com outros seres vivos, incluindo microrganismos que participam de sua saúde.'],
  ['Redes que sustentam a diversidade', 'Nos ecossistemas, os seres vivos interagem entre si e com os fatores físicos do ambiente. Essas relações participam dos fluxos de energia e dos ciclos de nutrientes.']
];
document.querySelectorAll('[data-scale]').forEach(button => {
  button.addEventListener('click', () => {
    const index = Number(button.dataset.scale);
    document.querySelectorAll('[data-scale]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.getElementById('scale-number').textContent = `${String(index + 1).padStart(2, '0')} / 04`;
    document.getElementById('scale-title').textContent = scales[index][0];
    document.getElementById('scale-text').textContent = scales[index][1];
  });
});
