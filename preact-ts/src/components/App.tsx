import { h, FunctionalComponent } from "preact";

const App: FunctionalComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ fontWeight: 400, color: "rgba(109, 40, 217)", margin: 0 }}>
        Preact CLI + TypeScript
      </h1>
      <p>
        Edit{" "}
        <code style={{ color: "rgba(190, 24, 93)" }}>
          src/components/App.tsx
        </code>{" "}
        to start
      </p>
    </div>
  );
};

export default App;
