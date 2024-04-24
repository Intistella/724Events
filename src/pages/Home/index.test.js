/**
* @jest-environment jsdom
*/
import '@testing-library/jest-dom'
import { findByText, fireEvent, getByTestId, getByText, render, screen, waitFor,} from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  beforeEach(() => {
    render(<Home />);
  })
  // Vérifier que la liste des évènements est affichée
  it("a list of events is displayed", async() => {
    expect(getByTestId(document.body, 'eventsList-testid')).toBeInTheDocument();
    waitFor(() => {
      const eventsCards = screen.getAllByTestId('card-testid');
      expect(eventsCards.length).toBe(9);
    })
  })

  // Vérifier que la liste des membres de l'équipe est affichée
  it("a list a people is displayed", () => {
    expect(getByTestId(document.body, 'peopleList-testid')).toBeInTheDocument();
    const peopleCard = screen.getAllByTestId('peopleCard-testid');
    expect(peopleCard.length).toBe(6);
  })

  // Vérifier que le footer est affiché
  it("a footer is displayed", () => {
    expect(getByTestId(document.body, 'footer-testid')).toBeInTheDocument();
  })

  // Vérifier que le dernier évènement est affiché
  it("an event card, with the last event, is displayed", () => {
    expect(getByTestId(document.body, 'lastEventDiv-testid')).toBeInTheDocument();
  })

  // Vérifier que les icônes de réseaux sociaux sont affichées
  it("social media icons are displayed", () => {
    expect(getByTestId(document.body, 'facebook-testid')).toBeInTheDocument();
    expect(getByTestId(document.body, 'twitter-testid')).toBeInTheDocument();
    expect(getByTestId(document.body, 'twitch-testid')).toBeInTheDocument();
    expect(getByTestId(document.body, 'youtube-testid')).toBeInTheDocument();  
  })

// Vérifier que la description de l'agence est affichée  
  it("agency description is displayed", () => {
    expect(getByTestId(document.body, 'agencyDescription-testid')).toBeInTheDocument();
  })
});
