import instance from '../APIService';


export const getSearchData = (param: string) => 
    instance.get('?api-version=2021-04-30-Preview&search='+param);



