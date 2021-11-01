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
    }, tillykke med fødselsdagen 🎁🎁🎁!!`,
    `${name || genericName()}, dit gamle røvhul! 🍺 Så blev du sørme gammel.`,
    `${
      name || genericName()
    }, din smukke skabning. 💖 Endnu et år i dit dejlige selskab er gået! 😘`,
    `Kæreste ${
      name || genericName()
    } 🍰, tillykke med dagen idag! Håber du får en herlig og festlig dag 🎉.`,
    `Huuuurrrra for dig, ${ name || genericName()} 🇩🇰🇩🇰🇩🇰, håber du bliver passet på!`,
    `Hej ${ name || genericName()}, Hest hest hest, idag får du en fest 🎉🎂🍾`,
    `Idag er det ${ name || genericName()}'s fødselsdag, hurra hurra hurraa!`,
  ];
  const happySentence = happies[getRandomInArray(happies)];

  const agies = [
    `Tillykke med de ${age} år 💪`,
    `${age} somre! Det er flot.`,
    `${age} år! Det klæder dig! 😘`,
    `${age} år er for vild en alder!`,
    `${age} år er ingenting. Det bliver meget værre! 😂😂😂`,
  ];
  const ageSentence = agies[getRandomInArray(agies)];

  //memory sentence
  const mem = [
    `Kan du huske dengang med ${memory}?`,
    `Det var vildt dengang med ${memory} 💪`,
    `Jeg husker tydeligt dengang med ${memory}`,
    `Det var skønne tider da vi lavede det med ${memory} 😍`,
  ];
  const memsentence = memory ? mem[getRandomInArray(mem)] : "";

  return (
    capitalize(happySentence) +
    " " +
    (age ? ageSentence : "") +
    " " +
    memsentence
  );
};

//🎉🎂🍾😍😘💝💖😻🍰🍷🍺💪🇩🇰♥

// Får du også skriveblokering og præstationsangst når du skal skrive en hilsen til en ven der har fødselsdag?
// Det er slut nu! Jeg har nemlig lavet FØDSELSDAGSBESKEDGENERATOREN™, som genererer de mest originale generiske hilsener der findes!
// Prøv FØDSELSDAGSBESKEDGENERATOREN™ før din fødselsdag.

const getRandomInArray = (array) => {
  return Math.floor(Math.random() * array.length);
};

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
    "Afsted med den"
  ];
  return check[getRandomInArray(check)];
};

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
