class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = null;
  }

  fix() {
    this.state * 1.5;
    return this.state;
  }

  set bookStatus(amount) {
    if (amount >= 100) {
      this.state = 100;
      return this.state;
    } else if (amount <= 0) {
      this.state = 0;
      return this.state;
    }
    else {
      this.state = amount;
      return this.state;
    }
  }

  get bookStatus() {
    return this.state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = "magazine") {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = "book") {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "novel") {
    super(author, name, releaseDate, pagesCount, state)
    this.type = type;
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "fantastic") {
    super(author, name, releaseDate, pagesCount, state)
    this.type = type;
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = "detective") {
    super(author, name, releaseDate, pagesCount, state)
    this.type = type;
  }
};

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } else {
      return;
    }
  };

  findBookBy(_type, value) {
    const findBook = this.books.find(item => item[_type] === value);
    if (findBook !== undefined) {
      return findBook
    } else {
      return null;
    }
  }

  giveBookByName(bookName) {
    const giveBook = this.books.findIndex(item => item.name === bookName);
    if (giveBook !== -1) {
      const bookInd = this.books[giveBook];
      this.books.splice(bookInd, 1);
      return bookInd;
    } else {
      return null;
    }
  }
};

//_____________________________________Задание____________________________________________//


const library = new Library("Библиатека имени В.И.Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log("-----------------------------------------------------------------")
console.log(library.books);
library.findBookBy('pagesCount', 138);
library.giveBookByName('Пикник на обочине');
console.log(library.books);