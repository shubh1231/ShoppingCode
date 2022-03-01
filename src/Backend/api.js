// const bodyparser = require('bodyparser');
// const cors = require('cors');
// const multer = require('multer');
// const express = require('express');
// const app = express;

// const port = 8080 ;
// app.use(cors())
// app.use(bodyparser.json())

// app.get('/productlist', (req,res)=>{
// console.log("product is uploading")
// res.send({message : "this is the message"})
// })   
// const storage = multer .diskStorage({
//     destination : function (req , file ,cb ){
//         console.log ("file submitted ",  req.file)
//         cb (null , "uploads")
//     }
// filename: function (req, file, cb) {
//         console.log("File submitted: ", req.file);
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//       cb(null, file.fieldname + '-' + uniqueSuffix)
//     }


// })

