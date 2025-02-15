import { useState } from "react";

export default function Player({ initilaName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initilaName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editng) => !editng);
  };

  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = isEditing ? (
    <input required value={playerName} type="text" onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
