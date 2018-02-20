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
      Index = keystone.list('Index'),
      About = keystone.list('About'),
      Module = keystone.list('Module'));

/*
 * Get all modules
 */
exports.get = function(req, res) {

    Index.model.findOne({}).exec(function(err, index) {
        About.model.findOne({}).exec(function(err, about) {

            Module.model.find({}).sort({ sortOrder: 1 }).populate('guides').exec(function(err, items) {
                
                if (err) return res.apiError('database error', err);
                if (!items) return res.apiError('not found');
                if (items.length < 1) return res.status(500).send('No items found!');

                return res.status(200).json({status: 200, data: {indexPage: index, aboutPage: about, modules: items}});
                
            });

        });
    });
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