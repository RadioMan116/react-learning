import React, { useEffect } from 'react';
// import Basket from './basket';
// import Navigation from './navigation';
import Tabs from './tabs';
import Restaurant from './restaurant';
import Basket from './basket';
import { loadRestaurants } from "../redux/actions";
import { connect } from 'react-redux';
import { restaurantsListSelector, restaurantsLoadedSelector, restaurantsLoadingSelector } from '../redux/selectors';
import Loader from './loader';

function Restaurants({restaurants, loadRestaurants, loading, loaded}){
    useEffect(() => {
       if(!loading && !loaded) loadRestaurants();
    }, [loadRestaurants, loading, loaded])

    if(loading) return <Loader/>;
    if(!loaded) return 'No data :(';

    const tabs = restaurants.map( restaurant => ({
        title: restaurant.name,
        content: <Restaurant restaurant={restaurant}/>
    }));

    return <div className={'restaurants'}><Tabs tabs={tabs}/><Basket/></div>;
}

export default connect(
    (state) =>({
        restaurants: restaurantsListSelector(state),
        loading: restaurantsLoadingSelector(state),
        loaded: restaurantsLoadedSelector(state),
    }),
    {loadRestaurants}
)(Restaurants);




// const [activeId, setActiveId] = useState(restaurants[0].id);

    // const activeRestaurant = useMemo(
    //     () => restaurants.find( restaurant => restaurant.id === activeId), 
    //     [activeId, restaurants]
    // );

    // return (
    //     <div>
    //         <Navigation 
    //             restaurants={restaurants} 
    //             onRestaurantClick={setActiveId}
    //         />
    //         <div className={'flex'}>
    //             <Restaurant activeRestaurant={activeRestaurant}/>
    //             <Basket/>
    //         </div>
    //     </div>
    // )