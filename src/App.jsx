import SceneCanvas from "./SceneCanvas";

function App() {
  return (
    <>
      <form name="contact" method="POST" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" />
      </form>

      <SceneCanvas />
    </>
  );
}

export default App;
