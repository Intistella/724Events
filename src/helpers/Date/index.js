export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};
// Modification de l'indice de l'objet MONTHS pour qu'il commence à 1 (code avant export const getMonth = (date) => MONTHS[date.getMonth()])
export const getMonth = (date) => MONTHS[date.getMonth()+1];
