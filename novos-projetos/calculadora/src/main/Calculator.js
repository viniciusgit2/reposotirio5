import React, { Component } from 'react'
import './Calculator.css'
import './index.js'
import Button from '../components/Button'
import Display from '../components/Display'

import registerserviceWorker from './registerserviceWorker'
import ReactDom from 'ReactDom'
ReactDOM.render(

    <div>
        <h1>Calculadora</h1>
        <Calculator />
    </div>
, document.getElementById('root'));
registerserviceWorker()



