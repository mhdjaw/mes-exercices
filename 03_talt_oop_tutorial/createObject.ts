function createObject(name: string, description: string, hp: number) {
  const enemy = {
    name,
    description,
    hp,
  };
  return (enemy);
}
export default createObject;
