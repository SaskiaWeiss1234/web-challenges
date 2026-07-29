import "./styles.css";

export default function App() {
  return <article>Replace me with an article</article>;
}
function Article() {
  return (
    <article className="article">
      <h2 className="article__title">H2 Heading</h2>
      <label htmlFor="name">Suche:</label> {/* Eingabefeld */}
      <input id="suche" type="text" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Programmierung"
      >
        Codewars Dashboard
      </a>
    </article>
  );
}