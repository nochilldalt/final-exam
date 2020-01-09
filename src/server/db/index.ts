import * as mysql from 'mysql'
import config from '../config'
import books from './books'
import users from './users'
import tokens from './tokens'

const pool = mysql.createPool(config.mysql)

export const Query = (query: string, values?: any) => {
    return new Promise((resolve, reject) => {
      pool.query(query, values, (err, result) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(result);
        }
      });
    });
  };

export default{
    books, users, tokens
}