import React from "react";

const JsxExamples = () => {
  const userName = "Leonardo";

  const user = {
    name: "Ayrton",
    lastName: "Senna",
  };

  function getGreeting(name) {
    return `Olá ${name}`;
  }

  return (
    <div>
      <h2>Conteúdo que o usuário vai ver</h2>
      {/* Listando dados do usuário */}
      <p>O nome do usuário é: {userName}</p>

      <p>
        Usuário: {user.name} {user.lastName}
      </p>

      <p>{2 + 2}</p>

      <p>{getGreeting(userName)}</p>
      <p>{getGreeting("Jeff")}</p>
    </div>
  );
};

export default JsxExamples;
