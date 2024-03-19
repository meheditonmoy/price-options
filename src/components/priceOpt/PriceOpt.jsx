import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOpt = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className='bg-blue-200 p-4 rounded-xl flex flex-col m-4 text-center'>
            <h2>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className='text-3xl'>{name}</h3>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="btn w-full mt-4 bg-green-900  text-white">Bye Now</button>
        </div>

    );
};

PriceOpt.propTypes = {
    option: PropTypes.object
}
export default PriceOpt;