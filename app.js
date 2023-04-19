notes = [12, 4, 7, 18, 1, 14];

function findSmallest(table) {
  // définir une variable vide pour le résultat
  let result;
  // pacourir le tableau avec valeur - clé
  table.forEach((number, key) => {
    // mettre le premier numèro dans le resultat
    if (key === 0) {
      result = table[key];
    } else {
    // comparer le resultat avec des autres numèros
    // s'il est plus grand - remplacer le valeur du resultat 
    // par le numèro iteré actuellement
      if (result > number) {
        result = number;
      }
    }
  });
  // returner le nombre plus petit
  return result;
}
// afficher le resultat
console.log(findSmallest(notes));
