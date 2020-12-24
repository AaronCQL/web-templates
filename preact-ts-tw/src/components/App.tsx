import { h, FunctionalComponent } from "preact";

const App: FunctionalComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-purple-700">Preact CLI + TypeScript + Tailwind</h1>
      <p className="mt-4">
        Edit <code className="text-pink-700">src/components/App.tsx</code> to
        start
      </p>
    </div>
  );
};

export default App;
