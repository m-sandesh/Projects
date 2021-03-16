let bodyParser = require('body-parser');
let dbData = require('../data/dataGetSet.js');


var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function (app) {
    let spanFlag = 0;
    let spanData = '';

    app.get('/', function (req, res) {
        function loadData() {
            try {
                let dataLoad = dbData.getData();
                console.log(dataLoad);
                if (!dataLoad) {
                    throw new Error();
                } else {
                    res.render('index', { data: dataLoad, spanData: spanData });
                    console.log(dataLoad);
                    setTimeout(() => {
                        spanData = '';
                    }, 1000);
                }
            } catch (error) {
                console.log('Error Occured Fetching Data: ' + error);
            };
        };
        setTimeout(() => {
            loadData();
        }, 100);
    });

    app.post('/', urlencodedParser, function (req, res) {
        if (req.body.createItem != '')
            dbData.setData(req.body.createItem, Number(req.body.priorValue));
        else
            spanData = 'Item Empty.';
        res.redirect('/');

    });

    app.get('/delete/:item', function (req, res) {
        dbData.delData(req.params.item);
        spanData = 'Item Deleted.';
        res.redirect('/');
    });
}
