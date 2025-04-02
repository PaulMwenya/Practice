import { useState } from "react";
import "./Formz.css";

export default function Formz() {
  const [student, setStudent] = useState({
    Fname: "",
    Lname: "",
    Program: "",
    Major: "",
    Phone: +26,
    Note: "",
  });
  return (
    <form>
      First Name:{" "}
      <input
        class="input"
        type="text"
        value={student.Fname}
        onChange={(e) => setStudent({ ...student, Fname: e.target.value })}
      />
      Last Name:
      <input
        class="input"
        type="text"
        value={student.Lname}
        onChange={(e) => setStudent({ ...student, Lname: e.target.value })}
      />
      <input
        class="input"
        type="text"
        value={student.Program}
        onChange={(e) => setStudent({ ...student, Program: e.target.value })}
      />
      <input
        class="input"
        type="text"
        value={student.Major}
        onChange={(e) => setStudent({ ...student, Major: e.target.value })}
      />
      <input
        class="input"
        type="text"
        value={student.Phone}
        onChange={(e) => setStudent({ ...student, Phone: e.target.value })}
      />
      <input
        class="input"
        type="textarea"
        value={student.Note}
        onChange={(e) => setStudent({ ...student, Note: e.target.value })}
      />
      <textarea class="input" />
    </form>
  );
}
