import { ProfileCard } from '../ProfileCard'
import { useLocale } from '../../global'

export function Header(){
  const { changeLocale } = useLocale()
  return (
    <header>
      <ProfileCard />
      <ul>
        <li>
          <button onClick={() => changeLocale("en-US")}>US</button>
        </li>
        <li>
          <button onClick={() => changeLocale("pt-BR")}>PT-BR</button>
        </li>
      </ul>
    </header>
  );
}