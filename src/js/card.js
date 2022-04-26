export default class Card {
  constructor(card) {
    this.name = card.name;
    this.img = card.img;
    this.type = card.type;
    this.breed = card.breed;
    this.description = card.description;
    this.age = card.age;
    this.inoculations = card.inoculations;
    this.diseases = card.diseases;
    this.parasites = card.parasites;
    this.alt = card.alt;
  }
}
