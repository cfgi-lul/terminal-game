export function mapGenerator(boardComplexity: 0 | 1 | 2 = 1) {
  console.log(123123);
  let mapSectors: 0 | 1[];
  let randomNumber = Math.round(Math.random() * 1000000);
  let mapSize: number = ((boardComplexity + 1) * 4) + (randomNumber > 500000 ? 1 : -1);
  for (let i = 0; i < mapSize; i++) {
    for(let j = 0; j < mapSize; j++){
      console.log(i, j);
    }
  }
}
