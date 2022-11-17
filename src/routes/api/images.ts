import express from 'express'
const fs = require('fs')
const path = require('path')

const images = express.Router()

images.get('/', (req, res) => { 
  let {filename, width, height} = req.query
  // if(filename){
  //   fs.readFile(path.normalize(`src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`), (err: express.Errback, data: express.Response) => {
  //     if (err) throw err; // Fail if the file can't be read.
  //     res.writeHead(200, {'Content-Type': 'image/jpeg'});
  //     res.end(data); // Send the file data to the browser.
  // });
  // }else{
  //   res.send('Sorry, no images found to be displayed')
  // }
  try{
    if(filename){
      fs.readFile(path.normalize(`src/assets/imagesProcessed/${filename}-${width}x${height}.jpg`), (err: express.Errback, data: express.Response) => {
        if (err) throw err; // Fail if the file can't be read.
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(data); // Send the file data to the browser.
    });
    }
  }catch(err){
    res.send('Sorry, no images found to be displayed')
  }
});

export default images