# My Portfolio

This is a fully customizable portfolio website built using Nuxt 3. You can easily configure your personal information, projects, experiences, skills, and more in a config.json file. The portfolio also supports media uploads for showcasing your work.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Demo

A demo (my portfolio) is available here : [Demo JLsquare](http://www.jlsquare.fr/)

## Getting Started

### Prerequisites

-   Node.js (>=18.x) (didn't test previous versions)

### Installation

1.  Clone this repository:

```sh
git clone https://github.com/JLsquare/portfolio.git
```

2.  Navigate to the project folder:

```sh
cd portfolio
```

3.  Install the required dependencies:

```sh
npm install
```

### Configuration

1.  Open the `config.json` file and update the information as needed. The current config.json is my example.
2. Add any images related to your projects or other visual content to the `public/images/` directory.

### Running the Application

1. Test the application:

```sh
npm run dev
```

2. Generate the static website:

```sh
npm run generate
```

3. Preview the generated website:

```sh
npm run preview
```

4. Deploy using your solution of choice. Personally, I use [NGINX](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/) to serve the static website.
