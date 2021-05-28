import React, {useMemo} from "react";
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";
import Tabs from './tabs';
import { connect } from "react-redux";
import { averageRatingSelector } from "../redux/selectors";

function Restaurant({restaurant, averageRating}){
    const {id, name, menu, reviews} = restaurant;

    const tabs = [
        {title: 'Menu', content: <Menu menu={menu} restaurantId={id}/>},
        {title: 'Reviews', content: <Reviews reviews={reviews} restaurantId={id} />}
    ]

    return (
        <div>
            <div>
                <h1>{name}</h1>                
                <h4>Средний рейтинг ресторана: <Rate rating={averageRating}/> из 5</h4>
            </div>
            <Tabs tabs={tabs} />
        </div>
    )
}

export default connect((state, props) => ({
    averageRating: averageRatingSelector(state, props)
}))(Restaurant)