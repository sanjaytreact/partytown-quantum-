import logo from './logo.svg';
import './App.css';
import { Partytown } from '@builder.io/partytown/react';
import { partytownSnippet } from '@builder.io/partytown/integration';

const snippetText = partytownSnippet();


function App() {

  const script = document.createElement("script");
  script.src = "https://cdn.quantummetric.com/qscripts/1.35.2/quantum-geico.js";
  script.async = true;
  script.type = "text/partytown";
  document.head.appendChild(script);

  // console.log("QuantumMetricAPI", QuantumMetricAPI)

  return (
    <div className="App">
      <Partytown debug={true} forward={['dataLayer.push']} />
      <h1>Partytown Quantum</h1>
    </div>
  );
}

export default App;
