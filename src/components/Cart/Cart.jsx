import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Cart = ({ course }) => {
    
    return (
        <div className="md: w-1/4 mx-auto bg-white h-full rounded-xl p-2">
            <div>
                <h4 className="text-lg font-semibold text-blue-500 my-5">Credit Hour Remaining 7 hr</h4>
                <hr />
            </div>
            <div>
                <h4 className="text-lg font-semibold my-5">Course Name</h4>
                {
                    course.map(course => <Course key={course.id} course={course}></Course>)
                }
                <br />
                <hr />
            </div>
            <div>
                <h4 className="font-semibold my-5">Total Credit Hour: </h4>
                <hr />
            </div>
            <div>
                <h4 className="text-lg font-semibold my-5">Total Price: USD</h4>
            </div>

        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.array
};

export default Cart;