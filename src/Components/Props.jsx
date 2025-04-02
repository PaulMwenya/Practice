function Props({ fname, lname, studentid, program, major, emoji }) {
  /*use curly braces*/
  return (
    <div>
      <h1>
        {fname}
        <br />
        {lname}
        <br />
        {studentid}
        <br />
        {program}
        <br />
        {major}
        <br />
        {emoji}
      </h1>
    </div>
  );
}
export default Props;
/*to destructure props,use curly braces to avoid errors

<Props
        fname="Paul"
        lname="Mwenya"
        studentid="2021485595"
        program="Computer Scince"
        major="Software Engineering"
        emoji="🐱‍👤🐱‍👤🐱‍👤😁😁🤦‍♀️🤦‍♀️🤦‍♀️😍😍💕💕😒😒😂😂"
      />


*/
