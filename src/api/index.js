
// fake api
import axios from 'axios';

const BASE_URL = '/';
const FETCH_TRANSACTION_URL = BASE_URL + 'api/region_query';
const FETCH_MAP_TRANSACTION_URL = BASE_URL + 'api/transactions_map';

const fetchRegions = () => {
  let data = [];
  let numFraud = 0;
  let nonFraud = 0;
  for (let i = 0; i < 10; i++) {
      let obj = {
              id: (i+100),
              city: "Test city",
              county: "Random county",
              name: "Name",
              time: new Date().getTime()/1000,
              value: (Math.random() * 100 + 100).toFixed(2),
              account: (i + 1000),
              lat: 39.1 + (-10 + Math.random()*20),
              lng: -95.1 + (-20 + Math.random()*30),
              fraud: Math.random() > 0.9? 1: 0
      };

      obj.fraud == 1 ? (numFraud += 1) : (nonFraud += 1)
      data.push(obj);
  }
  return new Promise((resolve, reject) => {
    return resolve({
       data: {
         Transactions: data,
         Fraud: numFraud,
         NonFraud: nonFraud
       }
    })
  });
}

const fetchTransactions = () => {
  let data = [];
  let numFraud = 0;
  let nonFraud = 0;
  let numRand = Math.floor(Math.random() * 500) + 10;
  for (let i = 0; i < numRand; i++) {
      let obj = {
              id: (i+100),
              lat: 39.1 + (-10 + Math.random()*20),
              lng: -95.1 + (-20 + Math.random()*30),
              fraud: Math.random() > 0.9? 1: 0
      };

      obj.fraud == 1 ? (numFraud += 1) : (nonFraud += 1)
      data.push(obj);
  }
  return new Promise((resolve, reject) => {
    return resolve({
      data: {
        Transactions: data,
        Fraud: numFraud,
        NonFraud: nonFraud
      }
    });
  });
}

export {
  fetchRegions,
  fetchTransactions
}
