pragma solidity ^0.8.4;

contract Mood{

    string mood;

    function getmood() public view  returns (string memory) {
        return mood;
        
    }
    function setMood(string memory _mood) external{
        mood = _mood;
    } 
}