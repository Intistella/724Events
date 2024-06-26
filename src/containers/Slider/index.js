import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
// Si la date de l'événement A est supérieur à la date de l'événement B on renvoi 1 ce qui veut dire que l'événement A s'affiche avant l'événement B (code avant new Date(evtA.date) < new Date(evtB.date) ? -1 : 1)
    new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
  );
  const nextCard = () => {
    if (byDateDesc) {
      setTimeout(
// Si l'index actuel est inférieur à la taille du tableau moins 1, on incrémente l'index de 1 (code avant () => setIndex(index < byDateDesc.length ? index + 1 : 0))
        () => setIndex(index < byDateDesc.length-1 ? index + 1 : 0),
        5000
      );
    };
 }
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
// Substitution du fragement par une div et changement de la key pour corriger" index.js:26 Warning: Each child in a list should have a unique "key" prop.                  
        <div key={Math.random()}> 
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
// Changement de la key pour que les boutons radio aient des clés différentes (code avant key:{`${event.id}`})               
                  key={`${radioIdx + 1}`}
                  type="radio"
                  name="radio-button"
// remplacement de idx par index pour que l'index des boutons radio soit mis à jour (code avant checked={idx === radioIdx})                 
                  checked={index === radioIdx}
// La console renvoie un warning pour le checked qui nécessite un OnChange
                  onChange={() => setIndex(radioIdx)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
