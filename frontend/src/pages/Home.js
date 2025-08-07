import { useEffect, useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar'
import { check } from '../utils/auth';

export default function Home() {
    const [connected, setConnected] = useState(false);

    useEffect(() => {
        check().then((response) => {
            setConnected(response.connected === 'True');
        }).catch((error) => {
            console.error('Error during authentication:', error);
        });
    }, []);

    return (
        <>
            <Header connected={connected} />
            <SearchBar />
        </>
    );
}