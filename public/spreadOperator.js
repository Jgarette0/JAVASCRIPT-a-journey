const classrooms = [
  {
    classroomName: "BSIT I",
    status: "vacant",
    numberOfChairs: "30",
  },
  {
    classroomName: "BSIT II",
    status: "vacant",
    numberOfChairs: "35",
  },
  {
    classroomName: "BSIT III",
    status: "vacant",
    numberOfChairs: "32",
  },
  {
    classroomName: "BSIT IV",
    status: "vacant",
    numberOfChairs: "20",
  },
  {
    classroomName: "BSED I",
    status: "vacant",
    numberOfChairs: "40",
  },
  {
    classroomName: "BSSE I",
    status: "vacant",
    numberOfChairs: "35",
  },
  {
    classroomName: "BPED I",
    status: "vacant",
    numberOfChairs: "35",
  },
];

const [obj1, obj2, obj3, obj4, obj5] = classrooms;

//this is spread operator

const { status, ...others } = obj5;

const otherEntities = others;

console.log(status, otherEntities);

const updates = { ...otherEntities, status: "occupied" };
console.log(updates);
