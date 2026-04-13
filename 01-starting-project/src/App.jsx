import { useState } from 'react';
import Header from './components/Header';
import TabButton from './components/TabButton';
import CoreConcepts from './components/CoreConcepts';
import { CORE_CONCEPTS, EXAMPLES } from './data';

// function CoreConcepts(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
// // The above code defines a functional component called CoreConcepts that takes props as an argument. It returns a list item (li) that contains an image, a heading (h3), and a paragraph (p). The image source, alt text, title, and description are all derived from the props passed to the component. This component is likely used to display the core concepts of React in a structured format on the page.


/**
 * Root component of this mini app.
 * It composes the page from smaller components (currently only Header + main).
 */
function App() {

  const [tabContent, setTabContent] = useState('');


  const handleSelect = (selectedTopic) => {
    setTabContent(selectedTopic);
  }

  const tabData = EXAMPLES[tabContent];

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} />
          </ul>
        </section>
        <section id="examples">
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {/* {!tabContent ? <p>Click on a tab to see an example</p> : null} */}
          {tabContent ? (<div id='tab-content'>
            <h3>{tabData?.title}</h3>
            <p>{tabData?.description}</p>
            <pre><code>{tabData?.code}</code></pre>
          </div>) : <p>Click on a tab to see an example</p>}
          {/* {!tabContent ? <p>Click on a tab to see an example</p> : null} */}
          {/* {tabContent ? (<div id='tab-content'>
            <h3>{tabData?.title}</h3>
            <p>{tabData?.description}</p>
            <pre><code>{tabData?.code}</code></pre>
          </div>) : <p>Click on a tab to see an example</p>} */}
        </section>
      </main>
    </div>
  );
}

export default App;