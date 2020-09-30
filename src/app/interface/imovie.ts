import { ICommentMovie } from './icomment-movie';
export interface IMovie {
    id:number,
    name:string,
    subject:string,
    movieTime:string,
    productCountry:string,
    Director:string,
    date:string,
    description:string,
    imgUrl:string,
    star:number,
    numberOfReviews:number,
    comment:ICommentMovie[],
    numberExist:number,
    price:number

}

