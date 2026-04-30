function App() {
  return (
    <>
      {/* customizing your theme */}
      <div className="bg-midnight">Text</div>

      <div className="bg-red-500">Text</div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
      </div>

      <p className="font-script">This will use the Great Vibes font family.</p>

      {/* overview */}
      <div className="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
        <button>E</button>
        <button>F</button>
        <button>G</button>
      </div>

      <h1 className="font-poppins">This headline will use Poppins.</h1>

      <div style={{ backgroundColor: 'var(--color-mint-500)' }}>Text1</div>

      <div className="bg-mint-500">Text</div>
    </>
  );
}

export default App;
