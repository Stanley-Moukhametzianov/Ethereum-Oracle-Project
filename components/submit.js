import React, { Component } from 'react';
import web3 from '../ethereum/web3';
import PopUp from './popUp';
import contract from '../ethereum/contract';

class Submit extends Component {
    state = {
        user: '',
        ticker: '',
        date: '',
        display: false,
        title: '',
        body: '',
        data: '',
    }
    componentDidMount() {
    
            window.ethereum.on('accountsChanged', () => this.getAccount());
        
        contract.events.newValue((err, events) => {
            
            this.setState({
                title: "Success! The oracle has spoken. :D",
                body: ` On ${this.state.date} the closing value of ${this.state.ticker} was $${events.returnValues.value}.`
            });
                this.toggle();
            })
    }

    toggle = () => {
        this.setState({display: !this.state.display})
    }
    onSubmit = async () => {
        try {
            await this.getAccount();
            await contract.methods.requestVolumeData(`https://api.polygon.io/v1/open-close/${this.state.ticker}/${this.state.date}?adjusted=true&apiKey=RePj98UIQR5RUQ4OEG9r7YYHbFIap16T`).send({
                from: this.state.user,
            });
            
        }
        catch(err){
            this.setState({ title: "Error! Something went wrong", body: err.message });
            this.toggle();
        }

    }
    getAccount = async () => {
         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        this.setState({ user: account });
    }

    render() {
        return(
            <div>
                <div className="field-row-stacked" style={{width: '200px'}}>
                    <label
                        htmlFor="text18">Stock Ticker Symbol (Ex. AAPL)
                    </label>
                    <input
                        value={this.state.ticker}
                        onChange ={event => this.setState({ ticker: event.target.value })}
                        id="text18"
                        type="text" />
              </div>
              <div className="field-row-stacked" style={{width: '200px'}}>
                <label htmlFor="text19">Enter Date (Ex. 2021-10-14)</label>
                    <input
                        value={this.state.date}
                        onChange ={event => this.setState({ date: event.target.value })}
                        id="text19"
                        type="text" />
                </div>
                <button onClick={this.onSubmit} className="center submit">Submit</button>
                
                {this.state.display ? <PopUp title={this.state.title} body={this.state.body} toggle={this.toggle }/>: null}
            </div>
        )
    }
}

export default Submit;