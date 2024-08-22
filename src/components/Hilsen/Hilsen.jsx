import style from './Hilsen.module.scss';
import { useState } from "react";

export const Hilsen= () => {
  const [name, setName] = useState("");

  return (
    <div className={style.hilsenStyle}>
        <p>Send en hilsen til {name}</p>
      <input
        type="text"
        placeholder="skriv din navn"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}