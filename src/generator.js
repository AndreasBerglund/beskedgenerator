/**
 * generates birthday greeting from inputs
 * @param {string} name
 * @param {number} age
 * @param {string} memory
 * @returns generated greeting
 */

export const generateGreeting = (name, age, memory) => {
  //happy with or without name sentence
  const happies = [
    `Hej min sødeste ${
      name || genericName()
    }, tillykke med fødselsdagen ${getRandomSetOfEmojis()}!!`,
    `${name || genericName()}, dit gamle røvhul! 🍺 Så blev du sørme gammel.`,
    `${
      name || genericName()
    }, din smukke skabning. 💖 Endnu et år i dit dejlige selskab er gået! 😘`,
    `Kæreste ${
      name || genericName()
    } 🍰, tillykke med dagen idag! Håber du får en herlig og festlig dag 🎉.`,
    `Tillykke med fødselsdagen 🇩🇰🇩🇰🇩🇰`,
    `Kære ${
      name || genericName()
    }. Jeg ønsker dig hjertelig tillykke med fødselsdagen.`,
    `Tillykke med fødselsdagen ${name || genericName()}. `,
    `Stort tillykke med fødselsdagen ${name || genericName()}. ${getRandomSetOfEmojis()}`,
    `Hej ${ name || genericName()} - tillykke med fødselsdagen. ${getRandomSetOfEmojis()}`,
  ];
  const happySentence = happies[getRandomInArray(happies)];

  const agies = [
    `Tillykke med de ${age} år 💪`,
    `${age} somre! Det er flot.`,
    `${age} år! Det klæder dig! 😘`,
    `${age} år er for vild en alder!`,
    `${age} år er ingenting. Det bliver meget værre! 😂😂😂`,
    `Tillykke med de ${age} år. ${getRandomSetOfEmojis()}`,
    `Tillykke med de ${age} år i dag. ${getRandomSetOfEmojis()}`,
    `Stort tillykke med de ${age} år. ${getRandomSetOfEmojis()}`,

  ];
  const ageSentence = agies[getRandomInArray(agies)];

  //memory sentence
  const mem = [
    `Kan du huske dengang med ${memory}? ${getRandomSetOfEmojis()}`,
    `Det var vildt dengang med ${memory} 💪`,
    `Jeg husker tydeligt dengang med ${memory}`,
    `Det var skønne tider da vi lavede det med ${memory} 😍`,
  ];
  const memsentence = memory ? mem[getRandomInArray(mem)] : "";

  return (
    capitalize(happySentence) +
    " " +
    (fiftyFifty() ? getExtraSpice() : "") +
    " " +(age ? ageSentence : "") +
    " " +
    memsentence
  );
};

const getRandomInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

const getRandomSetOfEmojis = () => {
  const set = "🎉🎂🍾😍🥂😄😂😘😍💝💖💕🎈😻🍰🍷🍺💪♥🌷☕️🎂🎁🎁🎁";
  const emojiArray = [...set, "🇩🇰"];
  const length = Math.floor(Math.random() * 5);
  const selectedEmojiArray = [];
  for ( let i = 0; i < length; i++) {
    selectedEmojiArray.push( emojiArray[getRandomInArray(emojiArray)] );
  }
  console.log(selectedEmojiArray)
  return selectedEmojiArray.join("")
}

const genericName = () => {
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
  return names[getRandomInArray(names)];
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

export const getExtraSpice = () => {
  const spice = [
    "Håber du bliver fejret med manér. 🥂😄",
    `Håber du har det godt. ${getRandomSetOfEmojis()}`,
    "Ønsker dig en herlig dag med familien.",
    `Håber du får en dejlig dag. ${getRandomSetOfEmojis()}`,
  ];
  return spice[getRandomInArray(spice)];
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

const fiftyFifty = () => {
  const chance = Math.random();
  return chance > 0.5;
};



// Får du også skriveblokering og præstationsangst når du skal skrive en hilsen til en ven der har fødselsdag?
// Det er slut nu! Jeg har nemlig lavet FØDSELSDAGSBESKEDGENERATOREN™, som genererer de mest originale generiske hilsener der findes!
// Prøv FØDSELSDAGSBESKEDGENERATOREN™ før din fødselsdag.