import { useState } from "react";
import { Hero } from "../components/Hero"
import { ListOfProducts } from "../components/ListOfProducts"
import { AppLayout } from "../layout/AppLayout"
import blackJeans from '/homepage/list/black-jeans.jpg';
import blueJeans from '/homepage/list/blue-jeans.jpg';
import greenHoddie from '/homepage/list/hoddie-green.jpg';
import redHoddie from '/homepage/list/hoddie-red.jpg';

export const HomePage = () => {

    const [jeans, setJeans] = useState([blackJeans, blueJeans,
        blackJeans, blueJeans, blackJeans]);

    const [hoddies, setHoddies] = useState([greenHoddie, redHoddie,
        greenHoddie, redHoddie, greenHoddie]);
    

    return(
        <AppLayout>
            <Hero />
            <ListOfProducts title="Jeans" products={jeans}/>
            <ListOfProducts title="Hoddies" products={hoddies}/>

        </AppLayout>
    )
}