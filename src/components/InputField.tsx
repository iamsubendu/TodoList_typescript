import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // useRef is a React Hook that allows you to create a reference to a DOM element or any mutable value.
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
        //blur(); shifts the focus
      }}
    >
      <input
        type="input"
        ref={inputRef}
        placeholder="Enter a task"
        className="inputBox"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
