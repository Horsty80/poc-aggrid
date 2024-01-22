import "./App.css";
import CustomGrid from "./CustomGrid";

function App() {
  return (
    <>
      <CustomGrid
        cars={[
          { make: "Tesla", model: "Model Y", price: 64950, electric: true },
          { make: "Ford", model: "F-Series", price: 33850, electric: false },
          { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        ]}
      />
    </>
  );
}

export default App;
