/**
 * generates birthday greeting from inputs
 * @param {string} name
 * @param {number} age
 * @param {string} memory
 * @param {boolean} christmas
 * @returns generated greeting
 */

export const generateGreeting = (name, age, memory, christmas) => {
  //happy with or without name sentence
  const happies = [
    `Hej min sødeste ${
      name || genericName(christmas)
    }, tillykke med fødselsdagen ${getRandomSetOfEmojis(christmas)}!!`,
    `${name || genericName()}, dit gamle røvhul! 🍺 Så blev du sørme gammel.`,
    `${
      name || genericName(christmas)
    }, din smukke skabning. 💖 Endnu et år i dit dejlige selskab er gået! 😘`,
    `Kæreste ${
      name || genericName(christmas)
    } 🍰, tillykke med dagen idag! Håber du får en herlig og festlig dag 🎉.`,
    `Tillykke med fødselsdagen 🇩🇰🇩🇰🇩🇰`,
    `Kære ${
      name || genericName(christmas)
    }. Jeg ønsker dig hjertelig tillykke med fødselsdagen.`,
    `Tillykke med fødselsdagen ${name || genericName(christmas)}. `,
    `Stort tillykke med fødselsdagen ${name || genericName(christmas)}. ${getRandomSetOfEmojis(christmas)}`,
    `Hej ${ name || genericName(christmas)} - tillykke med fødselsdagen. ${getRandomSetOfEmojis(christmas)}`,
  ];
  
  const happySentence = christmas ? christmasify(happies[getRandomInArray(happies)]) : happies[getRandomInArray(happies)];
  

  const agies = [
    `Tillykke med de ${age} år 💪`,
    `${age} somre! Det er flot.`,
    `${age} år! Det klæder dig! 😘`,
    `${age} år er for vild en alder!`,
    `${age} år er ingenting. Det bliver meget værre! 😂😂😂`,
    `Tillykke med de ${age} år. ${getRandomSetOfEmojis(christmas)}`,
    `Tillykke med de ${age} år i dag. ${getRandomSetOfEmojis(christmas)}`,
    `Stort tillykke med de ${age} år. ${getRandomSetOfEmojis(christmas)}`,
  ];
  const ageSentence = christmas ? christmasify( agies[getRandomInArray(agies)], true ) : agies[getRandomInArray(agies)];

  //memory sentence
  const mem = [
    `Kan du huske dengang med ${memory}? ${getRandomSetOfEmojis(christmas)}`,
    `Det var vildt dengang med ${memory} 💪`,
    `Jeg husker tydeligt dengang med ${memory}`,
    `Det var skønne tider da vi lavede det med ${memory} 😍`,
  ];
  const memsentence = memory ? mem[getRandomInArray(mem)] : christmas ? mem[getRandomInArray(mem)] : "";

  return (
    capitalize(happySentence) +
    " " +
    (fiftyFifty() ? getExtraSpice(christmas) : "") +
    " " +(age ? ageSentence : "") +
    " " +
    memsentence
  );
};

const getRandomInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const getRandomSetOfEmojis = (christmas) => {
  const set = christmas ? "🎄🎅🎅🤶🎅🏼" : "🎉🎂🍾😍🥂😄😂😘😍💝💖💕🎈😻🍰🍷🍺💪♥🌷☕️🎂🎁🎁🎁";
  
  const emojiArray = [...set, "🇩🇰"];
  const length = Math.floor(Math.random() * 7);
  const selectedEmojiArray = [];
  for ( let i = 0; i < length; i++) {
    selectedEmojiArray.push( emojiArray[getRandomInArray(emojiArray)] );
  }
  
  return selectedEmojiArray.join("")
}

const genericName = (christmas) => {
  const names = [
    "søtte",
    "ven",
    "bedste ven",
    "kæreste ven",
    "smukke",
    "lækre",
    "hotpants",
    "snuske",
    "basse",
    "bae",
    "nussi",
    "honey",
    "prinsesse honningblomst"
  ];
  return christmas ? "Juleven" : names[getRandomInArray(names)];
};

export const getRandomCheckText = () => {
  const check = [
    "Modtaget!",
    "Check!",
    "Yessir!",
    "Du har den!",
    "Klaret!",
    "Smukt!",
    "Afsted med den",
  ];
  return check[getRandomInArray(check)];
};

export const getExtraSpice = (christmas) => {
  const spice = [
    "Håber du bliver fejret med manér. 🥂😄",
    `Håber du har det godt. ${getRandomSetOfEmojis()}`,
    "Ønsker dig en herlig dag med familien.",
    `Håber du får en dejlig dag. ${getRandomSetOfEmojis()}`,
  ];
  return christmas ? christmasify( spice[getRandomInArray(spice)], true ) :  spice[getRandomInArray(spice)];
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const fiftyFifty = () => {
  const chance = Math.random();
  return chance > 0.5;
};

const christmasify = (sentence, atJesus) => {
  let christmassed = sentence;
  if ( atJesus) {
    christmassed = christmassed.replace("dig", "JESUS");
    christmassed = christmassed.replace("tillykke", "tillykke til JESUS");
    christmassed = christmassed.replace("Tillykke", "Tillykke til JESUS");
    christmassed = christmassed.replace("du", "JESUS");
  } else {
    christmassed = sentence.replace("fødselsdagen", "JUL");
    christmassed = christmassed.replace(" dagen", "JUL");
    christmassed = christmassed.replace("tillykke med", "glædelig");
    christmassed = christmassed.replace("Tillykke med", "glædelig");
    christmassed = christmassed.replace(" dag", " JUL ");
    // christmassed = christmassed.replace("du", "JESUS");
    christmassed = christmassed.replace(" tillykke ", "Glædelig jul");
    christmassed = christmassed.replace(" Tillykke ", "Glædelig jul");
  }
  return christmassed;
}

// Får du også skriveblokering og præstationsangst når du skal skrive en hilsen til en ven der har fødselsdag?
// Det er slut nu! Jeg har nemlig lavet FØDSELSDAGSBESKEDGENERATOREN™, som genererer de mest originale generiske hilsener der findes!
// Prøv FØDSELSDAGSBESKEDGENERATOREN™ før din fødselsdag.