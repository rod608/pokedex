<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="app/favicon.ico" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Pokédex</h3>

  <p align="center">
    A search tool that returns data on individual Pokémon!
    <br />
    <a href="https://pokedex-rod608.vercel.app/"><strong>View Demo »</strong></a>
    <br />
    <br />

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot](/public/dashboard.png)

Filter through the original 151 Pokémon and view information whichever you'd like! 

Next.js has many configurations and rendering strategies that allow for instant improvement in load times, bundle sizes, and SEO of React Web Applications. It's recently received a major incremental update in V13, so I wanted to familiarize myself with it through this project.

I became more familiar with:
* Utilizing the App Router.
* Static Site Generation: Homepage.
* Server-side Rendering: Unique Pokémon Pages.
* Delivering "Loading" states from the server.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
* ![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/rod608/pokedex
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the Development Server
   ```js
   npm run dev
   ```
4. Navigate to [localhost:3000](http://localhost:3000/) in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
![Product Name Screen Shot](/public/demo.gif)

1. Filter for Pokémon using the search input.
2. Click on any Pokémon to go to its page.
3. Click on dropdown to view the Pokémon's Info.
4. Click "Home" on the top right and repeat the process.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Fetch General Pokémon Data w/ the PokéAPI.
- [x] Create a Grid populated with Pokémon Cards.
- [x] Filter the grid of cards using a search input.
- [x] Link the Cards to unique SSR /pokémonName pages.
- [x] Fetch in-depth data on the Pokémon.
- [x] Display the data to the User.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
