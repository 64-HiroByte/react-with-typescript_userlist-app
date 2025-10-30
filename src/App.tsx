import { useState } from "react";
// import { AllUserList } from "./components/AllUserList";
// import { StudentList } from "./components/StudentList";
// import { MentorList } from "./components/MentorList";
import { UserTable } from "./components/UserTable";

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
      <UserTable view={view} />
      {/* {view === "all" && <AllUserList />}
      {view === "student" && <StudentList />}
      {view === "mentor" && <MentorList />} */}
    </>
  );
}

export default App;
