
import PropTypes from 'prop-types';

const Course = ({ course }) => {

    const { course_name, id } = course;
    return (
        <div>
            <ol>{id}.{course_name}</ol>
            
        </div>
        
    );
};

Course.propTypes = {
    course: PropTypes.object
};

export default Course;
