# TestRPG

TestRPG is a 'game' meant to be automated through a Test Automation Framework like Cypress or Playwright.

## Play

The `/play` page lets you create an RPG character, you choose a name and select a build. Afterward, you have to complete
4 tasks to 'level up' your character.

### Acceptance criteria

Since the main purpose of this project is to automate some tasks, the following 'acceptance criteria' are provided
to get you started.

* Character name has to be at least 3 characters, and 20 characters at most.
* Changing the character build type should change the character stats (strength, agility, wisdom, magic).
* Clicking 5 times on the button should level up your character and show a confirmation message.
* Selecting a file for upload should level up your character and show a confirmation message.
* Typing 'Lorem Ipsum' into the input field should level up your character and show a confirmation message.
* Moving the slider all the way to the right should level up your character and show a confirmation message.
* After completing each task, the related input should be set to 'disabled'.

Bonus:
* Easter egg which lets your character reach max stats when leveling up

## Development

### Getting Started

First, install the project using `pnpm install`:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
