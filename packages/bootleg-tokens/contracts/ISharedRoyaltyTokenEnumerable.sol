pragma solidity ^0.5.3;

contract ISharedRoyaltyTokenEnumerable {

  function tokenFranchisorsTotal(uint256 _token) public view returns (uint256 count);
  function tokenFranchisorsByIndex(uint256 _index, uint256 _token) public view returns (address franchisor);

  function tokenPaymentsTotal(uint256 _token) public view returns (uint256 count);
  function tokenPaymentsByIndex(uint256 _index, uint256 _token) public view returns (uint256 amount);

  function tokensOfFranchisorByIndex(uint256 _index, address _franchisor) public view returns (uint256 token);
}
