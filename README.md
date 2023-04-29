# My Portfolio

This is a fully customizable portfolio website built using Vue.js and Node.js Express. You can easily configure your personal information, projects, experiences, skills, and more in a `config.json` file. The portfolio also supports image uploads for showcasing your work.

## Demo

A demo (my portfolio) is available here : [Demo JLsquare](http://www.jlsquare.fr/)

## Getting Started

### Prerequisites

-   Node.js (>=18.x) (didn't tested previous versions)

### Installation

1.  Clone this repository:

```sh
git clone https://github.com/JLsquare/Portfolio.git
```

2.  Navigate to the project folder:

```sh
cd Portfolio
```

3.  Install the required dependencies:

```sh
cd client
npm install
```

```sh
cd server
npm install
```

4.  Build the website:

```sh
cd client
npm run build
```

### Configuration

1.  Open the `server/public/config.json` file and update the information as needed. The current config.json is my example.

2.  Add any images related to your projects or other visual content to the `server/public/images/` directory.

### Running the Application

1.  Start the Node.js Express server:

```sh
cd server
npm start
```

2.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your configuration) to view your portfolio.

## Customization

You can easily customize the appearance, layout, and structure of the portfolio by updating the Vue.js components and styles located in the `src` directory.

## Contact

Jean-Loup Mellion - [jeanloup.mellion@proton.me](mailto:jeanloup.mellion@proton.me) - [GitHub](https://github.com/JLsquare)
