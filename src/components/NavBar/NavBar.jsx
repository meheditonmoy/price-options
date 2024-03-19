import Link from "../Link/Link";

const NavBar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/products', name: 'Our Products' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '*', name: '404 Not Found' }
    ];

    return (
        <nav>
            <ul className="flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;