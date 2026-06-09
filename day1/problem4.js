const getTypeMessage = (value) => {
  const result = typeof value;

  if (result == "string") console.log("문자열입니다.");
  else if (result == "number") console.log("숫자입니다.");
  else if (result == "boolean") console.log("불리언입니다.");
  else console.log("아직 확인하지 않은 자료형입니다.");
};

getTypeMessage("JavaScript");
getTypeMessage(2026);
getTypeMessage(true);
getTypeMessage(undefined);
