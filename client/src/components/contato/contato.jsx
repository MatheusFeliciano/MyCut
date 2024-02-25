import "./index.css";

export default function Contato() {
  return (
    <section className="contato">
      <h1>Fale com a gente</h1>

      <div className="formulario">
        <h2>Preencha o formulário</h2>

        <div className="inputs">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Contato" />
          <button>Enviar</button>
        </div>
      </div>
    </section>
  );
}
