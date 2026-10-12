# IronPulse Fitness Website

A simple gym and fitness website built for a Web Designing assignment (MSE 1). It shows workout plans, fitness programs, membership plans and health information, and has a contact form.

## Technologies Used

- HTML5 for the structure of the page
- CSS3 for the styling and layout
- JavaScript for the form output

## Project Structure

```
fitness-basic/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
```

| File | Purpose |
|------|---------|
| `index.html` | Contains all the page content: header, sections, tables, form and footer |
| `style.css` | Colours, fonts, spacing, flexbox layout, hover effects and the mobile media query |
| `script.js` | One function, `printForm()`, that prints the form details on the page |

## Website Sections

1. **Home:** welcome message and a button linking to the membership plans
2. **Workout Plans:** Beginner, Weight Loss and Muscle Building plans, with a weekly schedule table
3. **Fitness Programs:** Yoga, Zumba, HIIT and Power Lifting with their timings
4. **Membership Plans:** Basic, Standard and Premium shown in a table with prices and facilities
5. **Health Information:** simple tips on water, sleep, diet, rest and warm-up
6. **Contact Us:** a form with name, email and plan; the entered details are printed below the form

## How to Run

1. Keep `index.html`, `style.css` and `script.js` in the same folder.
2. Double-click `index.html`, or right-click it and choose Open with a browser such as Chrome.
3. No installation or internet connection is needed.

## How the Form Works

When the user fills the contact form and clicks Submit, the `printForm()` function in `script.js`:

1. Reads the name, email and plan using `document.getElementById(...).value`
2. Finds the price of the chosen plan using if/else
3. Creates a random receipt number and today's date
4. Writes the receipt into the `<div id="output">` using `innerHTML`
5. Returns `false` so the page does not reload and the receipt stays visible

The Print Receipt button calls `printReceipt()`, which uses `window.print()`. A `@media print` rule in `style.css` hides everything except the receipt, so only the receipt is printed.

## Features

- Navigation links that jump to each section
- Tables for the schedule and membership plans
- Flexbox layout for the cards
- Hover effects on links, buttons and cards
- Responsive layout for small screens using a media query
- Form that shows a receipt with a Print Receipt button

## Limitations

- This is a frontend-only website. There is no backend or database, so the form data is not saved or sent anywhere.
- There are no images and no form validation.

## Possible Improvements

- Add images and a gallery
- Add form validation for the name and email
- Connect a backend such as Node.js, PHP or a database to store the form data
- Add a BMI calculator and a login page

## Author

Name: ______________________
Roll Number: ______________________
Course: ______________________
