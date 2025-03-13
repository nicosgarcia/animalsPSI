// Dados dos animais
const animals = [
  {
    name: "Coelho",
    force: "Força de mordida: 20 PSI",
    funFact: "Coelhos possuem a habilidade única de enxergar quase 360 graus ao seu redor, permitindo que detectem predadores de praticamente qualquer direção.",
    image: "",
    imageSize: "20%",
    background: "Assets/animais/Bunnygary-bendig.jpg",
    sound: null,
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Gary Bendig"
  },
  {
    name: "Gato",
    force: "Força de mordida: 70 PSI",
    funFact: "Gatos domésticos podem correr a velocidades de até 48 km/h, tornando-os pequenos felinos extremamente ágeis.",
    image: "",
    imageSize: "auto",
    background: "Assets/animais/Catamigo-eugenito.jpg",
    sound: "sounds/effects/cat.wav",
    ambience: "",
    photoCredit: "Fotografado por: Amigo Eugenito"
  },
  {
    name: "Esquilo",
    force: "Força de mordida: 100 PSI",
    funFact: "Esquilos são conhecidos por esquecerem onde enterraram até 74% de suas nozes, contribuindo inadvertidamente para o plantio de novas árvores.",
    image: "",
    imageSize: "20%",
    background: "Assets/animais/EsquiloShaneYoung.jpg",
    sound: "sounds/effects/squirrel.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Shane Young"
  },
  {
    name: "Cachorro",
    force: "Força de mordida: 230 PSI",
    funFact: "Cães possuem um olfato tão apurado que podem detectar certos tipos de câncer em humanos com uma precisão surpreendente.",
    image: "",
    imageSize: "30%",
    background: "Assets/animais/Dogmark-carlo-allones.jpg",
    sound: "sounds/effects/dog.wav",
    ambience: "",
    photoCredit: "Fotografado por: Mark Carlo Allones"
  },
  {
    name: "Lontra",
    force: "Força de mordida: 300 PSI",
    funFact: "Lontras-marinhas têm uma 'bolsa' de pele debaixo de cada braço onde guardam suas pedras favoritas, usadas para quebrar conchas.",
    image: "",
    imageSize: "30%",
    background: "Assets/animais/Lontrakedar-gadge.jpg",
    sound: "sounds/effects/otter.wav",
    ambience: "sounds/water.wav",
    photoCredit: "Fotografado por: Kedar Gadge | Otters Squeaking.wav by Motion_S"
  },
  {
    name: "Raposa",
    force: "Força de mordida: 400 PSI",
    funFact: "Raposas usam o campo magnético da Terra para caçar, permitindo-lhes pular com precisão sobre presas escondidas sob a neve.",
    image: "",
    imageSize: "35%",
    background: "Assets/animais/Foxray-hennessy.jpg",
    sound: "sounds/effects/fox.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Ray Hennessy"
  },
  {
    name: "Dragão-de-Komodo",
    force: "Força de mordida: 600 PSI",
    funFact: "Dragões-de-Komodo podem consumir até 80% de seu peso corporal em uma única refeição, permitindo-lhes sobreviver semanas sem se alimentar novamente.",
    image: "",
    imageSize: "40%",
    background: "Assets/animais/Komododavid-clode.jpg",
    sound: null,
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: David Clode"
  },
  {
    name: "Leão",
    force: "Força de mordida: 650 PSI",
    funFact: "Leões podem dormir até 20 horas por dia, conservando energia para caçadas intensas durante as horas mais frescas.",
    image: "",
    imageSize: "45%",
    background: "Assets/animais/LionZdenek-Machacek.jpg",
    sound: "sounds/effects/lion.mp3",
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: Zdenek Machacek"
  },
  {
    name: "Puma",
    force: "Força de mordida: 700 PSI",
    funFact: "Pumas são excelentes saltadores, capazes de pular horizontalmente até 12 metros em um único salto.",
    image: "",
    imageSize: "40%",
    background: "Assets/animais/Cougarpriscilla-du-preez.jpg",
    sound: "sounds/effects/cougar.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Priscilla du Preez"
  },
  {
    name: "Urso Negro",
    force: "Força de mordida: 700 PSI",
    funFact: "Ursos negros podem lembrar a localização de fontes de alimento mesmo depois de vários anos, demonstrando uma memória impressionante.",
    image: "",
    imageSize: "50%",
    background: "Assets/animais/BlackBeardanika-perkinson.jpg",
    sound: "sounds/effects/blackbear.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Danika Perkinson"
  },
  {
    name: "Leopardo",
    force: "Força de mordida: 900 PSI",
    funFact: "Leopardos são tão fortes que podem carregar presas três vezes seu peso corporal e subi-las em árvores para evitar outros predadores.",
    image: "",
    imageSize: "30%",
    background: "Assets/animais/Leopardadaivorukamuthan.jpg",
    sound: "sounds/effects/leopard.mp3",
    ambience: "sounds/chuva.wav",
    photoCredit: "Fotografado por: Adaivorukamuthan"
  },
  {
    name: "Rinoceronte-Branco",
    force: "Força de mordida: 1,000 PSI",
    funFact: "Rinocerontes-brancos têm uma pele com até 5 centímetros de espessura, funcionando como uma armadura natural contra predadores.",
    image: "",
    imageSize: "40%",
    background: "Assets/animais/Rhinofiliz-elaerts.jpg",
    sound: null,
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: Filiz Elaerts"
  },
  {
    name: "Tigre",
    force: "Força de mordida: 1,050 PSI",
    funFact: "Cada tigre possui um padrão único de listras, funcionando como uma impressão digital que os diferencia uns dos outros.",
    image: "",
    imageSize: "45%",
    background: "Assets/animais/Tigermiranda-richey.jpg",
    sound: "sounds/effects/tiger.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Miranda Richey"
  },
  {
    name: "Hiena",
    force: "Força de mordida: 1,100 PSI",
    funFact: "Hienas possuem mandíbulas tão poderosas que podem esmagar ossos grossos, permitindo-lhes acessar nutrientes que outros predadores não conseguem.",
    image: "",
    imageSize: "40%",
    background: "Assets/animais/Hienajames-botes.jpg",
    sound: "sounds/effects/hyena.mp3",
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: James Botes"
  },
  {
    name: "Urso Pardo",
    force: "Força de mordida: 1,200 PSI",
    funFact: "Ursos-pardos podem correr a velocidades de até 48 km/h, apesar de seu tamanho maciço, tornando-os corredores surpreendentemente rápidos.",
    image: "",
    imageSize: "50%",
    background: "Assets/animais/GrizzlyJankoFerlic.jpg",
    sound: "sounds/effects/grizzly.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Janko Ferlic"
  },
  {
    name: "Lobo Cinzento",
    force: "Força de mordida: 1,200 PSI",
    funFact: "Lobos cinzentos têm territórios que podem abranger até 2.500 km², demonstrando a vastidão de suas áreas de caça.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/greywolfHansVeth.jpg",
    sound: "sounds/effects/greywolf.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Hans Veth"
  },
  {
    name: "Gorila",
    force: "Força de mordida: 1,300 PSI",
    funFact: "Gorilas compartilham cerca de 98% de seu DNA com humanos, tornando-os um dos parentes vivos mais próximos da nossa espécie.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Goriladaniel-diesenreither.jpg",
    sound: "sounds/effects/gorilla.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Fotografado por: Daniel Diesenreither"
  },
  {
    name: "Jaguar",
    force: "Força de mordida: 1,500 PSI",
    funFact: "Jaguar é o único felino das Américas que gosta de nadar e frequentemente caça dentro d'água, capturando presas como jacarés e peixes.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Jaguarchuttersnap.jpg",
    sound: "sounds/effects/jaguar.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: ""
  },
  {
    name: "Hipopótamo",
    force: "Força de mordida: 1,800 PSI",
    funFact: "Hipopótamos podem dormir debaixo d'água, subindo à superfície para respirar automaticamente sem acordar.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Hipopotamojan-ludwig-tiedemann.jpg",
    sound: "sounds/effects/hippo.mp3",
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: Jan Ludwig Tiedemann"
  },
  {
    name: "Elefante-Africano",
    force: "Força de mordida: 2,000 PSI",
    funFact: "Elefantes-africanos são capazes de se comunicar através de infrassons, sons de baixa frequência que podem percorrer vários quilômetros.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Elefantedavid-clode.jpg",
    sound: "sounds/effects/elephant.mp3",
    ambience: "sounds/savana.flac",
    photoCredit: "Fotografado por: David Clode"
  },
  {
    name: "Jacaré-Açu",
    force: "Força de mordida: 2,000 PSI",
    funFact: "Jacarés-açu podem viver mais de 70 anos, sendo um dos répteis mais longevos da América do Sul.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/jacareacu-nationalgeographic-Stephane-Caut.jpg",
    sound: "sounds/effects/alligator.mp3",
    ambience: "sounds/swamp.mp3",
    photoCredit: "Fotografado por: National Geographic - Stephane Caut"
  },
  {
    name: "Tubarão-Tigre",
    force: "Força de mordida: 3,100 PSI",
    funFact: "Tubarões-tigre são conhecidos como 'lixeiros do mar' devido à sua dieta variada, que inclui desde peixes até objetos inanimados.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Tubaraolaura-college.jpg",
    sound: "",
    ambience: "sounds/underwater.wav",
    photoCredit: "Fotografado por: Laura College"
  },
  {
    name: "Crocodilo-Marinho",
    force: "Força de mordida: 3,700 PSI",
    funFact: "Crocodilos-marinhos podem nadar centenas de quilômetros no oceano aberto, viajando entre ilhas e continentes.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/crocodilo-marinho.jpg",
    sound: "sounds/effects/alligator2.mp3",
    ambience: "sounds/swamp.mp3",
    photoCredit: ""
  },
  {
    name: "Tubarão-Branco",
    force: "Força de mordida: 4,000 PSI",
    funFact: "Tubarões-brancos podem detectar uma gota de sangue em 100 litros de água, evidenciando seu olfato extremamente apurado.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/TubaraoBrancoalex-steyn.jpg",
    sound: "",
    ambience: "sounds/water.wav",
    photoCredit: "Fotografado por: Alex Steyn"
  },
  {
    name: "Crocodilo do Nilo",
    force: "Força de mordida: 5,000 PSI",
    funFact: "Crocodilos do Nilo realizam a 'rotação da morte', girando seus corpos para desmembrar presas maiores em pedaços menores.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/crocodile-do-nilo-ChristoRas.jpg",
    sound: "sounds/effects/crocodile.mp3",
    ambience: "sounds/swamp.mp3",
    photoCredit: "Fotografado por: Christo Ras"
  },
  {
    name: "Espinossauro",
    force: "Força de mordida: 10,000 PSI",
    funFact: "O Espinossauro é considerado o maior dinossauro carnívoro conhecido, superando até mesmo o Tiranossauro Rex em comprimento.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/NathionalGeographic.webp",
    sound: "sounds/effects/spinosaurus.mp3",
    ambience: "sounds/forestAmbiance.wav",
    photoCredit: "Representação por: National Geographic"
  },
  {
    name: "Tiranossauro Rex",
    force: "Força de mordida: 12,800 PSI",
    funFact: "O Tiranossauro Rex possuía dentes de até 30 centímetros de comprimento, capazes de esmagar ossos com facilidade.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/TiranossauroJurassicPark.jpg",
    sound: "sounds/effects/trex.mp3",
    ambience: "sounds/chuva.wav",
    photoCredit: "Representação por: Jurassic Park"
  },
  {
    name: "Mosassauro",
    force: "Força de mordida: 15,000 PSI",
    funFact: "Mosassauros eram répteis marinhos gigantes que podiam atingir até 17 metros de comprimento, dominando os oceanos no período Cretáceo.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/mosasaurus.jpg",
    sound: "",
    ambience: "sounds/underwaterAmbience.wav",
    photoCredit: ""
  },
  {
    name: "Orca",
    force: "Força de mordida: 19,000 PSI",
    funFact: "Orcas são os maiores membros da família dos golfinhos e exibem comportamentos culturais complexos, como técnicas de caça transmitidas entre gerações.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/Orcathomas-lipke.jpg",
    sound: "sounds/effects/orca.mp3",
    ambience: "sounds/water.wav",
    photoCredit: "Fotografado por: Thomas Lipke"
  },
  {
    name: "Megalodon",
    force: "Força de mordida: 40,000 PSI",
    funFact: "O Megalodon, um dos maiores tubarões que já existiu, podia ter dentes de até 18 centímetros de comprimento, refletindo sua dieta de grandes presas marinhas.",
    image: null,
    imageSize: "40%",
    background: "Assets/animais/megalodon2.jpg",
    sound: "",
    ambience: "sounds/underwaterAmbience.wav",
    photoCredit: ""
  },
];

