import Link from 'next/link';
import Menu from '../components/Menu';
import fetch from 'isomorphic-unfetch';

export default function Movies(props) {
    const { movies } = props.movies;
    return (
        <div style={{textAlign: 'center'}}>
            <Menu />
            <h1>You are in Movies page.</h1>

            {
                movies.map((movie, index) => (
                    <Link key={index} href={
                        { pathname: `/movie/${movie.id}`, query: { name: movie.name } }
                    }>
                        <a style={{marginRight: 20}}>{movie.name}</a>
                    </Link>
                ))
            }
        </div>
    )
}

Movies.getInitialProps = async () => {
    const res = await fetch('https://run.mocky.io/v3/91deddd6-25fa-4505-b160-aeaa8e79c1f3');
    const movies = await res.json();
    return { movies };
}