import { Sidebar } from "./components/sidebar/Sidebar";
import { Timeline } from "./components/timeline/Timeline";
import "./style.css"

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar__twitterIcon" />
      {/* timeLine */}
      <Timeline/>

      {/* widget */}
    </div>
  );
}

export default App;
