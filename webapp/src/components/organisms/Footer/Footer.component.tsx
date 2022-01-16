import { LanguageSelect } from "../../atoms/LanguageSelect/LanguageSelect.component";
export function Footer() {
  return (
    <footer>
      <LanguageSelect />

      <ul
        className="inline-list small strong"
        style={{ marginBottom: "0.5em" }}
      >
        <li>
          <a href="https://www.linkedin.com/in/jonycelio/">LinkedIn</a>
        </li>
        <li>
          <a href="https://www.instagram.com/jonycelio/">Instagram</a>
        </li>
        <li>
          <a href="https://lyrax.systems/">Lyrax</a>
        </li>
      </ul>

      <small>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0 2021
        </a>{" "}
        © Jonathan Celio
      </small>
    </footer>
  );
}
