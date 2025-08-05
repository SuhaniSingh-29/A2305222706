export function Log(stack, level, pkg, message) {
  fetch("http://20.244.56.144/evaluation-service/logs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      stack: stack.toLowerCase(),
      level: level.toLowerCase(),
      package: pkg.toLowerCase(),
      message
    })
  }).catch((err) => {
    console.error("Logging failed:", err);
  });
}

// Optional shorthands for convenience
export function logInfo(pkg, message) {
  Log("frontend", "info", pkg, message);
}

export function logError(pkg, message) {
  Log("frontend", "error", pkg, message);
}
