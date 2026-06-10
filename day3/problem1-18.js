/* 
  DATA 
*/

const students = [
  { id: 1, name: "김하나", score: 85, track: "backend" },
  { id: 2, name: "이준호", score: 58, track: "backend" },
  { id: 3, name: "박서연", score: 92, track: "cloud" },
  { id: 4, name: "최민수", score: 76, track: "backend" },
];

const studentWithProfile = {
  id: 5,
  name: "정다은",
  score: 88,
  track: "cloud",
  profile: {
    city: "Seoul",
  },
};

const studentWithoutProfile = {
  id: 6,
  name: "한도윤",
  score: 73,
  track: "backend",
};

/*
  UTIL
*/

const PASS_SCORE = 60;
const isPassed = (score) => score >= PASS_SCORE;

/* 
  FUNCTION
*/

// 1
const getStudentAverage = (students) => {
  if (!students || students.length === 0) return 0;
  // NOTE: if (!students?.length) return 0;

  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  return totalScore / students.length;
};

// 2
const getTopStudent = (students) => {
  if (!students || students.length === 0) return null;

  return students.reduce((topStudent, currStudent) => {
    return topStudent.score > currStudent.score ? topStudent : currStudent;
  });
};

// 2-a
const getTopStudents = (students) => {
  if (!students || students.length === 0) return [];

  const studentScores = students.map((s) => s.score);
  const topScore = Math.max(...studentScores);

  return students.filter((s) => s.score === topScore);
};

// 3
const getResultMessages = (students) => {
  return students.map(({ name, score }) => ({
    name,
    message: isPassed(score) ? `${name}님은 합격입니다.` : `${name}님은 불합격입니다.`,
  }));
};

// 4
const getPassedStudents = (students) => {
  return students.filter((student) => isPassed(student.score));
};

// 5
const addPassedFlag = (students) => {
  return students.map((student) => ({ ...student, passed: isPassed(student.score) }));
};

// 6
const getStudentById = (students, id) => {
  return students.find((student) => student.id === id) ?? null;
};

// 7
const buildStudentSummary = (students) => {
  return {
    count: students.length,
    average: getStudentAverage(students),
    passedNames: getPassedStudents(students).map((student) => student.name),
  };
};

// 8
const getUniqueTracks = (students) => {
  return [...new Set(students.map((student) => student.track))];
};

// 9
const createScoreMap = (students) => {
  const scoreMap = new Map();
  students.forEach((student) => scoreMap.set(student.name, student.score));
  return scoreMap;
};

// 10
const sortStudentsByScoreDesc = (students) => {
  return [...students].sort((a, b) => b.score - a.score);
};

// 11
const removeStudentAt = (students, index) => {
  const remainingStudents = [...students];
  const [removedStudent] = remainingStudents.splice(index, 1);
  return { remainingStudents, removedStudent, success: !!removedStudent };
};

// 12
const cloneJsonData = (data) => JSON.parse(JSON.stringify(data));

// 13
const getStudentValue = (student, key) => student[key] ?? null;

// 14
const getStudentKeys = (student) => Object.keys(student);

// 15 트랙 종류를 key로, 학생 수를 value로 가지는 객체 반환
const countStudentsByTrack = (students) => {
  return students.reduce((acc, curr) => {
    if (!(curr.track in acc)) acc[curr.track] = 0;
    acc[curr.track]++;
    // NOTE: acc[curr.track] = (acc[curr.track] ?? 0) + 1;

    return acc;
  }, {});
};

// 16 트랙별 학생 수를 Map으로 반환
const countStudentsByTrackWithMap = (students) => {
  return students.reduce((acc, curr) => {
    acc.set(curr.track, (acc.get(curr.track) ?? 0) + 1);

    return acc;
  }, new Map());
};

// 17
const getStudentCity = (student) => student?.profile?.city ?? "도시없음";

// 18
const isSameReference = (leftValue, rightValue) => {
  return leftValue === rightValue;
  // NOTE: Object.is(leftValue, rightValue);
};

/* 
  LOG
*/

// console.log(1, getStudentAverage([])); // 0
// console.log(1, getStudentAverage(students));

// console.log(2, getTopStudent([])); // null
// console.log(2, getTopStudent(students));
// console.log("2-a", getTopStudents(students));

// console.log(3, getResultMessages(students));
// console.log(4, getPassedStudents(students));
// console.log(5, addPassedFlag(students));

// console.log(6, getStudentById(students, 2));
// console.log(6, getStudentById(students, 999));

// console.log(7, buildStudentSummary(students));
// console.log(8, getUniqueTracks(students));

// console.log(9, createScoreMap(students));
// console.log(9, createScoreMap(students).get("김하나"));

// console.log(10, sortStudentsByScoreDesc(students));
// console.log(10, sortStudentsByScoreDesc(students)[0].name);

// console.log(11, removeStudentAt(students, 1));
// console.log(11, removeStudentAt(students, 1).remainingStudents.length); // 3
// console.log(11, removeStudentAt(students, 1).success); // true
// console.log(11, removeStudentAt(students, 5).success); // false
// console.log(11, removeStudentAt(students, -1));

// console.log(12, cloneJsonData(students));
// console.log(12, cloneJsonData(students) === students); // false
// console.log("12-a", structuredClone(students)); // NOTE: built-in API

// console.log(13, getStudentValue(students[0], "track")); // "backend"
// console.log(13, getStudentValue(students[0], "city")); // null

// console.log(14, getStudentKeys(students[0]));

// console.log(15, countStudentsByTrack(students));
// console.log(16, countStudentsByTrackWithMap(students));
// console.log(16, countStudentsByTrackWithMap(students).get("backend")); // 3

// console.log(17, getStudentCity(studentWithProfile)); // "Seoul"
// console.log(17, getStudentCity(studentWithoutProfile)); // "도시없음"

// console.log(18, isSameReference(students[0], students[0])); // true
// console.log(18, isSameReference(students[0], { ...students[0] })); // false
