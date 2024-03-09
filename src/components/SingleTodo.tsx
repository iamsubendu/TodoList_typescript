import React, { useEffect, useRef, useState } from 'react';
import { MdEdit, MdOutlineDoneAll, MdDoNotDisturb } from 'react-icons/md';
import { RiDeleteBin2Line } from 'react-icons/ri';
import { Todo } from '../model';
import './styles.css';

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t)));
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((t) => (t.id === id ? { ...t, todo: editTodo } : t)));
    setEdit(false);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="todoSingle" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          className="text"
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="text">{todo.todo}</s>
      ) : (
        <span className="text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          {todo.isDone ? <></> : <MdEdit />}
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {todo.isDone ? <MdDoNotDisturb /> : <MdOutlineDoneAll />}
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin2Line />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
