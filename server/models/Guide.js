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

/**
 * Model Fields
 * @main Guide
 */
Guide.add({
	name: { type: String, default: "Guide Title", label: "Title", required: true, initial: true },
	intro: { type: Types.Markdown, label: "Text", initial: true, required: true },
	linkUrl: { type: Types.Url, default: "https://", label: "Link URL", required: true, initial: true },
  module: {
      type: Types.Relationship,
      ref: 'Module',
      label: 'Module',
      note: 'The Module this guide is for.'
  },
	
	createdAt: { type: Date, default: Date.now, noedit: true, hidden: true }
});

/**
 * Model Registration
 */
Guide.defaultSort = '-createdAt';
Guide.defaultColumns = 'name, module';
Guide.register();