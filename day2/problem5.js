const MIN_PORT_VALUE = 1;
const MAX_PORT_VALUE = 65535;

const buildServerUrl = (host, portValue, useHttps) => {
  if (!host.trim()) return "host가 필요합니다.";

  const portValueNum = Number(portValue.trim());
  if (!Number.isFinite(portValueNum)) return "port는 숫자여야 합니다.";
  if (!Number.isInteger(portValueNum)) return "port는 정수여야 합니다.";

  if (portValueNum < MIN_PORT_VALUE || portValueNum > MAX_PORT_VALUE) {
    return "port 범위가 올바르지 않습니다.";
  }

  const scheme = useHttps ? "https" : "http";
  return `${scheme}://${host}:${portValueNum}`;
};

console.log(buildServerUrl("localhost", "3000", false));
console.log(buildServerUrl("", "3000", false));
console.log(buildServerUrl("api.local", "abc", true));
console.log(buildServerUrl("api.local", "3000.5", true));
