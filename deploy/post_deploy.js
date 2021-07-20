const hre = require('hardhat');
const { getChainId, ethers } = hre;

// FIXME
const OWNER = '';
const FACTORY_ADDRESS = '';

module.exports = async ({ deployments }) => {
    console.log('running deploy script');
    console.log('network id ', await getChainId());

    const GovernanceMothership = await ethers.getContractFactory('GovernanceMothership');

    const governanceMothership = GovernanceMothership.attach((await deployments.get('GovernanceMothership')).address);

    const addFactoryTxn = await governanceMothership.addModule(FACTORY_ADDRESS);
    await addFactoryTxn.wait();

    const transferOwnershipTxn = await governanceMothership.transferOwnership(OWNER);
    await transferOwnershipTxn.wait();
};

module.exports.skip = async () => true;
