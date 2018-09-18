import React from 'react';
import NewsSlider from '../../../widgets/NewsSlider/slider';
import NewsList from '../../../widgets/NewsList/newsList'

const NewsMain = () => {

    return (
        <div>
            <NewsSlider
                type="featured"
                settings={{
                    dots: true,
                    infinite:true,
                    autoplay:true,
                    autoplaySpeed:3000

                    }}
                start={0}
                amount={3}
            />
            <NewsList 
                type="cardMain"
                loadMore = {true}
                start = {3}
                amount= {3}
            />
        </div>
    )
}

export default NewsMain;