import Card from './card';

export default class CardsModel {
  constructor() {
    this.page = 0;
    this.data = [
      {
        name: 'Jennifer',
        img: 'jennifer.png',
        type: 'Dog',
        breed: 'Labrador',
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: '2 months',
        inoculations: [
          'none',
        ],
        diseases: [
          'none',
        ],
        parasites: [
          'none',
        ],
        alt: 'White small dog with yellow ears and black eyes',
      },
      {
        name: 'Sophia',
        img: 'sophia.png',
        type: 'Dog',
        breed: 'Shih tzu',
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: '1 month',
        inoculations: [
          'parvovirus',
        ],
        diseases: [
          'none',
        ],
        parasites: [
          'none',
        ],
        alt: 'White small dog with black ears on hand',
      },
      {
        name: 'Woody',
        img: 'woody.png',
        type: 'Dog',
        breed: 'Golden Retriever',
        description: 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.',
        age: '3 years 6 months',
        inoculations: [
          'adenovirus',
          'distemper',
        ],
        diseases: [
          'right back leg mobility reduced',
        ],
        parasites: [
          'none',
        ],
        alt: 'Yellow medium dog',
      },
      {
        name: 'Scarlett',
        img: 'scarlett.png',
        type: 'Dog',
        breed: 'Jack Russell Terrier',
        description: 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.',
        age: '3 months',
        inoculations: [
          'parainfluenza',
        ],
        diseases: [
          'none',
        ],
        parasites: [
          'none',
        ],
        alt: 'White small dog with yellow ears',
      },
      {
        name: 'Katrine',
        img: 'katrine.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.',
        age: '6 months',
        inoculations: [
          'panleukopenia',
        ],
        diseases: [
          'none',
        ],
        parasites: [
          'none',
        ],
        alt: 'Grey cat with black eyes',
      },
      {
        name: 'Timmy',
        img: 'timmy.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.',
        age: '2 years 3 months',
        inoculations: [
          'calicivirus',
          'viral rhinotracheitis',
        ],
        diseases: [
          'kidney stones',
        ],
        parasites: [
          'none',
        ],
        alt: 'Grey cat',
      },
      {
        name: 'Freddie',
        img: 'freddie.png',
        type: 'Cat',
        breed: 'British Shorthair',
        description: 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.',
        age: '2 months',
        inoculations: [
          'rabies',
        ],
        diseases: [
          'none',
        ],
        parasites: [
          'none',
        ],
        alt: 'Grey cat',
      },
      {
        name: 'Charly',
        img: 'charly.png',
        type: 'Dog',
        breed: 'Jack Russell Terrier',
        description: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        age: '8 years',
        inoculations: [
          'bordetella bronchiseptica',
          'leptospirosis',
        ],
        diseases: [
          'deafness',
          'blindness',
        ],
        parasites: [
          'lice',
          'fleas',
        ],
        alt: 'White dog lies',
      },
    ];
  }

  load() {
    this.data = this.data.map((item) => new Card(item));
  }

  setRandomData(itemsCount, pagesCount) {
    this.randomData = [];
    for (let i = 0; i < pagesCount; i += 1) {
      this.randomData.push([]);
      for (let j = 0; j < itemsCount; j += 1) {
        let rand = this.getRandomNumber(7);
        while (this.randomData[i].includes(this.data[rand]) || (i >= 1 && this.randomData[i - 1].includes(this.data[rand]))) {
          rand = this.getRandomNumber(7);
        }
        this.randomData[i].push(this.data[rand]);
      }
    }
  }

  setRandomPaginationData(itemsCount, pagesCount) {
    this.randomData = [];
    for (let i = 0; i < pagesCount; i += 1) {
      this.randomData.push([]);
      for (let j = 0; j < itemsCount; j += 1) {
        this.randomData[i].push(this.data[(i * itemsCount + j) % this.data.length]);
      }
    }
    for (let i = 0; i < pagesCount; i += 1) {
      let currentIndex = this.randomData[i].length;
      let randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [this.randomData[i][currentIndex], this.randomData[i][randomIndex]] = [
          this.randomData[i][randomIndex], this.randomData[i][currentIndex]];
      }
    }
    let currentIndex = this.randomData.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [this.randomData[currentIndex], this.randomData[randomIndex]] = [
        this.randomData[randomIndex], this.randomData[currentIndex]];
    }
  }

  setNewItems(cur, itemsCount) {
    const randomData = [];
    for (let i = 0; i < itemsCount; i += 1) {
      let rand = this.getRandomNumber(7);
      while (cur.includes(this.data[rand]) || randomData.includes(this.data[rand])) {
        rand = this.getRandomNumber(7);
      }
      randomData.push(this.data[rand]);
    }
    return randomData;
  }

  getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  setPage(page) {
    this.page = page;
    this.onUpdate(page);
  }

  getPage() {
    return this.page;
  }

  getPagesCount() {
    return this.pagesCount;
  }
}
