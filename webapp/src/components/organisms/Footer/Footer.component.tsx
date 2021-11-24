import { LanguageSelect } from "../../atoms/LanguageSelect/LanguageSelect.component";
export function Footer() {
  return (
    <footer>
      <LanguageSelect />
      <small>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
          CC BY-NC-SA 4.0 2021
        </a>{" "}
        © Jonathan Celio
      </small>
    </footer>
  );
}
