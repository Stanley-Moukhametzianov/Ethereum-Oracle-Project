import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { Component } from 'react'
import Submit from '../components/submit'

class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/98.css" />
        </Head>
          <div id="page">
            <div id="titlebar">
              <h1>Oracle - Notepad</h1>
            </div>
            <div id="bar">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pictures</a></li>
                <li><a href="#">My Bio</a></li>
                <li><a href="#">My Company</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div id="main">
              <h1>Notepad.exe, a stock market oracle created by Stanley Moukhametzianov</h1>
            <Submit />
              <p>This app uses a ChainLink oracle launched on the kovan test network. The oracle is connected to the polygon stocks API. Once the function is called, a get request is made to the API with the inputted stock ticker and date. Lastly, the result is filtered and returns the closing price of the stock on that given day. </p>
              <p>If no data can be found or incorrect data is submitted, then an error message is displayed and will encourage the user to try again. Note, the oracle takes around 15 to 30 seconds to return a response.</p>
              <h1>Additional Info</h1>
            <p>The smart contract is deployed at 0xA5342e4a26e3434f6cfE72D1636243eF28a56c88. For more information as to what the smart contract looks like or a demo on how it works feel free to go to my github profile: <b><a href="#">GitHub page. </a></b></p>
            
            </div>
            <div id="footer"> </div>
        </div>
      </div>
    )
  }
}

export default Home;

//"https://api.polygon.io/v1/open-close/AAPL/2020-10-14?adjusted=true&apiKey=RePj98UIQR5RUQ4OEG9r7YYHbFIap16T"