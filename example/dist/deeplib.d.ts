// Type definitions for deeplib
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * 
 */
declare namespace deep{
	
	/**
	 * 
	 */
	namespace lib{
				
		/**
		 * 
		 * @return  
		 */
		function sampleFunc(): boolean;
		
		/**
		 * 
		 */
		namespace sample{
						
			/**
			 * 
			 */
			export var NUMBER : number;
						
			/**
			 * 
			 */
			interface Sample {
								
				/**
				 * 
				 * @param a 
				 * @param b 
				 * @return  
				 */
				new (a : any, b : any): Sample;
			}

		}
	}
}
