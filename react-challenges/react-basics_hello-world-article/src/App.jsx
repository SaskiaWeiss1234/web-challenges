import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}
function HelloWorldArticle() {
  return (
    <article className="article">
      <h2 className="article__title">Your favorite Coding challenge</h2>
      
      <p
        className="article__link"
        href="https://www.codewars.com/dashboard"
      >
        Codewars Dashboard
      </p>
     
    </article>
  );
}