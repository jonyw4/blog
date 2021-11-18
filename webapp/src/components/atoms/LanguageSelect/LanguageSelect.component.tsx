import { useLocale } from "../../global";

export function LanguageSelect() {
  const { changeLocale, locale } = useLocale();
  return (
    <div>
      <label htmlFor="language-select">🌐 Language</label>
      <select
        id="language-select"
        onChange={(e) => changeLocale(e.target.value)}
        value={locale}
      >
        <option value="en-US">English (US)</option>
        <option value="pt-BR">Português (BR)</option>
      </select>
    </div>
  );
}
