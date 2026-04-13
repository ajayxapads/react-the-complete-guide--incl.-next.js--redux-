import React from 'react'


const CoreConcepts = ({ image, title, description }) => {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}
// The above code defines destructured props in the function signature of the CoreConcepts component. Instead of taking a single props object and accessing its properties, the function directly takes the image, title, and description as separate parameters. This allows for cleaner and more concise code when using these values within the component's JSX. The component still returns a list item (li) that contains an image, a heading (h3), and a paragraph (p) with the respective values passed as props.

export default CoreConcepts
