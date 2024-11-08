import Details from "./Details";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-1">
      <Details title="Details" text="This is a summary" />
      <Details title="Details 2" text="This is a summary 2" />
      <Details title="Details 3" text="This is a summary 3" />
    </div>
  );
}

export default App;
