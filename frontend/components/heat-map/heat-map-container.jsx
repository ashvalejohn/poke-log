import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeatMap from './heat-map';
import { fetchBleeds } from '../../actions/bleed-actions';


 const mapStateToProps = state => ({
    // would ideally have all bleeds in an array
    //  bleeds: state.bleeds
 });


const mapDispatchToProps = dispatch => ({
    // Need to fetch all pokes with bleeds, then just have array of bleeds
    // fetchPokes: date => dispatch(fetchPokes(date))
});


export default withRouter(connect(null, null)(HeatMap));