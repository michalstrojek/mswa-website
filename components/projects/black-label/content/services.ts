export type Service = {
  name: string;
  duration: string;
  price: string;
  description?: string;
};

export const services: Service[] = [
  {
    name: "Classic Cut",
    duration: "45 min",
    price: "120 PLN",
    description: "Struktura, proporcje i precyzyjne wykończenie.",
  },
  {
    name: "Beard Sculpt",
    duration: "30 min",
    price: "80 PLN",
    description: "Kontur brody, linia i detale ostrza.",
  },
  {
    name: "Black Label Experience",
    duration: "75 min",
    price: "180 PLN",
    description: "Cięcie, broda, rytuał hot towel i finalne detale.",
  },
  {
    name: "Head Shave",
    duration: "40 min",
    price: "100 PLN",
    description: "Golenie głowy z ciepłym ręcznikiem i pielęgnacją.",
  },
  {
    name: "Junior Cut",
    duration: "30 min",
    price: "70 PLN",
    description: "Cięcie dla młodszych klientów — spokojnie i czytelnie.",
  },
];
