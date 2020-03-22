import React, { useState } from "react";
import s from "./createthread.module.scss";
import b from "../button.module.scss";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: { avatar: true, src: "/images/avatar/small/jenny.jpg" }
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
    image: { avatar: true, src: "/images/avatar/small/elliot.jpg" }
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
    image: { avatar: true, src: "/images/avatar/small/stevie.jpg" }
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
    image: { avatar: true, src: "/images/avatar/small/christian.jpg" }
  },
  {
    key: "Matt",
    text: "Matt",
    value: "Matt",
    image: { avatar: true, src: "/images/avatar/small/matt.jpg" }
  },
  {
    key: "Justen Kitsune",
    text: "Justen Kitsune",
    value: "Justen Kitsune",
    image: { avatar: true, src: "/images/avatar/small/justen.jpg" }
  }
];

const CreateThreadForm = () => {
  const [value, setValue] = useState(false);

  const onDropdownChange = e => {
    setValue(e.value);
  };

  return (
    <div className={s.container}>
      <h2>Create thread</h2>
      <select className={s.dropdown} id="cars">
        <option default disabled>
          Select forum
        </option>
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
      <p>Thread topic</p>
      <input className={s.topicInput} type="text" />
      <p>Content</p>
      <textarea className={s.topicArea}></textarea>
      <button style={{ margin: "1.5rem auto", padding: "1rem" }} className={b.button}>
        Create
      </button>
    </div>
  );
};

export default CreateThreadForm;
