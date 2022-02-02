
# Submission Notes

### Hubspot Yamil Lasso Test

## Installation

1. Unzip the project folder and change directory to /CodeExercise
2. Use npm to install dependencies
```bash
npm install
```
## Usage
1. To serve local
```bash
# This will sever in port :1234
cd CodeExercise
npm run start
```
 ## Useful information about this project

1. Semantic tags used based in HTML5 Standards.
2. Mobile styles were created using different breakpoints, mixins created for this purpose.
```bash
$bp-mobile: 320px;
$bp-tablet: 600px;
$bp-desktop: 1024px;
```
>Mixins usage:

For media query breakpoints, you can use inside scss files to set styles for different widths, here are some examples:
```bash
@inlude from(mobile) {
 //place css rules here from mobile width
}
@inlude upto(tablet) {
 //place css rules here for widths below tablet
}
@inlude from(desktop) {
 //place css rules here for desktop initial width
}
```
3. BEM nomenclature was used.
4. Includes Mixins for breakpoints and font sizes to rem.
5. Used name-that-color tool for color variables naming.
6. Mobile First Approach
7. For preprocessors, I installed and used SASS, different .scss files and components are located inside /src/scss

### Tech stack
HTML5
CSS3
SASS
ES6 Vanilla Javascript

#### I appreciate your time reading this yamilsteven@hotmail.com 



## Given more time, what would you have done differently?

Given more time I would like to spend more time finishing the filters, create a logic for sorting the genres and years, also create the logic for fuzzy search with a spell checker and spelling-error corrector.

Integrate unit testing.

  

## How did you deviate from the directions, if at all, and why?

## Is there anything else you'd like to let us know?  

I was about to develop the test with Vue or React( I didn't see the bonus point for this ), in any case I consider when you learn vanilla JavaScript, your ability to adopt new frameworks and libraries triples in speed. This is because you're able to look at a piece of code and understand what it means, when you learn vanilla JavaScript, you're more aware of what you're doing, just wanted to mention that I feel comfortable with both of those frameworks.

> There's something I realized, could be nice for the future to specify that the project needs a <10 node version to avoid issues installing the dependencies.

> I had to add type="module" attr to the script tag in html or parcel debugger will throw an error, could be a versioning issue.

For the excersice number 1, I installed sass compiler.

The DOM structure for the excersice #1 wasn't modified, I just added classes.

I'm used to Webpack+Gulp but was a really nice experience to use Parcel, read documentation and learn a new building system.

I'm giving support from 320px.

I added a fallback image for poster missing src

I added native Lazy Load for images, improving the performance.

Javascript Classes and Selectors moved to component js files and imported in main.js

Custom dropdown select for easier css modification

The radio button filter works, I didn't have enough time to create the logic for the drop-down filters.

#### Thank You!