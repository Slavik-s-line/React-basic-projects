import './Filter.css';
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  selectAuthorFilter,
  setAuthorFilter,
  setOnlyFavouriteFilter,
  selectOnlyFavouriteFilter,
} from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const dispath = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const onlyFavouriteFilter = useSelector(selectOnlyFavouriteFilter);

  const handleTitleFilterChange = (e) => {
    dispath(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispath(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispath(resetFilters());
  };

  const handleOnlyFavouriteFilterChange = () => {
    dispath(setOnlyFavouriteFilter());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavouriteFilter}
              onChange={handleOnlyFavouriteFilterChange}
            />
            Only favourite
          </label>
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
