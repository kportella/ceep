import ListaDeNotas from "./componentes/ListaDeNotas.jsx";


function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Titulo" />
        <textarea placeholder="Escreva sua nota"></textarea>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas />
    </section>
  );
}

export default App;
