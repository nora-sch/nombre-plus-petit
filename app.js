notes = [12, 4, 7, 18, 1, 14];

function findSmallest(table) {
  // définir une variable pour le résultat qui a le valeur de premier numèro de la table
  let result =   table[0];
  // pacourir le tableau avec valeur - clé
  table.forEach((number, key) => {
    // comparer le resultat actuel avec des autres numèros
    // s'il est plus grand - remplacer le valeur du resultat 
    // par le numèro iteré actuellement
      if (result > number) {
        result = number;
      }
  });
  // returner le nombre plus petit
  return result;
}
// afficher le resultat
console.log(findSmallest(notes));





