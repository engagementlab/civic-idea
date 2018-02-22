/**
 * Civic IDEA
 * 
 * Guide page Model
 * @module guide
 * @class guide
 * @author Johnny Richardson
 * 
 * For field docs: http://keystonejs.com/docs/database/
 *
 * ==========
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * guide model
 * @constructor
 * See: http://keystonejs.com/docs/database/#lists-options
 */
var Guide = new keystone.List('Guide', 
	{
		label: 'Guides',
		singular: 'Guide',
		nodelete: true
	});

// Storage adapter for Azure
const azureFile = new keystone.Storage({
  adapter: require('keystone-storage-adapter-azure'),
  azure: {
    container: 'civicidea',
    generateFilename: function (file) {
        // Cleanup filename
        return file.originalname.replace(/[\\'\-\[\]\/\{\}\(\)\*\+\?\\\^\$\|]/g, "").replace(/ /g, '_').toLowerCase();
    }
  },
  schema: {
    path: true,
    originalname: true,
    url: true
  }
});

/**
 * Model Fields
 * @main Guide
 */
Guide.add({
	name: { type: String, default: "Guide Title", label: "Title", required: true, initial: true },
	intro: { type: Types.Markdown, label: "Text", initial: true, required: true },
	guidePdf: { type: Types.File, label: "Guide PDF", storage: azureFile },
  thumbnail: { type: Types.CloudinaryImage, label: 'Thumbnail Image', folder: 'civic-idea', autoCleanup: true, note: 'Dimensions should be at least 398x497.' },
  module: {
      type: Types.Relationship,
      ref: 'Module',
      label: 'Module',
      note: 'The Module this guide is for.',
      required: true,
      initial: true
  },
	
	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
Guide.defaultSort = '-createdAt';
Guide.defaultColumns = 'name, module';
Guide.register();