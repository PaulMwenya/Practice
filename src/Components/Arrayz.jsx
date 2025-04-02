export default function Arrayz() {
  const students = ["FRancis", "Paul", "Jonathan", "Gabby"];
  return (
    <div>
      {students.map((student) => (
        <h1 key={student}>{student}</h1>
      ))}
    </div>
  );
}
