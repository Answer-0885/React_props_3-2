import PropTypes from 'prop-types';
import Item from './Item';

const Listing = (props) => {
  return (
    <div className='item-list'>
      {
        props.items.map((item) => 
        <Item date={item} key={item.listing_id}
         />
         )
      }
    </div>
  );
}

Listing.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Listing;