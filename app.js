notes = [12, 4, 7, 18, 1, 14];

function findSmallest(array) {
  // définir une variable pour le résultat qui a le valeur de premier numèro de la tableau
  let result = array[0];
  // pacourir le tableau avec valeur
  array.forEach((number) => {
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

function sortNumbers(array) {
  // faire une copie de tableau pour pouvoir enlever des numèros plus petits
  let copyOfArray = array;
  // définir un tableau vide pour stocker des numeros triés
  let sortedNumbers = [];
  let iterations = array.length;
  for (let i = 0; i < iterations; i++) {
    // initialiser et attribuer un valeur à un varible pour le valeur plus petit trouvé
    let smallest = findSmallest(copyOfArray);
    // mettre ce valeur dans le tableau de resultat
    sortedNumbers.push(smallest);
    // suprimer cette valeur de la copie de tableau pour pouvoir le parcourir encore une fois
    // depuis la fonction findSmpallest sans les numéros déjà trouvés
    copyOfArray.splice(copyOfArray.indexOf(smallest), 1);
  }
  // retourner un tableau trié
  return sortedNumbers;
}
// afficher le résultat
console.log(sortNumbers(notes));
