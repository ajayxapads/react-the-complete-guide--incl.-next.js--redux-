import React from 'react';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
// The above line of code defines an array called reactDescriptions that contains three strings: 'Fundamental', 'Crucial', and 'Core'. These strings are likely used to describe the importance of React concepts in the context of the application.
const reactImage = 'src/assets/react-core-concepts.png';
// The above line of code defines a constant variable called reactImage and assigns it the string value 'src/assets/react-core-concepts.png'. This variable likely holds the path to an image file that will be used in the Header component to display a stylized atom image representing React.

const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
// The above line of code generates a random index to select a description from the reactDescriptions array. The genRandomInt function takes the length of the array minus one as an argument to ensure that the index is within the valid range of the array.


/**
 * Returns a random integer between 0 and max (inclusive).
 */
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

const Header = () => {
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description}
                React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    )
}

export default Header