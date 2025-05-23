
const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

const serviceAccount = require('./firebaseServiceAccountKey.json');

initializeApp({
    credential: cert(serviceAccount)
});

const auth = getAuth();

module.exports = { auth };