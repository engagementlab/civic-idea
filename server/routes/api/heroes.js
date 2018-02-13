/**
 * Developed by Engagement Lab, 2018
 * ==============
 *
 * @class api
 * @author Johnny Richardson
 *
 * ==========
 */
const keystone = require('keystone');

// var CPIRegistration = keystone.list('CPIRegistration');

exports.get = function(req, res) {
    
    // var item = new CPIRegistration.model(),
    // var data = (req.method == 'POST') ? req.body : req.query;

    // item.getUpdateHandler(req).process(data, function(err) {
        
    //     if (err) return res.apiError('error', err);
        
    //     res.apiResponse(data);
        
    // });

    let data =  [{ id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }];
    return res.status(200).json({status: 200, data: data});
};