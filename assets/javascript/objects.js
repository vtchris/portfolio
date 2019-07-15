const PROJECTS = [];

PROJECTS.push(new Project(
    "Grub Whiz",
    "This resturant finding application uses APIs and was developed using agile methodology during a two week period on a team of four.",
    "GrubWiz.jpg",
    "Grub Whiz Restuarant Finder",
    "https://github.com/vtchris/project1",
    "https://vtchris.github.io/project1/"
));
PROJECTS.push(new Project(
    "Rock Paper Scissors",
    "Multi-player Rock Paper Scissors game built with JavaScript and Firebase Database.",
    "rps.jpg",
    "Rock Paper Scissors",
    "https://github.com/vtchris/RPS-Multiplayer",
    "https://vtchris.github.io/RPS-Multiplayer/"
));
PROJECTS.push(new Project(
    "Sentenced: Trivia Game",
    "JavaScript bookish trivia game in which you guess the book from it's first sentence, game.",
    "sentenced.jpeg",
    "Sentenced Trivia Game",
    "https://github.com/vtchris/TriviaGame",
    "https://vtchris.github.io/TriviaGame/"
));
PROJECTS.push(new Project(
    "Tip-4-Tat",
    "Tip Calculator, this was my submission to a coding challenge from Career Services. My entry allowed for user specified rounding options, which are stored locally for future use, as well as a joke provided via API as a way to end a meal out on a light note!",
    "tip.jpg",
    "Tip-4-Tat Tip Calculator",
    "https://github.com/vtchris/tipCalculator",
    "https://vtchris.github.io/tipCalculator/"
));
PROJECTS.push(new Project(
    "X-Men RPG Game",
    "JavaScript role-playing game based on the X-Men, utilizing jQuery for DOM interactions.",
    "x.jpg",
    "X-Men Role Playing Game",
    "https://github.com/vtchris/unit-4-game",
    "https://vtchris.github.io/unit-4-game/"
));
PROJECTS.push(new Project(
    "Giffy Gallery",
    "JavaScript application using an API to display giffs which can be played and paused via clicking.",
    "gallery.jpg",
    "Giffy Gallery",
    "https://github.com/vtchris/Giffy-Gallery",
    "https://vtchris.github.io/Giffy-Gallery/"
));
PROJECTS.push(new Project(
    "Game of Thrones Hangman",
    "JavaScript word guessing game in which you guess the names of characters from Game of Thrones!",
    "got.jpg",
    "Game of Thrones Hangman",
    "https://github.com/vtchris/hangman",
    "https://vtchris.github.io/hangman/"
));
PROJECTS.push(new Project(
    "Bamazon Node Store",
    "This application was developed with Node.js and a MySql backend. It utilizes inquirer for user interaction.",
    "bamazon.jpg",
    "Bamazon Node Store",
    "https://github.com/vtchris/bamazon-node-app",
    "https://github.com/vtchris/bamazon-node-app"
));
//Project constructor
function Project(name, description, image, imageAlt, url_gitrepo, url) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.imageAlt = imageAlt;
    this.url = url;
    this.url_gitrepo = url_gitrepo;
}