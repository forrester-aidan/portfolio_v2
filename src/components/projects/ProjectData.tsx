const projects = [
  {
    title: 'Personal Programming Language',
    description:
      "Through the University of Florida's Programming Language Concepts course (COP4020), I was able to learn how to build my very own programming language completely from scratch. In order to understand written code, my language took in inputs as a character stream, lexed these chars into different tokens with type handling, and eventually parse these tokens in an abstract syntax tree. Then, the tree simultaneously analyzed for an type casting mistakes and evaluated in order of the established precedence. Finally, our tree was converted to Java code via the generator, allowing it to be compiled and run in Java. The hardest part of this project was by far dealing with parsing, as there were so many exceptions to take account for that it was hard to figure out where every exception was thrown in the code. However, this experience is something I'm incredibly grateful for, as I have learned a lot about the true nature of programming languages.  ",
    image: 'personal_language.png',
    gitHubLink: 'https://github.com/forrester-aidan/plc_project',
    languages: 'Java',
    status: 'done',
  },
  {
    title: 'Retail Management',
    description:
      'A solo project that is currently a work in progress, I wanted to be able to apply my knowledge of both frontend, backend, and database management to create a comprehensive retail management system for supermarkets and clothing retailers to use. Using React with Typescript and Tailwind CSS, I was able to create a basic draft of some of the functionality of the website, including a search function for customers that have purchased items from the store as well as organizing customers in order of recency/frequency. This is project is a proper reflection of my knowledge as a computer science student to this day.',
    image: 'retail.png',
    gitHubLink: 'https://github.com/forrester-aidan/retail_management',
    languages: 'Typescript, React, Node.js, Supabase',
    status: 'in progress',
  },
  {
    title: 'Swamp Scheduler',
    description:
      'This project was an open-source collaboration that I participated in as a member of the Open-Source Club. Being my first introduction to the React.js framework, it took a lot of outside research and studying to initially get immersed into the project environment. The first pull request I submitted was a dynamic dark mode that responds to the browser state using Tailwind CSS. Designing the dark mode took a lot of work, requiring a lot of research on proper color schemes, combinations of colors, and which elements need which color. Having it automatically respond to the browser made it easier than just doing it manually with a toggle switch, and with Tailwind it was super intuitive.',
    image: 'swamp_scheduler_vid.gif',
    gitHubLink: 'https://github.com/ufosc/SwampScheduler',
    languages: 'Typescript, React, Node.js, MongoDB',
    status: 'done',
  },
  {
    title: 'Car Rental System',
    description:
      'In a group of two other students, we were able to create a mock car rental system for a fake company with Next.js that allows users to make reservations at multiple different locations. Users were able to create an account (which was encrypted and stored in a database), select cars from over 10,000 different options at 3 separate locations, and make reservationsif they were labeled as "Available." We also implemented an Employee and Administrator page to be used for different members of the company. Employees were able to view and change the inventory of the available cars (listing them as available, reserved, or needing repair), as well as manage reservations held by different users. Administrators were able to do everythingany Employee could, but could also manage the Employees that are in the company, giving or taking away their access to the car inventory. All of our data was stored in an external database and was accessed using API calls and MySQL, allowing for sensitive information to be handled securely.',
    image: 'car_rental_vid.webp',
    gitHubLink: 'https://github.com/andjimenezuf/car_rental',
    languages: 'TypeScript, Next.js, Node.js, Tailwind CSS',
    status: 'done',
  },
  {
    title: 'Maze Game vs. AI',
    description:
      "This was one of my favorite projects that I've built in Python, and actually spent a long time playing the game after I created it. Using the tkinter library to create the canvas, I was able to draw a 2d array of squares to account for the grid itself, using 1 to denote a tile that can be traversed and 0 to denote a barrier. The simple part of this program was getting the square to move, however coding the AI took a bit longer. In order to ensure the AI was not just roaming at random, I used the Breadth First Search algorithm to search for the shortest path to the player, and had the AI bot move in the respective direction that was along that path. This would happen at every keyboard button press, and would constantly update as the game continued. I added three AI bots in order to make the project more challenging for the user, that all act independently from each other. Currently, I am debugging issues related to AI overlap, making sure they do not bump into each other.",
    image: 'maze_game_vid.gif',
    gitHubLink: 'https://github.com/forrester-aidan/maze_game',
    languages: 'Python',
    status: 'done',
  },
  {
    title: 'VPN System Management',
    description:
      'I enjoyed this project because it was my first application of Java into a project of my own. I learned Java for the first time back in 2019, while I was a junior in high school and studying Information Technology as a vocation. Since my only exposed to coding languages was HTML/CSS/JS prior to that, it was difficult to adjusted to the Java environment. With this project, I wanted to practice concepts used in cybersecurity and encyrpted data transfer, so using the Socket and ServerSocket classes, I was able to created a mock VPN system that can transfer data between the client and server and display it to the console. At the moment, I am debugging the EncryptionUtil class that generates a secret key and cipher to send data securely.',
    image: 'vpn_system_vid.gif',
    gitHubLink: 'https://github.com/forrester-aidan/vpn_system',
    languages: 'Java',
    status: 'done',
  },
];

export default projects;
