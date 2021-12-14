//add button to go back to login from sign up
const express=require("express")
const { appendFile } = require("fs")
var http = require('http');
var fs = require('fs');
const path=require("path")
const bodyParser = require('body-parser')
const app=express()

app.use(express.static(__dirname, { index: 'login.html' }));

const JWT_SECRET="bkfdjgaewehoigm,dfb746589!#@%$bjn$#^%67648sbjvskjbhijgbkfn346sj"


const mongoose = require('mongoose')
const User = require('./model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
app.use(bodyParser.json())

const mongoDB='mongodb://Nireeksha:m215540@cluster0-shard-00-00.pyaa4.mongodb.net:27017,cluster0-shard-00-01.pyaa4.mongodb.net:27017,cluster0-shard-00-02.pyaa4.mongodb.net:27017/password?ssl=true&replicaSet=atlas-tgrcvn-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedtopology:true}).then(()=>{
  console.log("connected");}).catch(err=>console.log(err))

 app.post('/api/login', async (req, res) => {
	const { username, password } = req.body
	
	const user = await User.findOne({ username }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid username/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const token = jwt.sign(
			{
				id: user._id,
				username: user.username
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: token })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/register', async (req, res) => {
	const { username, password: plainTextPassword,name,address } = req.body
//const password=await bcrypt.hash(plainTextPassword,10)
	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			password,
			address,
			name
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })        
})

app.listen(9999, () => {
	console.log('Server up at 9999')
})