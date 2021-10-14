import Todo from './components/Todo';

export default function Root(props) {
  return (
    <section>
      <h1>{props.name} is mounted!</h1>

      <Todo />
    </section>
  );
}
