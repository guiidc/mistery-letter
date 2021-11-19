const cardContent = document.getElementById('carta-gerada');

function selectClass(classList) {
  const index = Math.floor(Math.random() * (classList.length));
  return classList[index];
}

function insertClass() {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotationGroup = ['rotateleft', 'rotateright'];
  const inclinationGroup = ['skewleft', 'skewright'];

  const selectedStyle = selectClass(styleGroup);
  const selectedSize = selectClass(sizeGroup);
  const selectedRotation = selectClass(rotationGroup);
  const selectedInclination = selectClass(inclinationGroup);
  return `${selectedStyle} ${selectedSize} ${selectedRotation} ${selectedInclination}`;
}

function generateCard() {
  const input = document.getElementById('carta-texto');
  const splitedString = input.value.trim().split(' ');
  // const cardContent = document.getElementById('carta-gerada');
  cardContent.innerHTML = '';
  for (let i = 0; i < splitedString.length; i += 1) {
    const span = document.createElement('span');
    span.className = insertClass();
    span.innerHTML = splitedString[i];
    cardContent.appendChild(span);
  }
}

function wordCounter() {
  const counter = document.getElementById('carta-contador');
  // const generatedCard = document.getElementById('carta-gerada');
  counter.innerHTML = cardContent.children.length;
}

const generateBtn = document.getElementById('criar-carta');
generateBtn.addEventListener('click', () => {
  const input = document.getElementById('carta-texto');
  // const cardContent = document.getElementById('carta-gerada');
  if (input.value.trim() === '') {
    cardContent.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  generateCard();
  wordCounter();
});
