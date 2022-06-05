const HelloWorld = artifacts.require('./HelloWorld.sol');

contract('HelloWorld',() => {
    it('HelloWorld Pass test',async () => {
        const helloWorld = await HelloWorld.deployed()
        const result = await helloWorld.displayHelloWorld();
        assert(result === 'HelloWorld');
    });
});
