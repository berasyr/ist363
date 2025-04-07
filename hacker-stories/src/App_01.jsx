export const students = [
  {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'},
  {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'},
  {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
];

function App() {
  const myVar = 'Students List';
  return (
      <div>
          <h1>{myVar}</h1>
          {students.map((student) => (
              <div key={student.suid}>
                  <p>Name: {student.name}</p>
                  <p>Year: {student.year}</p>
                  <p>Major: {student.major}</p>
                  <hr />
              </div>
          ))}
      </div>
  );
}

function Studentslist() {
  const students = [
    {suid: 123456, name: 'Sue Flay', year: 'senior', major: 'Applied Data Analytics'},
    {suid: 234567, name: 'Ella Vader', year: 'junior', major: 'Information Management and Technology'},
    {suid: 345678, name: 'Chris P Bacon', year: 'junior', major: 'Innovation, Society and Technology'}
  ];

  return (
    <div>
      {students.map((student) => (
        <div key={student.suid}>
          <p>Name: {student.name}</p>
          <p>Year: {student.year}</p>
          <p>Major: {student.major}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

{
  return (
    <div>
      <h1>Students list</h1>
      <Studentslist/>
    </div>
  );
}


function Button({onClick, children}) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <h1>Lab 10!</h1>
      <Button onClick={handleClick}>Click Me!</Button>
    </div>
  );
}


function lab () {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
export default lab