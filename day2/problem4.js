const getCommandMessage = (command) => {
  switch (command) {
    case "start": {
      return "서버를 시작합니다.";
    }
    case "stop": {
      return "서버를 중지합니다.";
    }
    case "status": {
      return "서버 상태를 확인합니다.";
    }
    default: {
      return "알 수 없는 명령입니다.";
    }
  }
};

console.log(getCommandMessage("start"));
console.log(getCommandMessage("stop"));
console.log(getCommandMessage("status"));
console.log(getCommandMessage("abc"));
