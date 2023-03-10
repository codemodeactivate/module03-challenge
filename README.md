# Password Generator
Case Western Coding Bootcamp Module 03 Challenge

[Live Demo](https://codemodeactivate.github.io/password-generator/)

![Screenshot](/screenshot.png)

## Description
This will generate a random password based on the user's inputs which will be gathered via prompts and confirms.

## Notes
I believe this satisfies the acceptance criteria exactly, but the intuitive nature and ease of use is at odds with the Requirements. There isn't any error handling. Also, logic could've been more intuitive to stop the user sooner if they chose less than 8 or greater than 128 characters, for example. The script.js file is heavily commented with my stream of consciousness.

## Credits
Mathews, our instructor, helped me with the logic in the loop and converting from arrays back to strings to get everything to finally work.

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

## Requirements
### Technical Acceptance Criteria: 40%
- Satisfies all of the above acceptance criteria plus the following:

- The Challenge should not produce any errors in the console when you inspect it using Chrome DevTools.
### Deployment: 32%
- Application deployed at live URL.

- Application loads with no errors.

- Application GitHub URL submitted.

- GitHub repository that contains application code.

### Application Quality: 15%
- Application user experience is intuitive and easy to navigate.

- Application user interface style is clean and polished.

- Application resembles the mock-up functionality provided in the Challenge instructions.

### Repository Quality: 13%
- Repository has a unique name.

- Repository follows best practices for file structure and naming conventions.

- Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

- Repository contains multiple descriptive commit messages.

- Repository contains a quality README file with description, screenshot, and link to deployed application.
