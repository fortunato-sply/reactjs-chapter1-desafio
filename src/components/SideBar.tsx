import { Button } from "./Button";

import { GenreResponseProps } from "../App";
interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onHandleClickButton: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, onHandleClickButton}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onHandleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}