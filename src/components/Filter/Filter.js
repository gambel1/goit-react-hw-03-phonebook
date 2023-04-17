import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

export default function Filter(props) {
  const { filterValue, filterContact } = props;
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filterValue}
        onChange={filterContact}
      />
    </FilterWrapper>
  );
}
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  filterContact: PropTypes.func.isRequired,
};
