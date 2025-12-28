/**
 * @typedef {Object} ContactInfo
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} company
 */

/**
 * @typedef {Object} FormState
 * @property {string} businessType
 * @property {string[]} needs
 * @property {string} revenue
 * @property {string} timeline
 * @property {string} budget
 * @property {ContactInfo} contact
 */

/**
 * @typedef {Object} FormOption
 * @property {string} label
 * @property {string} value
 * @property {string} icon
 * @property {string} [description]
 */

/**
 * @typedef {Object} FormStep
 * @property {string} key
 * @property {'single' | 'multi' | 'contact'} type
 * @property {string} title
 * @property {string} subtitle
 * @property {FormOption[]} [options]
 */

/**
 * @typedef {Object} Artifact
 * @property {string} id
 * @property {string} html
 * @property {string} status - Can be 'streaming', 'complete', or other string values
 * @property {string} styleName
 */