
var lucarna = {
  name: 'Lucarna',
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
  name: 'Janela',
  pivoltante: {
    name: 'Pivoltante',
    description: 'Rotante central no eixo vertical',
  },
  capelinha: {
    name: 'Capelinha',
    description: 'Vidro gradeado',
  },
  infissa: {
    name: 'Ínfissa',
    description: '',
  },
  sanefa: {
    name: 'Sanefa',
    description: '',
  },
  serliana: {
    name: 'Serliana',
    description: '',
  },
  guelfa: {
    name: 'Güelfa',
    description: '',
  },
};

var paramento = {
  name: 'Paramento',
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
    description: 'Relevo vertical sobre o paramento emulando uma pilastra',
  },
};

var recommendedList = document.getElementById('recommendedList');
var elements = [ lucarna, janela, paramento ];

function renderElements () {
  var tempElements = elements;
  for(var i = 0; i < 2; i++) {
    var r = Math.floor(Math.random() * tempElements.length);
    var newRecTitle = document.createElement('div');
    newRecTitle.classList.add('frieze-type');
    newRecTitle.innerHTML = tempElements[r].name;
    recommendedList.appendChild(newRecTitle);

    tellElement(tempElements[r]);
    tempElements.splice(r, 1);
  }
}

function tellElement (item) {
  var newRecList = document.createElement('ul');
  newRecList.classList.add('frieze-list');
  for (var k in item) {
    if(typeof item[k] === 'object'){
      // console.log(`Name: ${item[k].name}\nDescription: ${item[k].description}`);

      var newRecItem = document.createElement('li');
      newRecItem.innerHTML = item[k].name;
      newRecList.appendChild(newRecItem);
    }
  }
  recommendedList.appendChild(newRecList);
}

renderElements();
