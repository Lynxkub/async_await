

async function numFacts(){
    let res = await Promise.all([
        axios.get('http://numbersapi.com/random'),
        axios.get('http://numbersapi.com/random'),
        axios.get('http://numbersapi.com/random'),
        axios.get('http://numbersapi.com/random'),
        axios.get('http://numbersapi.com/random')
    ]
    )
    for (let i of res){
        console.log(i.data)
    }
}


numFacts();



let div = $('#cardArea')
const deck = {
    async init () {
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/')
        this.deckID = res.data.deck_id
    },
    async drawCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`)
        this.card = `${res.data.cards[0].value} of ${res.data.cards[0].suit}`
        
        div.append(`<img src=${res.data.cards[0].image}>`)
    }
}
console.log(deck.init())
$('#drawCard').on('click' , function(){
    deck.drawCard()
})