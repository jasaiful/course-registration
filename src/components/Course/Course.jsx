
import PropTypes from 'prop-types';

const Course = ({ course }) => {

    const { course_name } = course;
    return (
        <div>
            <ol> {course_name} </ol>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object
};

export default Course;
