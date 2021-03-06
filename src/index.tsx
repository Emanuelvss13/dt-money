import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Desenvolvimento Web',
          type: 'deposit',
          category: 'development',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Pessoal',
          amount: 1000,
          createdAt: new Date('2021-02-14 11:00:00')
        },
        {
          id: 3,
          title: 'Roúpas',
          type: 'withdraw',
          category: 'Pessoal',
          amount: 500,
          createdAt: new Date('2021-02-16 15:00:00')
        },
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data =JSON.parse(request.requestBody)

      return schema.create('transactions', data)
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);