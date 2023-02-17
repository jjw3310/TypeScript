let num = 10;

function add(a: number, b: number) {
  return a + b;
}

function logMessage(message: string | null) {
  if (message) {
    message;
  }
}

const foo = {
  x: [1, 2, 3],
  bar: {
    name: "Fred",
  },
};

//연산자 체인 중간의 제너릭 타입을 조사하려면 메서드 이름을 조사하면 됩니다.
function restOfPath(path: string) {
  return path.split("/").slice(1).join("/");
}

// function getElement(elOrId: string | HTMLElement | null): HTMLElement {
//   if(typeof elOrId === 'object') {
//     return elOrId;
//   }
// }
//null 일 경우 typeof null = object이기 때문에 null을 체크해주지 않으면 에러 발생

function getElement(elOrId: string | HTMLElement | null): HTMLElement | null {
  if (elOrId === null) {
    return null;
  }
  if (typeof elOrId === "object") {
    return elOrId;
  } else {
    const el = document.getElementById(elOrId);
    return el;
  }
  // 위 조건에 모두 해당되지 않으면, 타입 에러가 발생합니다.
  // 따라서, null을 리턴하도록 처리합니다.
  return null;
}

const response = fetch('http://example.com');