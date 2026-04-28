# Drag-and-Drop Virus Game
**WEB-115 Final Project Proposal**
Student: Charlie Sanchez | Repo: `WEB-115_FinalProject_Sanchez`

---

## Overview

This is a web game where a user can click to generate disease points, which they then can buy virus building blocks with. There are different types of building blocks which can be merged to make different viruses with different disease points and symptoms. The game ends when the user discovers the deadliest virus possible in the game. This game is inspired by Resident Evil, and is especially inspired by Chapter 2 in my Midterm project, where Birkin develops an extremely potent strand of the T-virus. The user plays the role of his lab assistant.

---

## Features

- The user's progress is saved to `localStorage`.
- They have the option to reset to a new game.
- A certain amount of disease points generate passively per hour.
- Disease points can buy hints for virus creation.
- Viruses have their own log which displays symptoms and values.
- A log is kept with discovered combinations.
- The user is notified when a new virus is discovered.
- An ending cutscene is displayed after the user beats the game.

---

## Core Requirements Coverage

| Requirement | Implementation |
| **Event Listeners** | Click listeners on a button will generate disease points. A reset button clears `localStorage`. Click listeners exist on a button that opens the disease log, and virus logs appear when you click on individual virus objects. You can also click a button to purchase hints.|
|---|---|
| **If Statements & Loops** | While loops will be used to generate disease points, and somehow a loop will be added to populate `localStorage` with passive disease points every hour. |
| **DOM Element Creation** | The drag and drop objects will be dynamically created using the DOM. |
| **Classes & Subclasses** | The base class will be `disease`, with different disease subclasses that have different attributes and recipes. |

---

## DLC — Additional Topics

### JSON & Local Storage
I'm not sure how this works yet, but I know that the game state will be saved to `localStorage` right before the user closes the tab.

### HTML Drag and Drop API
The entire game depends on merging, so all of the objects can be dragged using `dragstart` and `dragend`. The merge board is initalized using `drop`, sort of like an enchantment table. When two elements are dragged to the drop area, they turn into something else.

---

## Tech Stack

- HTML, CSS, JavaScript
- HTML Drag and Drop API
- `localStorage` 
- VS Code + GitHub
