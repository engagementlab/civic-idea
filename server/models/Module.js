/**
 * Civic IDEA
 * 
 * Module model
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Module model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Module = new keystone.List('Module', 
	{
		label: 'Modules',
		singular: 'Module',
		autokey: { path: 'key', from: 'name', unique: true },
		nocreate: true,
		nodelete: true
	});

/**
 * Model Fields
 * @main Module
 */
Module.add({

	name: { type: String, label: 'Name', required: true, initial: true },
	url: { type: String, label: 'Module Internal URL', required: true, initial: true, note: 'What\'s the module\'s URL for this site (nameofmodule)?' },
	website: { type: Types.Url, label: 'Website URL', required: true, initial: true },

	intro: { type: Types.Text, label: 'Intro Text', required: true, initial: true },
	introImage: { type: Types.CloudinaryImage, label: 'Intro Image', folder: 'civic-idea', autoCleanup: true, note: 'Dimensions should be 1800x1395.' },

  guides: {
      type: Types.Relationship,
      ref: 'Guide',
      label: 'Guides',
      note: 'The guides for this module.',
      filters: { module: ':_id' },
      many: true
  },
	
	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }

});

/**
 * Model Registration
 */
Module.defaultSort = '-createdAt';
Module.defaultColumns = 'name';
Module.register();
