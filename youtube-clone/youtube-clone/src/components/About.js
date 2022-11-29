export default function About() {
  return (
    <article>
      <h1>
        {" "}
        <span className="ArticleTitle">About Page</span>
      </h1>

      <div className="about">
        <span className="creators">creators: </span>
        <p>
          {" "}
          <span>Karyn Huston & Angie Diaz</span>
        </p>

        <a href="https://github.com/KarynH">Karyn's github profile</a>
        <a href="https://github.com/ayd823">Angie's github profile</a>
      </div>
    </article>
  );
}
