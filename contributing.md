# Contributing

This project is based on [Electron][electron], a platform to develop desktop
applications using HTML, CSS and JavaScript. It uses [GitLab][gitlab] for source
code hosting, and [Trello][trello] for project management.

- [GitLab repository][jk-desktop]
- [Trello board][jk-trello]

## Our Trello board

This project is managed with a Trello board with four columns, each one
representing a state of tasks, represented by Trello cards:

- **Backlog**  
  New tasks are always created here. Every project task will be here until it's
  moved to the Sprint column
- **Sprint**  
  Tasks included in the Sprint column must be finished before the sprint
  deadline
- **In progress**  
  Started tasks will reside here. They must be assigned to the responsible
  contributor
- **Done**  
  Finished tasks that are ready to deploy will reside here

[Learn more about kanban on Wikipedia.][wp-kanban]

## Install

Clone the [Git repository][jk-desktop] and from its directory run:

```sh
npm install # installs dependencies
npm start   # runs the app
```

## Build & run

There are npm scripts for building and watching the source code:

```sh
npm run build      # builds everything (HTML, CSS, JS, etc.)
npm run build:html # builds HTML only
npm run build:css  # builds CSS only
npm run build:js   # builds JS only
npm run watch      # watches everything
npm run watch:html # watches HTML
npm run watch:css  # watches CSS
npm run watch:js   # watches JS
```

[jk-desktop]: https://gitlab.com/jackeychain/jackeychain-desktop
[jk-trello]: https://trello.com/b/0lQLeJQa/jackeychain-desktop
[electron]: http://electron.atom.io/
[gitlab]: https://about.gitlab.com/
[trello]: https://trello.com/
[wp-kanban]: https://en.wikipedia.org/wiki/Kanban
