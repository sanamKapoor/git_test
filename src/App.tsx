import { useState } from 'react';
import './index.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center text-white mb-16">
                    <h1 className="text-5xl font-bold mb-6">
                        Welcome to Our Platform
                    </h1>
                    <p className="text-xl mb-8">
                        Experience the next generation of web development
                    </p>

                    {/* Counter Card */}
                    <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                        <p className="text-gray-800 mb-4">Click Counter Demo</p>
                        <button
                            onClick={() => setCount(count + 1)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Count is {count}
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 text-white">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-3">
                            Feature 1
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-3">
                            Feature 2
                        </h3>
                        <p>
                            Sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                        </p>
                    </div>
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-3">
                            Feature 3
                        </h3>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
