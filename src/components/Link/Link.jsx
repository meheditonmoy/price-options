import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mx-4 hover:bg-gray-800 px-4 md:px-6 rounded-2xl  hover:text-center" ><a href={route.path}>
        {route.name}</a></li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;