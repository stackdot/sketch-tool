'use strict'



// Required Modules:
const colors 	= require('colors')
const debug 	= require('debug')('sketch-tool:main')
const lodash 	= require('lodash')
const path 		= require('path')
const Promise 	= require('bluebird')
const spawn 	= require('child_process').spawn


/**
 *  SketchTool Class
 */
class SketchTool {



	/**
	 *  Constructor
	 *  @param  {Object} params Params to be set into this instance
	 *  @return {SketchTool}        SketchTool instance
	 */
	constructor( params = {} ){

		debug('Instance Created:', params )
		this.params 	= params
		this.bin 		= this.params.bin || path.resolve( __dirname, '../sketchtool/bin/sketchtool' )
		this.file 		= this.params.file

		console.log('bin', this.bin, this.file)

		this.list = {
			artboards: 		this.listCall.bind( this, 'artboards' ),
			formats: 		this.listCall.bind( this, 'formats' ),
			layers: 		this.listCall.bind( this, 'layers' ),
			pages: 			this.listCall.bind( this, 'pages' ),
			slices: 		this.listCall.bind( this, 'slices' )
		}

		this.export = {
			artboards: 		this.exportCall.bind( this, 'artboards' ),
			layers: 		this.exportCall.bind( this, 'layers' ),
			pages: 			this.exportCall.bind( this, 'pages' ),
			slices: 		this.exportCall.bind( this, 'slices' )
		}

		return this

	}



	/**
	 *  Sketch Tool CLI options
	 *  @return {Array} List of cli options
	 */
	toolOptions(){
		return [
			'formats',
			'use-id-for-name',
			'item',
			'items',
			'background',
			'compression',
			'version',
			'include-symbols',
			'bounds',
			'reveal',
			'scales',
			'compact',
			'overwriting',
			'trimmed',
			'group-contents-only',
			'include-namespaces',
			'progressive',
			'save-for-web',
			'output'
		]
	}



	/**
	 *  Call the list function with subcommand using `type`
	 *  @param  {String} type   	Subcommand to be run, eg: artboards, formats, etc.
	 *  @param  {Object} params 	Parameters to be sent with this command
	 *  @return {Promise}        	Promise
	 */
	listCall( type, params = {} ){
		return this.runCommand(['list', type], this.getArgs( params ), true)
	}



	/**
	 *  Get a list of valid options in the format spawn needs
	 *  @param  {Object} params 	Key values of the options we want to pass to sketchtool
	 *  @return {Array}        		Array of options formatted in spawns format
	 */
	getArgs( params ){
		return lodash.map(
			lodash.pickBy( params, ( param, key ) => lodash.includes( this.toolOptions(), key )),
			( param, key ) => `--${key}=${param}`
		)
	}



	/**
	 *  Call the exports function with subcommands using `type`
	 *  @param  {String} type   	Subcommand to be run, eg: artboards, layers, etc.
	 *  @param  {Object} params 	Parameters to be sent with this subcommand
	 *  @return {Promise}        	Promise
	 */
	exportCall( type, params = {} ){
		return this.runCommand(['export', type], this.getArgs( params ), false)
	}



	/**
	 *  Spawn a child process of sketch-tool and run a given command with parameters
	 *  @param  {String} command 	Command to be run
	 *  @param  {Array}  args    	Command arguments to be sent with the command
	 *  @return {Promise}         	Promise
	 */
	runCommand( command, args = [], jsonOutput = false ){
		return new Promise((resolve, reject) => {
			debug('args', lodash.flatten([ command, args, this.file ]))
			const proc = spawn( this.bin, lodash.flatten([ command, args, this.file ]) )
			let data = ''
			let err = ''
			proc.stdout.on('data', ( chunk ) => {
				debug('Got Response')
				data += chunk.toString()
			})
			proc.stderr.on('data', ( chunk ) => {
				chunk = chunk.toString()
				debug('Error Chunk:', chunk)
				err += chunk
			})
			proc.on('error', reject)
			proc.on('exit', ( code ) => {
				debug('Exited', code)
				if( code != 0 ){
					console.log('Non 0 exit code. Error occured.')
					reject( err )
				}
				if( jsonOutput ){
					try {
						data = JSON.parse( data )
					} catch( err ) {
						return reject( err )
					}
				}
				resolve( data, err )
			})
		})
	}


}



module.exports = SketchTool
