/**
 * Developed by Engagement Lab, 2018
 * ==============
 * Route to retrieve modules
 * @class api
 * @author Johnny Richardson
 *
 * ==========
 */
const keystone = require('keystone'),
      mongoose = keystone.get('mongoose'),
      Bluebird = require('bluebird'),
      Index = keystone.list('Index'),
      About = keystone.list('About'),
      Module = keystone.list('Module');

mongoose.Promise = require('bluebird');

var buildData = (params, res) => {

    let dataObj = {};
    let promises = [];

    let index = Index.model.findOne({}).exec();
    let about = About.model.findOne({}).exec();
    let modules = Module.model.find({}).sort({ sortOrder: 1 }).populate('guides').exec();

    switch(params.type) {
        case 'index':
            promises.push(index);
            // promises.push(about);
            promises.push(modules);
            break;
        case 'guides':
            promises.push(modules);
            break;
        case 'about':
            promises.push(about);
            break;
    }

    return Bluebird.all(promises.map(function (promise) {
      return promise.reflect();
    }))
    .then(results => {

        let arrResponse = [];

        results.forEach(
            result => {
                if(result.isFulfilled())
                    arrResponse.push(result.value());
                else
                    console.error('Server error', result.reason());
            }
        );

        return res.status(200).json({status: 200, data: arrResponse});

    }).catch(err => {
        console.log(err);
    })

}

/*
 * Get all modules
 */
exports.get = function(req, res) {

    return buildData(req.params, res);

}

/*
 * Get module by URL param
 */
exports.getByUrl = function(req, res) {
    Module.model.findOne({url: req.params.url}).populate('guides').exec(function(err, item) {
        if (err) return res.apiError('database error', err);
        if (!item) return res.apiError('not found');
        if (item.length == 0) return res.status(500).send('Module not found!');

        return res.status(200).json({status: 200, data: item});
        
    });
}