const express=require('express')
const app= express()
require('dotenv').config()
var cors=require('cors')

const ObjectId = require("mongodb").ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors())
app.use(express.json())
require('dotenv').config()

const port =process.env.PORT || 5000



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4veww.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



async function run() {
    try {
      await client.connect();
      const profileInfo = client.db("cloudorigin").collection("profile");
      const  projectlist=client.db('cloudorigin').collection('todotask');


       //----------------profile info insert --------------------
  //   app.post('/profiledoc', async(req,res)=>{
  //       const newItem=req.body;
  //       const result = await profileInfo.insertOne(newItem);
  //       res.send(result);
  //     })

  //      // my profileinfo Collection API----------

  //    app.get('/getprofileinfo',  async (req, res) => {
        
  //       const email = req.query.email;
      
  //               const query = {email:email};
  //               const cursor =await profileInfo.find(query).toArray();
  //             //  const items = await cursor.toArray();
  //               res.send(cursor);
               
            
           
  //   })






  //      // my project Collection API----------

  //    app.get('/projectcount',  async (req, res) => {
        
  //       const email = req.query.email;
      
  //               const query = {email:email};
  //               const cursor =await projectlist.find(query).toArray();
  //             //  const items = await cursor.toArray();
  //               res.send(cursor);
               
            
           
  //   })

  //   app.get('/profileinfocollection/:id', async (req, res) => {
  //     const id = req.params.id;
      
  //     const query = { _id: ObjectId(id) };
  //     const result = await profileInfo.findOne(query);
  //     res.send(result);

  // });


          


  //     // update user information---------------------

  //     app.put('/profileinfocollection/:id', async(req, res) =>{
  //       const id = req.params.id;
  //       const updatedUser = req.body;
  //       const filter = {_id: ObjectId(id)};
  //       const options = { upsert: true };
  //       const updatedDoc = {
  //           $set: {
  //                name: updatedUser.name,
  //             email: updatedUser.email,
  //             phone: updatedUser.phone,
  //             address: updatedUser.address,
  //             city: updatedUser.city,
  //             state: updatedUser.state,
  //             country: updatedUser.country,
  //             companynam: updatedUser.companynam,
  //             occupation: updatedUser.occupation
  //           }
  //       };
  //       const result = await profileInfo.updateOne(filter, updatedDoc, options);
  //       res.send(result);

  //   })

    
  //   //////-------------------add project--------------------------

  //   app.post('/project', async(req,res)=>{
  //     const newItem=req.body;
  //     console.log('abc=',newItem);
  //     const result = await projectlist.insertOne(newItem);
  //     res.send(result);
  //   })

  
        //----------------insert item--------------------

        
        app.post('/products', async(req,res)=>{
          const newItem=req.body;
          const result = await projectlist.insertOne(newItem);
          res.send(result);
        })
  
       //   my project Collection API----------

     app.get('/projectcount',  async (req, res) => {
        
        const email = req.query.email;
      
                const query = {email:email};
                const cursor =await projectlist.find(query).toArray();
              //  const items = await cursor.toArray();
                res.send(cursor);
          
      
  })

  // update user information---------------------

  app.put('/updateuserinfo/:id', async(req, res) =>{
    const id = req.params.id;
    const updatedUser = req.body;
    const filter = {_id: ObjectId(id)};
    const options = { upsert: true };
    const updatedDoc = {
        $set: {
            email: updatedUser.email,
            name: updatedUser.name,
            address: updatedUser.address,
            phoneno: updatedUser.phoneno,
            profilelink: updatedUser.profilelink,
            owner: updatedUser.owner
        }
    };
    const result = await projectlist.updateOne(filter, updatedDoc, options);
    res.send(result);

})


    } finally {
      
      
    }
  }
  run()

















app.get('/',(req,res)=>{
    res.send('successfully run');
})












app.listen(port,()=>{

    console.log('run port ${port}')
    
    console.log(`run port ${port}`)
})