'use strict'



// Required Modules:
const colors 	= require('colors')
const debug 	= require('debug')('sketch-tool:main')
const lodash 	= require('lodash')



/**
 *  NewLib Class
 */
class NewLib {



	/**
	 *  Constructor
	 *  @param  {Object} params Params to be set into this instance
	 *  @return {NewLib}        NewLib instance
	 */
	constructor( params ){

		debug('Instance Created:', params)
		this.params = params
		return this

	}


}



/**
 *  Export
 *  @param  {Object} 	params 	NewLib library params
 *  @return {NewLib}        New instance of the NewLib library
 */
module.exports = ( params )=> {
	return new NewLib( params )
}
