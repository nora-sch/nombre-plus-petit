notes = [12, 4, 7, 18, 1, 14];
function findSmallest(table) {
  // définir une variable vide popour le résultat
  let result;
  // pacourir le tableau avec valeur - clé
  table.forEach((number, key) => {
    // comparer le numero (à partir de deuxième) - 
    // s'il est plus petit que le prècedent,
    // le mettre dans le variable du résultat
    if (key > 0) {
      if (table[key] < table[key - 1]) {
        result = table[key];
      }
    }
  });
  // comparer le premier nombre du tableau avec le résultat
  // s'il est plus petit  - remplacer le valeur du resultat
  if (table[0] < result) {
    result = table[0];
  }
  // returner le nombre plus petit
  return result;
}
console.log(findSmallest(notes));
