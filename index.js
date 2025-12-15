import express from 'express'
import cors from 'cors'

import patient from './modules/patients.js'
import doctor from './modules/doctors.js'
// import passw from './modules/passwoerdetail.js'
import pas from './modules/newpass.js'
import enq from './modules/equiry.js'
import mongoose, { connect } from 'mongoose'
const app=express()
app.use (cors());
app.use(express.json());

import dotenv from "dotenv"
dotenv.config();
let isConnected=false;

async function connectToMongoDB(){
    try{
        await
        mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        let isConnected=true;
        console.log("MongoDB connected successfully")
    } catch(err){
        console.error("MongoDB Connection is failed ",err.message);
        process.exit(1);
    }
};

app.use((req,res,next)=>{
    next();
})



// mongoose.connect("mongodb+srv://n443322y_db_user:dI9LGvOBNLmbfc8C@cluster0.pc9polr.mongodb.net/?appName=Cluster0")
// mongoose.connect("mongodb://localhost:27017/patientdetails")
app.post('/adds',(req,res)=>{
    patient.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})
app.post('/addDs',(req,res)=>{
    doctor.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})
app.get('/show',(req,res)=>{
    patient.find().then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})
app.get('/showdoct',(req,res)=>{
    doctor.find().then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})
app.get('/showbyadhar',(req,res)=>{
    patient.find().then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})

app.get('/details/:id',(res,req)=>{
  const did=res.params.id
  patient.findById({_id:did}).then(re=>req.json(re)).catch(er=>req.json(er))
})
app.get('/detailsdoc/:id',(res,req)=>{
  const did=res.params.id
  doctor.findById({_id:did}).then(re=>req.json(re)).catch(er=>req.json(er))
})

app.put('/addmadicine/:id',(res,req)=>{
   const di=res.params.id
   patient.findByIdAndUpdate({_id:di},{fees:res.body.feess,disease:res.body.disease,madicine:res.body.madicines, name:res.body.ename,
    age:res.body.eage,
    gender:res.body.egender, 
    contact:res.body.enumber,
    adhar:res.body.eadhar}).then(re=>req.json(re)).catch(er=>req.json(er))
}
)

app.put('/docaddlistdisease/:id',(res,req)=>{
   const di=res.params.id
   doctor.findByIdAndUpdate({_id:di},{fees:res.body.feess,spac:res.body.disease,listdisease:res.body.listds,name:res.body.ename,contact:res.body.enumber,coal:res.body.ecoal,email:res.body.eemail}).then(re=>req.json(re)).catch(er=>req.json(er))
}
)


app.delete('/delete/:id',(res,req)=>{
    const isd=res.params.id;
    patient.findByIdAndDelete({_id:isd}).then(re=>req.json(re)).catch(er=>req.json(er))
})

app.delete('/docdelete/:id',(res,req)=>{
    const iscd=res.params.id;
    doctor.findByIdAndDelete({_id:iscd}).then(re=>req.json(re)).catch(er=>req.json(er))
})

app.put('/logins/:id',(res,req)=>{
    var id=res.params.id
    pas.findByIdAndUpdate({_id:id},{count:res.body.count,name:res.body.name,password:res.body.password}).then(re=>req.json(re)).catch(er=>er.json(er));
})
app.get('/check/:id',(res,req)=>{
    var id=res.params.id
    pas.findById({_id:id}).then(re=>req.json(re)).catch(er=>er.json(er));
})




app.post('/enqu',(req,res)=>{
    enq.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er));
    // productschema.create(req.body).then(re=>res.json(re)).catch(er=>res.json(er))
})

module.exports=app

// app.listen(process.env.PORT,()=>{
//     console.log("server started")
// })