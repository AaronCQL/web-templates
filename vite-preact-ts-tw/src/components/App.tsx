import { FunctionalComponent } from "preact";

import Logo from "./Logo";

const App: FunctionalComponent = () => {
  return (
    <div className="bg-purple-700 h-screen flex flex-col justify-center items-center">
      <Logo />
      <p className="text-white text-2xl mt-6">
        Vite + Preact + TypeScript + Tailwind
      </p>
    </div>
  );
};

export default App;
