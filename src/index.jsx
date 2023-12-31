import "preact/debug";
import { render } from "preact";
import preactLogo from './assets/preact.svg';
import "./style.css";

export function App() {
  return (
    <div>
      <a href="https://preactjs.com" target="_blank">
        <img alt="Preact logo" height="160" width="160" src={preactLogo} />
      </a>

      <h1>Get Started building Rspack-powered Preact Apps </h1>
      <section>
        <Resource
          title="Learn Preact"
          description="If you're new to Preact, try the interactive tutorial to learn important concepts"
          href="https://preactjs.com/tutorial"
        />
        <Resource
          title="Differences to React"
          description="If you're coming from React, you may want to check out our docs to see where Preact differs"
          href="https://preactjs.com/guide/v10/differences-to-react"
        />
        <Resource
          title="Learn Rspack"
          description="To learn more about Rspack and how you can customize it to fit your needs, take a look at their excellent documentation"
          href="https://rspack.dev"
        />
      </section>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app"));
