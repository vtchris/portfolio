const PROJECTS = [];

PROJECTS.push(new Project(
    "Grub Wiz",
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
    "JAVA Banking API",
    "This JAVA application uses RESTful APIs and MVC design pattern. Security is provided by a session cookie. Postman used to make endpoint calls.",
    "changeBank.jpg",
    "JAVA Banking API",
    "https://github.com/vtchris/rocp-1-project-vtchris",
    "https://github.com/vtchris/rocp-1-project-vtchris"
));
PROJECTS.push(new Project(
    "World Domination - Step 1",
    "React game in which you select your minions. Game uses react for layout and user interaction.",
    "minions.jpg",
    "React World Domination Game",
    "https://github.com/vtchris/clicky-game",
    "https://world-domination-step1.herokuapp.com"
));
PROJECTS.push(new Project(
    "News Scraper",
    "This full stack application uses axios and cheerio to scrape news articles from NPR.org. This site uses a Mongo database to store articles and user comments.",
    "scraper.jpg",
    "NPR World News Scraper",
    "https://github.com/vtchris/scrape-news",
    "https://github.com/vtchris/scrape-news"
));
PROJECTS.push(new Project(
    "Sentenced: Trivia Game",
    "JavaScript bookish trivia game in which you guess the book from it's first sentence, game. Highlights use of JavaScript timers.",
    "sentenced.jpg",
    "Sentenced Trivia Game",
    "https://github.com/vtchris/TriviaGame",
    "https://vtchris.github.io/TriviaGame/"
));
PROJECTS.push(new Project(
    "Friend Finder",
    "This application showcases the use of NodeJS/Express to provide back-end functionality.",
    "friend.jpg",
    "Friend Finder",
    "https://github.com/vtchris/friendFinder",
    "https://friend-finder-office.herokuapp.com/"
));
PROJECTS.push(new Project(
    "Tip-4-Tat",
    "Tip Calculator, this was my submission to a coding challenge contest from Career Services.",
    "tip.jpg",
    "Tip-4-Tat Tip Calculator",
    "https://github.com/vtchris/tipCalculator",
    "https://vtchris.github.io/tipCalculator/"
));
PROJECTS.push(new Project(
    "Eat Da Burger",
    "This application was developed using MySQL and the Model View Controller methodology.",
    "burger.jpg",
    "Eat Da Burger",
    "https://github.com/vtchris/burger",
    "https://order-da-burger.herokuapp.com/"
));
PROJECTS.push(new Project(
    "Scooby Snack Time!",
    "This application is an update to Eat Da Burger. This update includes the use of Sequelize to make and join tables and add records.",
    "scooby.jpg",
    "Scooby Snack Time",
    "https://github.com/vtchris/sequelizedBurger",
    "https://scooby-snack-time.herokuapp.com"
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
PROJECTS.push(new Project(
    "Node LIRI App",
    "This application was modeled after SIRI and was developed with Node.js calling 3 different APIs. It utilizes inquirer for user interaction.",
    "node-liri-app.jpg",
    "Node LIRI App",
    "https://github.com/vtchris/liri-node-app",
    "https://github.com/vtchris/liri-node-app"
));
PROJECTS.push(new Project(
    "Node Word Guess",
    "This application was developed with Node.js. It utilizes inquirer for user interaction. This application was designed to reinforce object constructor skills.",
    "nodeWord.jpg",
    "Node Word Guess App",
    "https://github.com/vtchris/node-word-guess",
    "https://github.com/vtchris/node-word-guess"
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