import React from "react";
import { useParams } from "react-router";
import docs from "../../../data/doc";
import './docsPage.css'
const DocsPage = () => {


  const { slug } = useParams();
  console.log(slug);
  const doc = docs[slug];
  console.log(doc);

  return (
    <main className="docs-content">
      <h1>{doc.title}</h1>

      <p className="docs-description">{doc.description}</p>

      {doc.usage && (
        <section className="docs-section">
          <h2>Usage</h2>

          <pre>
            <code>{doc.usage.code}</code>
          </pre>
        </section>
      )}

      {doc.props && (
        <section className="docs-section">
          <h2>Props</h2>

          <table className="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {doc.props.map((prop) => (
                <tr key={prop.name}>
                  <td>
                    <code>{prop.name}</code>
                  </td>
                  <td>
                    <code>{prop.default}</code>
                  </td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
};

export default DocsPage;
