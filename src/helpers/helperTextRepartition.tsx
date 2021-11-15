const MAX_CARAC = 1300;

export const textRepartition = (text: string[], nbSide: number) => {
  let intResult: string[][] = [];
  let nbChara: number[] = [];
  for (let i = 0; i < nbSide; i++) {
    intResult.push([]);
    nbChara.push(0);
  }

  text.forEach((text, index) => {
    console.log(index % nbSide);
    if (intResult[index % nbSide].length < MAX_CARAC) {
      intResult[index % nbSide].push(text);
      nbChara[index % nbSide] += text.length;
    }
  });
  // .concat(area.join(" ‎".repeat(nb_space_arround)))

  let returnArray: string[] = intResult.map((area, index) => {
    let nb_space_arround = (MAX_CARAC - nbChara[index]) / (area.length + 2);
    console.log(nb_space_arround);
    return " ‎ ‎"
      .repeat(Math.random() * nb_space_arround)
      .concat(area.join(" ‎ ‎".repeat(nb_space_arround)))
      .concat(" ‎ ‎".repeat(Math.random() * nb_space_arround));
  });
  return returnArray;
};
