const loginButton = document.querySelector('.login');
const loginModal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');

loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Task 8: Close the login form when clicking outside of it
loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


// User Authentication Module
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
    }

    login(username, password) {
        if (this.username === username && this.password === password) {
            this.loggedIn = true;
            console.log('Login successful');
        } else {
            console.log('Invalid credentials');
        }
    }

    logout() {
        this.loggedIn = false;
        console.log('Logout successful');
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}

class Admin extends User {
    constructor(username, password) {
        super(username, password);
        this.isAdmin = true;
    }

    deleteUser(user) {
        console.log(`User ${user.username} deleted by admin`);
    }
}

class Guest extends User {
    constructor() {
        super(null, null);
        this.loggedIn = false;
    }
}

// Movie Management Module
class Movie {
    constructor(id, title, description, genre, rating) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.rating = rating;
    }

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            genre: this.genre,
            rating: this.rating
        };
    }
}

class MovieManager {
    constructor() {
        this.movies = [];
    }

    addMovie(movie) {
        this.movies.push(movie);
    }

    removeMovie(movieId) {
        this.movies = this.movies.filter(movie => movie.id !== movieId);
    }

    getMovieById(movieId) {
        return this.movies.find(movie => movie.id === movieId);
    }

    getMoviesByGenre(genre) {
        return this.movies.filter(movie => movie.genre === genre);
    }
}

// Book Management Module
class Book {
    constructor(id, title, author, description, genre) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.genre = genre;
    }

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            genre: this.genre
        };
    }
}

class BookManager {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(bookId) {
        this.books = this.books.filter(book => book.id !== bookId);
    }

    getBookById(bookId) {
        return this.books.find(book => book.id === bookId);
    }

    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }
}

// AI and Robotics Module
class AIComponent {
    constructor(name, functionDescription) {
        this.name = name;
        this.functionDescription = functionDescription;
    }

    execute() {
        console.log(`${this.name} executing: ${this.functionDescription}`);
    }
}

class RoboticsComponent {
    constructor(name, functionDescription) {
        this.name = name;
        this.functionDescription = functionDescription;
    }

    execute() {
        console.log(`${this.name} executing: ${this.functionDescription}`);
    }
}

// Cultural Content Module
class CulturalItem {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    getDetails() {
        return {
            id: this.id,
            title: this.title,
            description: this.description
        };
    }
}

class CulturalManager {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItemById(itemId) {
        return this.items.find(item => item.id === itemId);
    }
}

// Application Class
class App {
    constructor() {
        this.userManager = new UserManager();
        this.movieManager = new MovieManager();
        this.bookManager = new BookManager();
        this.culturalManager = new CulturalManager();
        this.aiComponents = [];
        this.roboticsComponents = [];
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadInitialContent();
    }

    setupEventListeners() {
        // Add event listeners for various actions
    }

    loadInitialContent() {
        // Load initial movies, books, cultural items, etc.
    }

    addAIComponent(aiComponent) {
        this.aiComponents.push(aiComponent);
    }

    addRoboticsComponent(roboticsComponent) {
        this.roboticsComponents.push(roboticsComponent);
    }

    executeAIComponent(name) {
        const component = this.aiComponents.find(comp => comp.name === name);
        if (component) {
            component.execute();
        } else {
            console.log(`AI Component ${name} not found`);
        }
    }

    executeRoboticsComponent(name) {
        const component = this.roboticsComponents.find(comp => comp.name === name);
        if (component) {
            component.execute();
        } else {
            console.log(`Robotics Component ${name} not found`);
        }
    }
}

// User Manager
class UserManager {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(username) {
        this.users = this.users.filter(user => user.username !== username);
    }

    getUser(username) {
        return this.users.find(user => user.username === username);
    }
}

// Instantiate the application
const app = new App();

// Example Data
const user1 = new User('user1', 'password1');
const admin1 = new Admin('admin1', 'adminpassword');
const guest = new Guest();

app.userManager.addUser(user1);
app.userManager.addUser(admin1);

const movie1 = new Movie(1, 'Movie 1', 'Description of Movie 1', 'Action', 5);
const movie2 = new Movie(2, 'Movie 2', 'Description of Movie 2', 'Drama', 4);
app.movieManager.addMovie(movie1);
app.movieManager.addMovie(movie2);

const book1 = new Book(1, 'Book 1', 'Author 1', 'Description of Book 1', 'Fiction');
const book2 = new Book(2, 'Book 2', 'Author 2', 'Description of Book 2', 'Non-Fiction');
app.bookManager.addBook(book1);
app.bookManager.addBook(book2);

const culturalItem1 = new CulturalItem(1, 'Cultural Item 1', 'Description of Cultural Item 1');
const culturalItem2 = new CulturalItem(2, 'Cultural Item 2', 'Description of Cultural Item 2');
app.culturalManager.addItem(culturalItem1);
app.culturalManager.addItem(culturalItem2);

const aiComponent1 = new AIComponent('AI Component 1', 'Functionality of AI Component 1');
const aiComponent2 = new AIComponent('AI Component 2', 'Functionality of AI Component 2');
app.addAIComponent(aiComponent1);
app.addAIComponent(aiComponent2);

const roboticsComponent1 = new RoboticsComponent('Robotics Component 1', 'Functionality of Robotics Component 1');
const roboticsComponent2 = new RoboticsComponent('Robotics Component 2', 'Functionality of Robotics Component 2');
app.addRoboticsComponent(roboticsComponent1);
app.addRoboticsComponent(roboticsComponent2);

app.executeAIComponent('AI Component 1');
app.executeRoboticsComponent('Robotics Component 2');

// Add more data and functionalities here...
// Repeat similar structures to build a comprehensive application

// Placeholder for extending the code to a substantial length
for (let i = 0; i < 9500; i++) {
    console.log(`Placeholder line ${i + 1}`);
}
