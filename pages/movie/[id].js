import Menu from '../../components/Menu';
import { useRouter } from 'next/router';

export default function Movie() {
    const router = useRouter();
    const { name } = router.query;

    return (
        <div style={{textAlign: 'center'}}>
            <Menu />
            <h2>You&apos;re watching...</h2>
            <h1>{name}</h1>
            <div>
                <button onClick={() => router.push('/')}>Go Home</button>
            </div>
        </div>
    )
}