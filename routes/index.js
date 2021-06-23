var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var http = require('http');
var sendMail = require("./email");

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('site/index');
});
router.get('/web_development', function (req, res, next) {
    res.render('site/web_development');
});
router.get('/about', function (req, res, next) {
    res.render('site/about');
});
router.get('/blog', function (req, res, next) {
    res.render('site/blog');
});
router.get('/contact', function (req, res, next) {
    res.render('site/contact');
});
router.get('/services', function (req, res, next) {
    res.render('site/services');
});
router.get('/blockchain', function (req, res, next) {
    res.render('site/blockchain');
});
router.get('/responsive', function (req, res, next) {
    res.render('site/responsive');
});
router.get('/react', function (req, res, next) {
    res.render('site/react');
});
router.get('/web_development', function (req, res, next) {
    res.render('site/web_development');
});
router.get('/uiuxdesigner', function (req, res, next) {
    res.render('site/uiuxdesigner');
});
router.get('/flutter', function (req, res, next) {
    res.render('site/flutter');
});
router.get('/androidappdevelopment', function (req, res, next) {
    res.render('site/androidappdevelopment');
});
router.get('/flutter', function (req, res, next) {
    res.render('site/flutter');
});
router.get('/internetofthings', function (req, res, next) {
    res.render('site/internetofthings');
});
router.get('/blockchaindevelopmentblog', function (req, res, next) {
    res.render('site/blockchaindevelopmentblog');
});
router.get('/androidappblog', function (req, res, next) {
    res.render('site/androidappblog');
});
router.get('/iosappdevelopmentblog', function (req, res, next) {
    res.render('site/iosappdevelopmentblog');
});
router.get('/reactnativeappblog', function (req, res, next) {
    res.render('site/reactnativeappblog');
});
router.get('/phonegapappblog', function (req, res, next) {
    res.render('site/phonegapappblog');
});
router.get('/webdesignblog', function (req, res, next) {
    res.render('site/webdesignblog');
});
router.get('/blog2', function (req, res, next) {
    res.render('site/blog2');
});
router.get('/wordpressblog', function (req, res, next) {
    res.render('site/wordpressblog');
});
router.get('/ecommercedevelopment', function (req, res, next) {
    res.render('site/ecommercedevelopment');
});
router.get('/frontdeveloperblog', function (req, res, next) {
    res.render('site/frontdeveloperblog');
});
router.get('/backenddeveloperblog', function (req, res, next) {
    res.render('site/backenddeveloperblog');
});
router.get('/fullstackdevelopmentblog', function (req, res, next) {
    res.render('site/fullstackdevelopmentblog');
});
router.get('/services_footer', function (req, res, next) {
    res.render('site/services_footer');
});
router.get('/faq', function (req, res, next) {
    res.render('site/faq');
});
router.get('/privacypolicy', function (req, res, next) {
    res.render('site/privacypolicy');
});
router.get('/termsandconditions', function (req, res, next) {
    res.render('site/termsandconditions');
});
router.get('/discover', function (req, res, next) {
    res.render('site/discover');
});
router.get('/design', function (req, res, next) {
    res.render('site/design');
});
router.get('/scale', function (req, res, next) {
    res.render('site/scale');
});
router.get('*', function (req, res, next) {
    res.render('site/404');
});

// router.get('*', (req, res)=>{
//     res.render('404')
// } )

// router.get('/submit', function (req, res) {
//     res.render('site/submit');
// })
router.post("/submit", function(req, res, next) {
    console.log(req.body);
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("connected");
        dbo = db.db("cognnox_form");
        var myobj = {
            NAME: req.body.name,
            EMAIL: req.body.email,
            PHONE_NO: req.body.phone_number,
            SUBJECT: req.body.msg_subject,
            MESSAGE: req.body.message,
        };
        dbo.collection("contact_page").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("Data inserted into database");
        });
        res.render("site/submit");
        //res.end();
    });
});
router.post("/email", function(req, res, next) {
    const output = `
    <p> You have a new contact request</p>  
    <h3>----Contact Detail---</h3>
    <ul>
        <li>Name: ${req.body.name} </li>
        <li>Email:${req.body.email} </li>
        <li>Phone NO:${req.body.phone_number}</li>  
       <li> Subject: ${req.body.msg_subject} </li>
       <li>  Message: ${req.body.message}</li>
    </ul>`;
    // const { name, email, msg_subject, phone_number, message } = req.body;
    // sendMail(name, email, msg_subject, phone_number, message, function(err) {
    sendMail(output, req.body.msg_subject, function(err) {
        if (err) {
            res.status(500).json({ message: "Internal Error" });
        } else {
            res.status({ message: "Email sent!!!" });
        }
    });         
});
        //using mail gun

        // const auth = {
        //     auth: {
        //         api_key: '1c34ab86cb593118b52721d82cad43d3-6ae2ecad-563bd221',
        //         domain: 'sandbox38212d7bd4f1460ab739d486b6c8a1eb.mailgun.org'
        //     }
        // };

        // var transporter = nodemailer.createTransport(nodemailMailgun(auth));


        // const mailOptions = {
        //     from: 'Excited user <me@samples.mailgun.org>',
        //     to: 'aniket@cognnox.com',
        //     subject: 'Welcome to Cognnox',
        //    html: "have a good day"
        // }; 

        // transporter.sendMail(mailOptions, function (err, info) {
        //     if (err) {
        //         console.log("Error Reported", err);
        //     } else {
        //         console.log('Email sent : ' + info.response);
        //     }
        // });
        // res.render('site/submit');
        // res.end();









        //without mailgun

        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'tk343616@gmail.com',
        //         pass: 'Password@12'
        //     }
        // });


        // var mailOptions = {
        //     from: 'tk343616@gmail.com',
        //     to: 'aniket@cognnox.com',
        //     subject: 'Sending mail using node.js',
        //     text: 'This is a dummy mail to check'
        // };

        // transporter.sendMail(mailOptions, function(err, info) {
        //     if (err) {
        //         console.log("Error Reported");
        //     } else {
        //         console.log('Email sent : ' + info.response);
        //     }
        // });
        // res.render('site/submit');
        // res.end();
//     });
// });

module.exports = router;