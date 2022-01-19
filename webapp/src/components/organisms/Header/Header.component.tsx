import { ProfileCard } from '../ProfileCard'
import { ThemeRadio } from "../../atoms/ThemeRadio/ThemeRadio.component";

export function Header(){
  return (
    <header>
      <ProfileCard />
      <div className="hide-mobile">
        <ThemeRadio />
      </div>
    </header>
  );
}