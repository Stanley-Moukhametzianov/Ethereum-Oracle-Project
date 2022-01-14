# Ethereum Oracle Project

* App uses react for the front end with web3 to make calls to the contract. 
* This contract is deployed on the Kovan test network at the address: 0xA5342e4a26e3434f6cfE72D1636243eF28a56c88.
* This app is designed to test a stock price oracle. :D 

## :books: General info


* This app allows users to view the closing price of a given stock on their selected day. The interesting part of the application is that the api call is made using a decentralized oracle. 

* **Note:** The contract is deployed on the Kovan test network. All eth that is used on the site is test ether. 

* Once the submit button is pressed users wait until a pop up appears displaying the closing price of the stock. 

## :camera: Demo



https://user-images.githubusercontent.com/66892566/149443974-5f0f08fa-f8b1-46c1-a358-f02159fd7e8e.mp4


## :computer: Smart Contract

* Oracle contract that is used in the website.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract APIConsumer is ChainlinkClient {
    using Chainlink for Chainlink.Request;
  
    uint256 public volume;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;
    
    event newValue(uint256 value);

    constructor() {
        setPublicChainlinkToken();
        oracle = 0xc57B33452b4F7BB189bB5AfaE9cc4aBa1f7a4FD8;
        jobId = "d5270d1c311941d0b08bead21fea7747";
        fee = 0.1 * 10 ** 18; // (Varies by network and job)
    }
    
    function requestVolumeData( string memory apiURL ) public returns (bytes32 requestId) 
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        
        request.add("get", apiURL);

        request.add("path", "close");
        
        return sendChainlinkRequestTo(oracle, request, fee);
    }
    
    function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
        emit newValue(_volume);
    }
}

```


## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [Stanley Moukhametzianov](https://github.com/Stanley-Moukhametzianov?tab=repositories), email: stanleymoukh@gmail.com
