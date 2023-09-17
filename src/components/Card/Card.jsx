import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';



const Card = ({ card, handleToSelectCourse, setCount }) => {
    const { course_name, img, details, price, credit } = card;

    return (
        <div className='bg-white p-3 w-full rounded-xl'>
            <div className='space-y-3'>
                <img src={img} alt={`cover picture of course ${course_name}`} />
                <h3 className='text-lg font-semibold' >{course_name}</h3>
                <p className='text-sm'>{details}</p>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>
                    <button><FaDollarSign/></button>
                    <p>Price: {price}</p>
                    </div>
                    <div className='flex gap-2'>
                        <button><FaBookOpen/></button>
                        Credit: {credit}
                    </div>

                </div>
                <button onClick={() => { handleToSelectCourse(card); setCount(credit); }}
                    className='w-full bg-blue-500 rounded-xl p-1 text-white'>Select</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleToSelectCourse: PropTypes.func,
    setCount: PropTypes.func
}


export default Card;