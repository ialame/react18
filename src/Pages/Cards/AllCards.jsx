import React from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import { format } from "date-fns";
import Spinner from "../../components/Spinner/Spinner";
export default class AllCards extends React.Component {
    state = {
        cards: []
    }
    //formattedDate = date => format(date, "MMMM do, yyyy H:mma");
    componentDidMount() {
        axios.get(`http://localhost:8090/ebaycard/all`)
            .then(res => {
                const cards = res.data;
                console.log(cards)
                //cards.reverse();
                this.setState({cards});
            })
    }

    render() {
        return (
            <React.Fragment>
                <pre>{JSON.stringify(this.state.cards)}</pre>
                <section className="contact-search p-3">
                    <div className="container">
                        <div className="grid">
                            <div className="row">
                                <div className="col">
                                    <p className="h3 fw-bold">Cards Manager
                                        <Link to={'/vacancy/add'} className="btn btn-primary ms-2"> <i
                                            className="fa fa-plus-circle me-2"></i> New</Link>
                                    </p>
                                    <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Accusamus aperiam
                                        deleniti deserunt et laudantium nostrum quibusdam tempore ut? Assumenda debitis
                                        dolorem illum modi
                                        necessitatibus perferendis quibusdam quis quo soluta voluptas.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <form>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="text" className="form-control" placeholder="Serch Names"/>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-2">
                                                    <input type="submit" className="btn btn-outline-dark"
                                                           placeholder="Serch"/>
                                                </div>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {
                    <React.Fragment>
                        <section className="candidate-list">
                            <div className="container">
                                <div className="row">
                                    {
                                        //this.state.cards.length >0 &&
                                        this.state.cards.map(card =>{
                                            return(
                                                <div className="col-md-6" key={card.id}>
                                                    <div className="card my-2">
                                                        <div className="card-body">
                                                            <div className="row align-items-center d-flex justify-content-around">

                                                                <div className="col-md-4">
                                                                    <img src={card.img} alt="" className="img-fluid candidate-img"/>

                                                                </div>
                                                                <div className="col-md-7">
                                                                    <ul className="list-group">
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Titre: <span className="fw-bold">{card.titre}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Prix: <span className="fw-bold">{card.prix}$</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Date: <span className="fw-bold">{card.date}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Etat: <span className="fw-bold">{card.etat}</span>
                                                                        </li>
                                                                        <li className="list-group-item list-group-item-action">
                                                                            Qualité: <span className="fw-bold">{card.qualite}</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-1 d-flex flex-column align-items-center">

                                                                    <Link to={`/ebaycard/view/${card.id}`} className="btn btn-warning my-1">
                                                                        <i className="fa fa-eye"></i>
                                                                    </Link>
                                                                    <Link to={`/pokemoncard/view/${card.card.id}`} className="btn  btn-primary my-1">
                                                                        <i className="fa fa-address-card"></i>
                                                                    </Link>
                                                                    <button className="btn btn-danger my-1">
                                                                        <i className="fa fa-trash"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        })
                                    }



                                </div>
                            </div>
                        </section>
                    </React.Fragment>
                }


            </React.Fragment>
        )
    }
}