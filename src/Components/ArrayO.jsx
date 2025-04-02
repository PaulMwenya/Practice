export default function ArrayO() {
  const students = [
    {
      fname: "Paul",
      lname: "Mwenya",
      comp: 2021485595,
      program: "Computer SCience",
      major: "Sotware Enineering",
      ID: 1,
    },
    {
      fname: "Francis",
      lname: "Mwiba",
      comp: 2021485598,
      program: "Economics",
      major: "Micro Economics",
      ID: 2,
    },
    {
      fname: "Jonathan",
      lname: "Simukoko",
      comp: 2021485594,
      program: "Economics",
      major: "Macro Economics",
      ID: 3,
    },
    {
      fname: "Gabby",
      lname: "Mukuka",
      comp: 2021485593,
      program: "Business administration",
      major: "BBA",
      ID: 4,
    },
    {
      fname: "Joslyn",
      lname: "Mwenya",
      comp: 2021485591,
      program: "Agric",
      major: "Plant Science",
      ID: 5,
    },
  ];
  return (
    <div>
      {students.map(
        (
          student /*key should be declared in the outermost element and not inside <li> */
        ) => (
          <ul key={student.ID}>
            <li>
              First Name: {student.fname}
              <br />
              Last Name:{student.lname}
              <br />
              Computer#:{student.comp}
              <br />
              Program:{student.program}
              <br />
              Major:{student.major}
              <br />
            </li>
          </ul>
        )
      )}
    </div>
  );
}
