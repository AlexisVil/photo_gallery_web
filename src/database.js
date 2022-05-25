const mongoose = require('mongoose');

console.log(process.env.MONGODB_URI);

//'mongodb://0.0.0.0:27017/gallery_photos_db'
mongoose.connect(process.env.MONGODB_URI, {
keepAlive: true,    
useNewUrlParser: true,
useUnifiedTopology: true
})
    .then(db => console.log('DB is connected to'))
    .catch(err => console.error(err));
