const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true
  },
  slackID: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)
