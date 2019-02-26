const expect = require('jest-matchers');
const TestSharedRoyaltyToken = artifacts.require('TestSharedRoyaltyToken');

contract('SharedRoyaltyTokenEnumerable', accounts => {
  const oneEthInWei = web3.utils.toWei('1', 'ether');
  let token;
  let tokenId;

  beforeEach(async () => {
    tokenId = web3.utils.asciiToHex('super duper awesome token id');
    token = await TestSharedRoyaltyToken.new();

    await token.mint(accounts[0], tokenId);
  });

  it('has zero initial franchisors', async () => {
    expect(await token.tokenFranchisorsTotal(tokenId)).toEqual(0);
  });

  // After two franchisors are added
  it('has two franchisors');
});
