import { ProfileCard } from '../ProfileCard'
import { LanguageSelect } from '../../atoms/LanguageSelect/LanguageSelect.component';

export function Header(){
  return (
    <header>
      <ProfileCard />
      <LanguageSelect />
    </header>
  );
}