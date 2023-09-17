import PropTypes from 'prop-types';
import Course from '../Course/Course';

const Cart = ({ course, totalCredit, remaining, totalCoursePrice }) => {
    
    return (
        <div className="md: w-1/4 mx-auto bg-white h-full rounded-xl p-2">
            <div>
                <h4 className="text-lg font-semibold text-blue-500 my-5">Credit Hour Remaining {remaining} hr</h4>
                <hr />
            </div>
            <div>
                <h4 className="text-lg font-semibold my-5">Course Name</h4>
                {
                    course.map(course => <Course key={course.id} course={course}></Course>)
                }
                {/* <h4>Course: {course.length}</h4> */}
                <br />
                <hr />
                <h4 className="font-semibold my-5">Total Credit Hour: {totalCredit} </h4>
            </div>
            <div>
                
                <hr />
            </div>
            <div>
                <h4 className="text-lg font-semibold my-5">Total Price: {totalCoursePrice} USD</h4>
            </div>

        </div>
    );
};

Cart.propTypes = {
    course: PropTypes.array,
    totalCredit: PropTypes.func,
    remaining: PropTypes.func,
    totalCoursePrice: PropTypes.func
};

export default Cart;