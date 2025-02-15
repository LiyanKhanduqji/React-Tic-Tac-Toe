import { useState } from "react";

export default function Player({ initilaName, symbol }) {
  const [initilaName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editng) => !editng);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerName = isEditing ? (
    <input required value={initilaName} type="text" onChange={handleChange} />
  ) : (
    <span className="player-name">{initilaName}</span>
  );

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
