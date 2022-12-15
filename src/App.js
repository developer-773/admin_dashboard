import Diagram from "./components/Diagram/Diagram";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app container">
      <Sidebar />
      <div className="main">
        {/* Header */}
        {/* Statistics */}
        <Diagram />
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
