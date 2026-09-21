import React from "react";
import { useParams } from "react-router";
import docs from "../../../data/doc.js";
import "./docsPage.css";
import DocsCodeBlock from "../docs code component/DocsCodeBlock.jsx";
import Installation from "../installation Tab/Installation.jsx";

const DocsPage = () => {
  const { slug } = useParams();
  const doc = docs[slug];
  const Preview = doc.preview;
  return (
    <main className="docs-content">
      <div className="docs-heading-content">
        <h1>{doc.title}</h1>
        <p className="docs-description">{doc.description}</p>
      </div>

      {Preview && (
        <section className="component-preview">
          <Preview {...doc.previewProps} />
        </section>
      )}

      <Installation />

      {doc.usage && (
        <section className="docs-section">
          <h2>Usage</h2>

          <DocsCodeBlock code={doc.usage.code} language="jsx" />
        </section>
      )}

      {doc.props && (
        <section className="docs-section">
          <h2>Props</h2>

          <div className="props-table-wrapper">
            <table className="props-table">
              <thead>
                <tr>
                  <th>Prop Name</th>
                  <th>Type</th>
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
                      <code>{prop.type || "—"}</code>
                    </td>

                    <td>
                      <code>{prop.default}</code>
                    </td>

                    <td>{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </main>
  );
};

export default DocsPage;
