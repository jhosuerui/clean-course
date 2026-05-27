import axios from 'axios';

export class Httpclient{

    async get(url:string){
        const {data, status} = await axios.get(url);
        //console.log({status});
        return {data,status};
    }

}