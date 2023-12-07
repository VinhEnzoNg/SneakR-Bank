'use strict';

/**
 * sneak-r service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sneak-r.sneak-r');
