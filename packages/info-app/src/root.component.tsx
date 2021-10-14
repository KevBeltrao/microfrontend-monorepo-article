import Routes from "./routes";

export default function Root(props) {
  return (
    <section>
      <h1>{props.name} is mounted!</h1>
    
      <Routes />
    </section>
  );
}
