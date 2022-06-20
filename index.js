const express = require ('express')
const app = express()

app.get ('/',(req,res)=>{
const hellomessage="Bonjour Docker"
	res.send(hellomessage)
})
app.listen(8083, () => {
	console.log ("serveur prêt")
})



