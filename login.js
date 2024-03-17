// resources/js/Pages/Auth/Login.vue
async function loginWeb3() {
    // return 1;
    if (! window.ethereum) {
        alert('MetaMask not detected. Please try again from a MetaMask enabled browser.')
    }

    const web3 = new Web3(window.ethereum);

    const message = [
        "I have read and accept the terms and conditions (https://example.org/tos) of this app.",
        "Please sign me in!"
    ].join("\n")

    const address = (await web3.eth.requestAccounts())[0]
    const signature = await web3.eth.personal.sign(message, address)

    return useForm({ message, address, signature }).post('/login-web3')
}