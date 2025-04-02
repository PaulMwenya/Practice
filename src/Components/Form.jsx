import { useState } from "react";

export default function () {
  const [student, setStudent] = useState([
    { fname: "", lname: "", program: "" },
  ]);
  return (
    <div>
      <h1>
        Student:
        <br />
        {student.fname}
        <br />
        {student.lname}
        <br />
        {student.program}
        <br />
      </h1>
      <form>
        <input
          type="text"
          value={student.fname}
          onChange={(e) =>
            setStudent({ ...student, fname: e.target.value })
          } /*as you set,make sure to encase in curly brackets since its an object*/
        />
        <input
          type="text"
          value={student.lname}
          onChange={(e) => setStudent({ ...student, lname: e.target.value })}
        />
        <input
          type="text"
          value={student.program}
          onChange={(e) => setStudent({ ...student, program: e.target.value })}
        />
      </form>
    </div>
  );
}
