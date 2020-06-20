import React, { useState, useEffect } from 'react';
import './assets/css/main.scss';

//COMPONENTS
import Loading from './components/loading/index.jsx';

function App(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {
            const url = props.data;
            const response = await fetch(url);
            const data = await response.json();

            setTimeout(() => setLoading(false), 500);
        }

        fetchData();

    }, [loading]);


    return (
        loading ? <Loading /> :
            <div>
                {/* SOME CODE HERE */}
            </div>
    );
}

export default App;