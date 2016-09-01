'use strict'



// Required Modules:
const colors 	= require('colors')
const debug 	= require('debug')('sketch-tool:main')
const lodash 	= require('lodash')



/**
 *  SketchTool Class
 */
class SketchTool {



	/**
	 *  Constructor
	 *  @param  {Object} params Params to be set into this instance
	 *  @return {SketchTool}        SketchTool instance
	 */
	constructor( params ){

		debug('Instance Created:', params)
		this.params = params
		return this

	}


}



/**
 *  Export
 *  @param  {Object} 	params 	SketchTool library params
 *  @return {SketchTool}        New instance of the SketchTool library
 */
module.exports = ( params )=> {
	return new SketchTool( params )
}
