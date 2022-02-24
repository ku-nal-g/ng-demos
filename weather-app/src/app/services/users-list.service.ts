import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor() { }

  getData() {
    const data = [
      {
        id: 1,
        first: 'Sohan',
        last: 'Kumar',
        email: 'xyz@getMaxListeners.com',
      },
      {
        id: 2,
        first: 'Mohan',
        last: 'lal',
        email: 'abc@getMaxListeners.com',
      },
      {
        id: 3,
        first: 'Tushar',
        last: 'Gope',
        email: 'json@getMaxListeners.com',
      },
      {
        id: 4,
        first: 'Rocky',
        last: 'Ram',
        email: 'api@getMaxListeners.com',
      },
      {
        id: 5,
        first: 'Vishnu',
        last: 'pukar',
        email: 'yaml@getMaxListeners.com',
      },
      {
        id: 6,
        first: 'Shinu',
        last: 'Kumar',
        email: 'xml@getMaxListeners.com',
      },
      {
        id: 7,
        first: 'Shifu',
        last: 'lal',
        email: 'xyz@getMaxListeners.com',
      },
      {
        id: 8,
        first: 'Mohan',
        last: 'Kumar',
        email: 'morgan@getMaxListeners.com',
      },
      {
        id: 9,
        first: 'Vipul',
        last: 'Keshav',
        email: 'xyz@getMaxListeners.com',
      },
      {
        id: 10,
        first: 'Shyam',
        last: 'Sundar',
        email: 'broker@getMaxListeners.com',
      },
    ]
    return data;
  }
}
