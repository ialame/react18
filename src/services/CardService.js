import axios from "axios";

export class CardService{
    static serverURL = `localhost:8090`;
    static getAllCards(){
        let dataURL = `${this.serverURL}/repeter`;
        return axios.get(dataURL);
    }
    static getEbayCard(cardId){
        let dataURL = `${this.serverURL}/ebaycard/find/${cardId}`;
        return axios.get(dataURL, {
            mode: 'cors',
            credentials: 'include'
        });
    }
    static createCard(card){
        let dataURL = `${this.serverURL}/card/add`;
        return axios.get(dataURL,card);
    }

}
