import { useState } from "react";
import { UserTable } from "./components/organisms/UserTable";

function App() {
  const [view, setView] = useState<"all" | "student" | "mentor">("all");

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <button onClick={() => setView("all")}>全ユーザー</button>
        <button onClick={() => setView("student")}>生徒</button>
        <button onClick={() => setView("mentor")}>メンター</button>
      </div>

      {/* データテーブル描画 */}
      <UserTable view={view} />
    </>
  );
}

export default App;
