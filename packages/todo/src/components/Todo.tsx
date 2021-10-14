import { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';

const Todo: FC = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    setTasks((previousTasks) => [
      ...previousTasks,
      { name: inputValue, id: uuid },
    ])

    setInputValue('');
  }

  return (
    <div>
      <h2>What will you do?</h2>

      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
