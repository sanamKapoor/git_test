function App() {
    const [count, setCount] = useState(0);

    console.log('test');

    const unused = 'this will cause a lint error';

    return (
        <>
            <h1>Hello World</h1>
            <button onClick={() => setCount(count + 1)}>
                count is {count}
            </button>
        </>
    );
}

export default App;
