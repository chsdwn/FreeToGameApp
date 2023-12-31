<div align="center">
  <a name="title"></a>
  <h3 align="center">FreeToGameApp</h3>
  
  <p align="center">
    A mobile application that provides a list of free-to-play games.
    <br />
    <br />
    <a href="https://github.com/chsdwn/FreeToGameApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/chsdwn/FreeToGameApp/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

<p align="center">A mobile application that provides a list of free-to-play games.</p>

### Demo

https://github.com/chsdwn/FreeToGameApp/assets/13810855/2f7af9e8-e4d0-4d3e-adb3-52977cb0db3a

### Screenshots

#### List of Games

![List of free games](./screenshots/home.jpeg 'List of free games')

#### Filter

![List of free games](./screenshots/filter.jpg 'List of free games')

#### Loading

![Loading skeleton](./screenshots/skeleton.jpg 'Loading skeleton')

### Tech Stack

| Library                             | Category         | Version | Description                                                                      |
| ----------------------------------- | ---------------- | ------- | -------------------------------------------------------------------------------- |
| React Native                        | Mobile Framework | v0.72   | The best cross-platform mobile framework                                         |
| React                               | UI Framework     | v18     | The most popular UI framework in the world                                       |
| TypeScript                          | Language         | v4      | Static typechecking                                                              |
| React Navigation                    | Navigation       | v6      | Performant and consistent navigation framework                                   |
| React Native Paper                  | UI               | v5      | Material Design for React Native                                                 |
| React Native Responsive Scalability | UI               | v1      | Utility hooks for scalability                                                    |
| React Native Vector Icons           | UI               | v9      | Customizable icons                                                               |
| Zustand                             | State Management | v4      | A small, fast and scalable bearbones state-management solution                   |
| TanStack Query                      | State Management | v4      | Powerful asynchronous state management, server-state utilities and data fetching |
| axios                               | REST client      | v1      | Communicate with back-end                                                        |
| Flipper                             | Debugger         |         | Native debugging                                                                 |
| Hermes                              | JS engine        |         | Fine-tuned JS engine for RN                                                      |
| Jest                                | Test Runner      | v29     | Standard test runner for JS apps                                                 |

<p align="right">(<a href="#title">back to top</a>)</p>

## Getting Started

### Prerequisites

- React Native Development Environment

  Please follow the guide to set up your development environment. https://reactnative.dev/docs/environment-setup?guide=native

- yarn
  ```sh
  npm i -g yarn
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/chsdwn/FreeToGameApp
   ```
1. Navigate to the FreeToGameApp directory
   ```sh
   cd FreeToGameApp
   ```
1. Install NPM packages
   ```sh
   yarn
   ```
1. (MacOS only) Install Cocoa packages
   ```sh
   npx pod-install
   ```
1. Start metro server
   ```js
   yarn start
   ```
1. Start application
   1. Android
      ```sh
      yarn android
      ```
   1. iOS
      ```sh
      yarn ios
      ```

<p align="right">(<a href="#title">back to top</a>)</p>

## License

Distributed under the MIT License. See [`LICENSE`](https://github.com/chsdwn/FreeToGameApp/blob/main/LICENSE) for more information.

<p align="right">(<a href="#title">back to top</a>)</p>

## Contact

Hulusi Kafalıer - hulusikafalier@chsdwn.dev

Project Link: https://github.com/chsdwn/FreeToGameApp

<p align="right">(<a href="#title">back to top</a>)</p>

## Acknowledgments

- [FreeToGame API Docs](https://www.freetogame.com/api-doc)

<p align="right">(<a href="#title">back to top</a>)</p>
