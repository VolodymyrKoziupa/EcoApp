import {mocks} from './mock';
import camelize from 'camelize';

export const companiesRequest = (location) => {
  return new Promise((resolve, reject)=>{
    const mock = mocks[location];
    if(!mock) {
      reject ('not found');
    }   
    resolve(mock);
  });
};


export const companiesTransform =  ({results =[]}) =>{
  const mappedResults = results.map((company) =>{
        
    return{
      ...company,
      address: company.vicinity
    };
  });
  return camelize(mappedResults);
};

