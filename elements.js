
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
    name: 'Serliana/Paladiana',
    description: '',
  },
  guelfa: {
    name: 'Güelfa',
    description: '',
  },
  lintel: {
    name: 'Lintel',
    description: '',
  },
  oriel: {
    name: 'Oriel',
    description: '',
  },
  monofora: {
    name: 'Monófora',
    description: '',
  },
  vazista: {
    name: 'Vazista/Bovenlute',
    description: '',
  },
  antoes: {
    name: 'Antões',
    description: '',
  },
  jaluzea: {
    name: 'Jalúsea',
    description: '',
  },
  veisterkassiense: {
    name: 'Casciêna',
    description: '',
  },
  lancette: {
    name: 'Lanceta',
    description: 'Uma janela lanceta é uma janela alta e estreita com um arco pontudo no topo.',
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
    description: 'Aparelhação de blocos sobre o paramento',
  },
  bugnato: {
    name: 'Bunhato/Rústico',
    description: 'Aparelhamento de pedras com relevo rústico para construção d\'um paramento',
  },
  lesena: {
    name: 'Lesena',
    description: 'Relevo vertical sobre o paramento emulando uma pilastra',
  },
  boaseri: {
    name: 'Boaserí',
    description: '',
  },
  alegio: {
    name: 'Alégio',
    description: '',
  },
  chainage: {
    name: 'Chainagem',
    description: '',
  },
  bardeau: {
    name: 'Pisarilha/Teroela',
    description: '',
  },
  bardeau: {
    name: 'Moulura',
    description: 'Elemento símil á cimalha e ao plínto, porém n\'outras áreas d\'uma parede.'
  },
  lignederefend: {
    name: 'Refante/Tosque/Crósa',
    description: 'Linha vertical ou horizontal escavada sobre o reboco do paramento de maneira para simular uma silharda.',
  },
};
var miscelaneo = {
  name: 'Miscelâneo',
  lambril: {
    name: 'Guilhoche',
    description: '',
  },
  chanfre: {
    name: 'Chanfre',
    description: '',
  },
  tungewelf: {
    name: 'Abóbada de Berço/Tonguivél',
    description: '',
  },
  vermiculure: {
    name: 'Vermiculira',
    description: '',
  },
  torchis: {
    name: 'Torchíse/Pau-a-Pique',
    description: '',
  },
  stuc: {
    name: 'Estuque',
    description: '',
  },
  gypserie: {
    name: 'Gipsería',
    description: '',
  },
  baldachin: {
    name: 'Baldaquino',
    description: '',
  },
  enfeu: {
    name: 'Enféu',
    description: '',
  },
  fenetrage: {
    name: 'Finestral/Finestrada',
    description: '',
  },
  fronstispicio: {
    name: 'Frontispício',
    description: 'Se refere ao elementos arquitetônicos que compõem a fachada de um edifício.',
  },
  geminal: {
    name: 'Geminal',
    description: 'Se refere aos elementos arquitetônicos que dispõem-se lado à lado destes, sem entrar directamente em contacto um com o outro.',
  },
  guillochis: {
    name: 'Guilochís',
    description: 'Motífe ornamental de ondulações produzidas sobre o vidro, ou material símio.',
  },
};
var porta = {
  name: 'Porta',
  lambril: {
    name: 'Rastrilho/Hersa',
    description: 'Porta de grade quadriculada',
  },
  chanfre: {
    name: 'Chambranle',
    description: '',
  },
  volet: {
    name: 'Volê/Blaffetur',
    description: '',
  },
  vertevelle: {
    name: 'Verterela',
    description: 'Fechadura horizontal da Era Gótica',
  },
  vantail: {
    name: 'Vantalhe',
    description: 'Painel duplo, pivoltante em dobradiças',
  },
  ferronerie: {
    name: 'Ferroneira',
    description: 'Técnica de elementos arquitetônicos modelada a partir da forja do ferro',
  },
};
var estanca = {
  name: 'Estança',
  belver: {
    name: 'Belver',
    description: '',
  },
  pergola: {
    name: 'Pérgola',
    description: '',
  },
  orangerie: {
    name: 'Orangeria/Cidrala',
    description: '',
  },
  aubette: {
    name: 'Aubete',
    description: 'Pequena estança exterior destinada a baluarte dos usuários de transporte público rodoviário, esperando seu respectivo veículo (ônibus, táxi)',
  },
  exedra: {
    name: 'Êxedra',
    description: 'Átrio semicircular com assentos cobertos ou expostos ao ar livre, que serviam como local para discussões intelectuais.',
  },
  capricho: {
    name: 'Caprichol/Folly',
    description: '',
  },
  fuste: {
    name: 'Fuste',
    description: 'Tipo de chalé dos alpes franceses',
  },
  quiosque: {
    name: 'Quiosque',
    description: 'Construção urbana comercial isolada geminalmente de outros edifícios(pavilhão), costumamente feita sobre a calçada.',
  },
  linterneau: {
    name: 'Linternel',
    description: 'Estança poligonal, usualmente logial, construída sobre a cúpula de algum edifício.',
  },
  gazebo: {
    name: 'Gazebo',
    description: 'Gazebo',
  },
  periptero: {
    name: 'Períptero/Periptério',
    description: 'Um edifício que é construído rodeado de colunas, criando um perístilo exterior.',
  },
};
var exterior = {
  name: 'Exterior',
  cachepo: {
    name: 'Cachepô',
    description: 'Plantas suspensas',
  },
  decalque: {
    name: 'Decalque/Vetrofânia',
    description: '',
  },
  devanture: {
    name: 'Devantura',
    description: '',
  },
  escarpe: {
    name: 'Escarpa',
    description: '',
  },
  horloge: {
    name: 'Horloguo',
    description: 'Relógio posto dentro de aubetes ou em torres, igrejas, para publicamente mostrar as horas ao povo percorrendo à sua frente',
  },
  lice: {
    name: 'Líce/Lís',
    description: 'Paliçada no entorno de uma fortificação ou estádio.',
  },
};
var chao = {
  name: 'Chão',
  betonilha: {
    name: 'Betonilha',
    description: '',
  },
};
var remate = {
  name: 'Remate',
  cimalha: {
    name: 'Cimalha',
    description: '',
  },
  tecto: {
    name: 'Tecto',
    description: '',
  },
  cornija: {
    name: 'Cornija',
    description: '',
  },
  lambrequim: {
    name: 'Lambrequim',
    description: 'Retalhe de madeira usualmente sobposto abaixo do remate d\'um beiral.',
  },
  dentil: {
    name: 'Dentículo',
    description: '',
  },
  modilhao: {
    name: 'Modilhão',
    description: '',
  },
  misula: {
    name: 'Mísula/Corbel',
    description: '',
  },
  sofite: {
    name: 'Sofite',
    description: '',
  },
  gelosia: {
    name: 'Gelosia',
    description: '',
  },
  fascia: {
    name: 'Fáscia',
    description: '',
  },
  estantat: {
    name: 'Estantate',
    description: '',
  },
};
var luz = {
  name: 'Iluminação',
  arandela: {
    name: 'Arandela',
    description: '',
  },
  candeeiro: {
    name: 'Candeeiro',
    description: '',
  },
  reverbel: {
    name: 'Reverbél',
    description: '',
  },
  lustre: {
    name: 'Lustre',
    description: '',
  },
  lampiao: {
    name: 'Lampião',
    description: '',
  },
};
var telhado = {
  name: 'Telhado',
  mansarda: {
    name: 'Mansarda',
    description: '',
  },
  lucarna: {
    name: 'Lucarna/Abaino',
    description: '',
  },
  beiral: {
    name: 'Beiral',
    description: '',
  },
  crope: {
    name: 'Crópe',
    description: '',
  },
  coyel: {
    name: 'Coyel',
    description: '',
  },
  verriere: {
    name: 'Claravóia/Lucerna',
    description: '',
  },
};

var recommendedList = document.getElementById('recommendedList');
var elements = [ lucarna, janela, paramento, miscelaneo, porta, estanca, exterior, chao, remate, luz, telhado ];

function renderElements () {
  var tempElements = elements;
  for(var i = 0; i < 6; i++) {
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
      var newRecItem = document.createElement('li');
      newRecItem.innerHTML = item[k].name;
      newRecItem.setAttribute("description", item[k].description);
      newRecList.appendChild(newRecItem);
    }
  }
  recommendedList.appendChild(newRecList);
}

renderElements();
