import { Link, useLocation, useNavigate } from 'react-router-dom';
import courses from '../data/courses';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

const SORT_KEYS = ['id', 'slug', 'title'];

const sortCourses = (courses, key) => {
  const sortedCourses = [...courses];

  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));

  return sortedCourses;
};

const Courses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const parsedSearch = queryString.parse(location.search) || {};
  const [sortKey, setSortKey] = useState(parsedSearch.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((course) => (
        <div key={course.id}>
          <Link to={`${course.slug}`} className="couseLink">
            {course.title}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Courses;
