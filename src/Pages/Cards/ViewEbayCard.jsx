import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom'
import axios from 'axios';
import {CardService} from "../../services/CardService"
//import Spinner from "../../components/Spinner/Spinner"
import {format} from "date-fns";



let ViewEbayCard = () => {
    console.log("Bonjour ibrahim");
    let {cardId} = useParams();
    console.log(cardId);
    let [card, setCard] = useState([]
    );

    useEffect(() => {
        const fetchCard = async () => {
            const result = await axios(
                `http://localhost:8090/ebaycard/find/${cardId}`,
            );

            setCard(result.data);
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
                            <p className="h3 text-warning fw-bold">View card ebay</p>
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
                                                <p className="h3 text-success fw-bold">{card.titre}</p>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Description</p>
                                                <span className="fw-bold">{card.date} </span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                <p className="h4 text-secondary fw-bold  my-2">Responsabilities</p>
                                                <span className="fw-bold">{card.prix} </span>
                                            </li>

                                            <li className="list-group-item list-group-item-action">
                                                Application Closing Date: <span
                                                className="fw-bold">{ formatDate(card.date) }</span>
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
export default ViewEbayCard;