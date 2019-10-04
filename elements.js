
var lucarna = {
  pavilha: {
    name: 'Pavilhã',
    description: 'Formato de pavilhão',
  },
  gable: {
    name: 'Gable',
    description: 'Lucarna com um gable de fachada',
  },
  jacobina: {
    name: 'Jacobina',
    description: 'Lucarna Jacobina',
  },
  frontao: {
    name: 'Lucarna a Frontão',
    description: 'Lucarna frontão',
  },
  capuscina: {
    name: 'Capuscina',
    description: 'Lucarna de Chapéu',
  },
};

var janela = {
  pivoltante: {
    name: 'Pivoltante',
    description: 'Rotante central no eixo vertical',
  },
  capelinha: {
    name: 'Capelinha',
    description: 'Vidro gradeado',
  },
};

var paramento = {
  lambril: {
    name: 'Lambril',
    description: 'Apainelamento de madeira sobre o paramento',
  },
  silharda: {
    name: 'Silharda',
    description: 'Simulação de uma aparelhação de blocos sobre o paramento',
  },
  lesena: {
    name: 'Lesena',
    description: 'Relevo vertical sobre o paramento emulando uma coluna',
  },
};

var elements = [ lucarna, janela, paramento ];

function renderElements () {
  var tempElements = elements;
  for(var i = 0; i < 2; i++) {
    var r = Math.floor(Math.random() * tempElements.length);
    tellElement(tempElements[r]);
    tempElements.splice(r, 1);
  }
}

function tellElement (item) {
  for (var k in item) {
    console.log(`Name: ${item[k].name}\nDescription: ${item[k].description}`);
  }
}

renderElements();
