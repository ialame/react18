import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import {CardService} from "../../services/CardService"
//import Spinner from "../../components/Spinner/Spinner"
import {format} from "date-fns";



let ViewPokemonCard = () => {
    console.log("Bonjour ibrahim");
    let {pokemonCardId} = useParams();
    console.log(pokemonCardId);
    let [card, setCard] = useState([]
    );

    useEffect(() => {
        const fetchCard = async () => {
            const result = await axios(
                `http://localhost:8090/pokemoncard/find/${pokemonCardId}`,
            );

            setCard(result.data);
            console.log(card);
        };

        fetchCard();
    }, []);


    /*useEffect(async () => {

            //setState({...state,loading: true})
            let response = await CardService.getEbayCard(cardId);
            setCard(response.data)
            console.log("Bonjour ibrahim 1");
            //console.log(card);
            console.log("Bonjour ibrahim 2");

    },[]);*/

    //let {loading,card,errorMessage} = state;
    console.log("oui oui");
    console.log(card);
    const formatDate = (date) => {
        return format(new Date(date), "MMMM do, yyyy H:mma")
    }


    return(
        <React.Fragment>
            <section className="view-vacancy-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View card pokemon</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet beatae,
                                debitis ducimus enim molestias nam nihil non nostrum nulla omnis quam quidem quod recusandae
                                repellendus sequi sint soluta.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                //loading ? <Spinner/>:<React.Fragment>
                <React.Fragment>
                    {
                        Object.keys(card).length>0 &&
                        <section className="view-vacancy mt-3">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Id</p>
                                                <p className="h3 text-success fw-bold">{card.id}</p>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Card</p>
                                                <p className="h3 text-success fw-bold">{card.card}</p>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Description</p>
                                                <span className="fw-bold"> {card.Recherche}</span>

                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Responsabilities</p>
                                                <span className="fw-bold">{card.discriminator} </span>
                                            </li>

                                            <li className="list-group-item list-group-item-action">
                                                Application Closing Date: <span
                                                className="fw-bold">{ card.enExpansion }</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-2">
                                        <Link to={'/ebaycard/all'} className="btn btn-warning">Back</Link>
                                    </div>



                                </div>

                            </div>
                        </section>
                    }

                </React.Fragment>
            }

        </React.Fragment>
    );
}
export default ViewPokemonCard;