const animalSections = document.getElementById("animal-sections");
let currentSectionIndex = 0;
let currentAmbience = null;
let ambienceSound = null;
let currentAnimalSound = null;

// Função para criar as seções dos animais
function createAnimalSections() {
  animals.forEach((animal, index) => {
    const section = document.createElement("section");
    section.id = `animal-${index}`;
    section.style.backgroundImage = `url('${animal.background}')`;
    section.innerHTML = `
      <div class="animal-info">
        <h1>${animal.name}</h1>
        <h3>${animal.force}</h3>
        <p>${animal.funFact}</p>
      </div>
      ${animal.image ? `<img src="${animal.image}" alt="${animal.name}" class="animal-image" style="width: ${animal.imageSize || '40%'};">` : ''}
      ${animal.photoCredit ? `<p class="photo-credit">${animal.photoCredit}</p>` : ''}
    `;
    animalSections.appendChild(section);
  });
}

// Função para mostrar uma seção específica
function showSection(index) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section, i) => {
    section.classList.toggle("active", i === index);
  });

  // Parar o som do animal anterior, se existir
  if (currentAnimalSound) {
    currentAnimalSound.pause();
    currentAnimalSound = null;
  }

  // Tocar som do animal e som ambiente
  if (index >= 2) {
    const animal = animals[index - 2];

    // Som ambiente
    if (currentAmbience !== animal.ambience) {
      if (ambienceSound) {
        ambienceSound.pause();
      }
      currentAmbience = animal.ambience;
      if (animal.ambience) {
        ambienceSound = new Audio(animal.ambience);
        ambienceSound.id = "ambience-sound";
        ambienceSound.loop = true;
        ambienceSound.play();
      } else {
        ambienceSound = null;
      }
    }

    // Som do animal (se existir)
    if (animal.sound) {
      currentAnimalSound = new Audio(animal.sound);
      currentAnimalSound.play();
    }
  } else {
    // Se for a seção de título ou aviso, parar o som ambiente
    if (ambienceSound) {
      ambienceSound.pause();
      ambienceSound = null;
      currentAmbience = null;
    }
  }
}

// Funções de navegação
function nextSection() {
  currentSectionIndex = (currentSectionIndex + 1) % (animals.length + 2);
  showSection(currentSectionIndex);
}

function prevSection() {
  currentSectionIndex = (currentSectionIndex - 1 + animals.length + 2) % (animals.length + 2);
  showSection(currentSectionIndex);
}

// Inicialização
createAnimalSections();
showSection(0);

// Navegação por teclado
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    nextSection();
  } else if (e.key === "ArrowLeft") {
    prevSection();
  }
});