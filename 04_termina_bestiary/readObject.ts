export interface Monster {
  myname: string,
  hp: number,
  description: string
}
export function readObject(monster: Monster) {
  console.log(`${monster.myname} (${monster.hp}hp): ${monster.description}`);
}
