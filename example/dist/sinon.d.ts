// Type definitions for sinon
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
declare namespace samsam{
	// samsam.isArguments.!0
	
	/**
	 * 
	 */
	interface IsArguments0 {
	}
}
declare namespace samsam{
	// samsam.keys.!ret
	type KeysRet = Array<any>;
}
declare namespace formatio{
	// formatio.configure.!0
	
	/**
	 * 
	 */
	interface Configure0 {
				
		/**
		 * 
		 */
		quoteStrings : boolean;
				
		/**
		 * 
		 */
		limitChildrenCount : number;
	}
}
declare namespace formatio{
	// formatio.configure.!ret
	
	/**
	 * 
	 */
	interface ConfigureRet {
				
		/**
		 * 
		 */
		quoteStrings : boolean;
				
		/**
		 * 
		 */
		limitChildrenCount : number;
	}
}
declare namespace sinon{
	// sinon.wrapMethod.!0
	
	/**
	 * 
	 */
	interface WrapMethod0 {
	}
}
declare namespace sinon{
	// sinon.create.!0
	
	/**
	 * 
	 */
	interface Create0 {
		
		/**
		 * 
		 */
		xhr : {
						
			/**
			 * 
			 */
			useFilters : boolean;
						
			/**
			 * 
			 */
			parseXML : /*no type*/{};
			
			/**
			 * 
			 */
			statusCodes : {
			}
			
			/**
			 * 
			 */
			prototype : {
								
				/**
				 * 
				 */
				async : boolean;
								
				/**
				 * 
				 */
				errorFlag : boolean;
								
				/**
				 * 
				 */
				sendFlag : boolean;
								
				/**
				 * 
				 */
				responseText : string;
								
				/**
				 * 
				 */
				response : string;
								
				/**
				 * 
				 */
				aborted : boolean;
				
				/**
				 * 
				 */
				requestHeaders : {
										
					/**
					 * 
					 */
					"Content-Type" : string;
				}
								
				/**
				 * 
				 */
				progress : number;
								
				/**
				 * 
				 */
				status : number;
								
				/**
				 * 
				 */
				statusText : string;
								
				/**
				 * 
				 */
				uploadProgress : /*no type*/{};
								
				/**
				 * 
				 */
				toString : /* !proto.toString */ any;
								
				/**
				 * 
				 */
				open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
								
				/**
				 * 
				 */
				send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
								
				/**
				 * 
				 */
				abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
								
				/**
				 * 
				 */
				setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
								
				/**
				 * 
				 */
				respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
								
				/**
				 * 
				 */
				addEventListener : /* sinon.EventTarget.addEventListener */ any;
								
				/**
				 * 
				 */
				removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
								
				/**
				 * 
				 */
				dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
				
				/**
				 * 
				 */
				eventListeners : {
				}
								
				/**
				 * 
				 */
				setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
								
				/**
				 * 
				 */
				setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
								
				/**
				 * 
				 */
				error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
								
				/**
				 * 
				 */
				getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
								
				/**
				 * 
				 */
				getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
								
				/**
				 * 
				 */
				downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
								
				/**
				 * 
				 */
				uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
								
				/**
				 * 
				 */
				readyStateChange : /* sinon.FakeXMLHttpRequest.prototype.readyStateChange */ any;
			}
						
			/**
			 * 
			 */
			UNSENT : number;
						
			/**
			 * 
			 */
			OPENED : number;
						
			/**
			 * 
			 */
			HEADERS_RECEIVED : number;
						
			/**
			 * 
			 */
			LOADING : number;
						
			/**
			 * 
			 */
			DONE : number;
						
			/**
			 * 
			 */
			toString : /* !proto.toString */ any;
						
			/**
			 * 
			 */
			restore : /* sinon.FakeXMLHttpRequest.restore */ any;
						
			/**
			 * 
			 */
			filters : /* sinon.FakeXMLHttpRequest.filters */ any;
						
			/**
			 * 
			 */
			addFilter : /* sinon.FakeXMLHttpRequest.addFilter */ any;
						
			/**
			 * 
			 */
			defake : /*no type*/{};
						
			/**
			 * 
			 */
			onCreate : /* sinon.FakeXDomainRequest.onCreate */ any;
		}
				
		/**
		 * 
		 */
		responding : boolean;
				
		/**
		 * 
		 */
		create : /*no type*/{};
				
		/**
		 * 
		 */
		getHTTPMethod : /*no type*/{};
				
		/**
		 * 
		 */
		configure : /* sinon.fakeServer.configure */ any;
				
		/**
		 * 
		 */
		addRequest : /* sinon.fakeServer.addRequest */ any;
		
		/**
		 * 
		 */
		queue : {
		}
				
		/**
		 * 
		 */
		handleRequest : /* sinon.fakeServer.handleRequest */ any;
				
		/**
		 * 
		 */
		log : /* sinon.fakeServer.log */ any;
		
		/**
		 * 
		 */
		responses : {
		}
				
		/**
		 * 
		 */
		respondWith : /* sinon.fakeServer.respondWith */ any;
				
		/**
		 * 
		 */
		response : /* sinon.fakeServer.response */ any;
				
		/**
		 * 
		 */
		respond : /* sinon.fakeServer.respond */ any;
				
		/**
		 * 
		 */
		processRequest : /* sinon.fakeServer.processRequest */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.fakeServer.restore */ any;
	}
}
declare namespace sinon.Create0.xhr{
	// sinon.create.!0.xhr.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : string;
	}
}
declare namespace sinon.Create0.xhr.prototype{
	// sinon.create.!0.xhr.prototype.uploadProgress.!0
	
	/**
	 * 
	 */
	interface UploadProgress0 {
				
		/**
		 * 
		 */
		loaded : number;
				
		/**
		 * 
		 */
		total : number;
	}
}
declare namespace sinon{
	// sinon.objectKeys.!ret
	type ObjectKeysRet = Array<any>;
}
declare namespace sinon{
	// sinon.getPropertyDescriptor.!ret
	
	/**
	 * 
	 */
	interface GetPropertyDescriptorRet {
		
		/**
		 * 
		 */
		restore : {
						
			/**
			 * 
			 */
			sinon : boolean;
		}
	}
}
declare namespace sinon{
	// sinon.getConfig.!ret
	
	/**
	 * 
	 */
	interface GetConfigRet {
	}
}
declare namespace sinon{
	// sinon.calledInOrder.!0
	type CalledInOrder0 = Array<any>;
}
declare namespace sinon{
	// sinon.extend.!ret
	
	/**
	 * 
	 */
	interface ExtendRet {
				
		/**
		 * 
		 */
		isSinonProxy : boolean;
				
		/**
		 * 
		 */
		displayName : string;
				
		/**
		 * 
		 */
		instantiateFake : /*no type*/{};
				
		/**
		 * 
		 */
		id : string;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		create : /*no type*/{};
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		named : /*no type*/{};
				
		/**
		 * 
		 */
		withArgs : /*no type*/{};
		
		/**
		 * 
		 */
		fakes : {
		}
				
		/**
		 * 
		 */
		callsArg : /*no type*/{};
				
		/**
		 * 
		 */
		callArgAt : number;
				
		/**
		 * 
		 */
		callbackAsync : boolean;
				
		/**
		 * 
		 */
		returnValueDefined : boolean;
				
		/**
		 * 
		 */
		returnThis : boolean;
				
		/**
		 * 
		 */
		behaviors : Array<any>;
				
		/**
		 * 
		 */
		enumerable : boolean;
				
		/**
		 * 
		 */
		configurable : boolean;
				
		/**
		 * 
		 */
		writable : boolean;
		
		/**
		 * 
		 */
		expectations : {
		}
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		responseText : string;
				
		/**
		 * 
		 */
		sendFlag : boolean;
				
		/**
		 * 
		 */
		readyState : number;
				
		/**
		 * 
		 */
		errorFlag : boolean;
				
		/**
		 * 
		 */
		aborted : boolean;
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		isTimeout : boolean;
				
		/**
		 * 
		 */
		UNSENT : number;
				
		/**
		 * 
		 */
		OPENED : number;
				
		/**
		 * 
		 */
		LOADING : number;
				
		/**
		 * 
		 */
		DONE : number;
				
		/**
		 * 
		 */
		async : boolean;
				
		/**
		 * 
		 */
		response : string;
		
		/**
		 * 
		 */
		requestHeaders : {
						
			/**
			 * 
			 */
			"Content-Type" : string;
		}
				
		/**
		 * 
		 */
		progress : number;
				
		/**
		 * 
		 */
		statusText : string;
				
		/**
		 * 
		 */
		uploadProgress : /*no type*/{};
				
		/**
		 * 
		 */
		HEADERS_RECEIVED : number;
				
		/**
		 * 
		 */
		useFilters : boolean;
				
		/**
		 * 
		 */
		parseXML : /*no type*/{};
		
		/**
		 * 
		 */
		statusCodes : {
		}
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		getCalls : /*no type*/{};
				
		/**
		 * 
		 */
		throwsException : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		get : /* sinon.collection.fakes.<i>.get */ any;
				
		/**
		 * 
		 */
		set : /* sinon.collection.fakes.<i>.set */ any;
		
		/**
		 * 
		 */
		spyCall : {
						
			/**
			 * 
			 */
			toString : /* sinon.spyCall.toString */ any;
		}
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		reset : /* sinon.spy.reset */ any;
				
		/**
		 * 
		 */
		args : /* sinon.spy.args */ any;
				
		/**
		 * 
		 */
		returnValues : /* sinon.spy.returnValues */ any;
				
		/**
		 * 
		 */
		thisValues : /* sinon.spy.thisValues */ any;
				
		/**
		 * 
		 */
		exceptions : /* sinon.spy.exceptions */ any;
				
		/**
		 * 
		 */
		callIds : /* sinon.spy.callIds */ any;
				
		/**
		 * 
		 */
		stacks : /* sinon.spy.stacks */ any;
				
		/**
		 * 
		 */
		getCall : /* sinon.spy.getCall */ any;
				
		/**
		 * 
		 */
		calledBefore : /* sinon.spy.calledBefore */ any;
				
		/**
		 * 
		 */
		calledAfter : /* sinon.spy.calledAfter */ any;
				
		/**
		 * 
		 */
		matches : /* sinon.spy.matches */ any;
				
		/**
		 * 
		 */
		printf : /* sinon.spy.printf */ any;
		
		/**
		 * 
		 */
		formatters : {
						
			/**
			 * 
			 */
			c : /* sinon.spy.formatters.c */ any;
						
			/**
			 * 
			 */
			n : /* sinon.spy.formatters.n */ any;
						
			/**
			 * 
			 */
			C : /* sinon.spy.formatters.C */ any;
						
			/**
			 * 
			 */
			t : /* sinon.spy.formatters.t */ any;
						
			/**
			 * 
			 */
			"*" : /* sinon.spy.formatters.* */ any;
		}
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.behavior.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.behavior.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.behavior.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.behavior.onThirdCall */ any;
				
		/**
		 * 
		 */
		callbackArguments : /* sinon.behavior.callbackArguments */ any;
				
		/**
		 * 
		 */
		callsArgOn : /* sinon.behavior.callsArgOn */ any;
				
		/**
		 * 
		 */
		callsArgWith : /* sinon.behavior.callsArgWith */ any;
				
		/**
		 * 
		 */
		callsArgOnWith : /* sinon.behavior.callsArgOnWith */ any;
				
		/**
		 * 
		 */
		yields : /* sinon.behavior.yields */ any;
				
		/**
		 * 
		 */
		yieldsRight : /* sinon.behavior.yieldsRight */ any;
				
		/**
		 * 
		 */
		yieldsOn : /* sinon.behavior.yieldsOn */ any;
				
		/**
		 * 
		 */
		yieldsTo : /* sinon.behavior.yieldsTo */ any;
				
		/**
		 * 
		 */
		yieldsToOn : /* sinon.behavior.yieldsToOn */ any;
				
		/**
		 * 
		 */
		throws : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		returns : /* sinon.behavior.returns */ any;
				
		/**
		 * 
		 */
		returnsArg : /* sinon.behavior.returnsArg */ any;
				
		/**
		 * 
		 */
		returnsThis : /* sinon.behavior.returnsThis */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		atLeast : /* sinon.expectation.atLeast */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
				
		/**
		 * 
		 */
		expects : /* sinon.mock.expects */ any;
				
		/**
		 * 
		 */
		proxies : /* sinon.mock.proxies */ any;
				
		/**
		 * 
		 */
		invokeMethod : /* sinon.mock.invokeMethod */ any;
				
		/**
		 * 
		 */
		open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
				
		/**
		 * 
		 */
		setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
				
		/**
		 * 
		 */
		setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
				
		/**
		 * 
		 */
		send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
				
		/**
		 * 
		 */
		abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
				
		/**
		 * 
		 */
		error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
				
		/**
		 * 
		 */
		getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
				
		/**
		 * 
		 */
		getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
				
		/**
		 * 
		 */
		setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
				
		/**
		 * 
		 */
		respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
				
		/**
		 * 
		 */
		downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
				
		/**
		 * 
		 */
		uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
				
		/**
		 * 
		 */
		addEventListener : /* sinon.EventTarget.addEventListener */ any;
				
		/**
		 * 
		 */
		removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
				
		/**
		 * 
		 */
		dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
		
		/**
		 * 
		 */
		eventListeners : {
		}
				
		/**
		 * 
		 */
		readyStateChange : /* sinon.FakeXDomainRequest.prototype.readyStateChange */ any;
				
		/**
		 * 
		 */
		simulatetimeout : /* sinon.FakeXDomainRequest.prototype.simulatetimeout */ any;
				
		/**
		 * 
		 */
		onCreate : /* sinon.FakeXDomainRequest.onCreate */ any;
				
		/**
		 * 
		 */
		filters : /* sinon.FakeXMLHttpRequest.filters */ any;
				
		/**
		 * 
		 */
		addFilter : /* sinon.FakeXMLHttpRequest.addFilter */ any;
				
		/**
		 * 
		 */
		defake : /*no type*/{};
				
		/**
		 * 
		 */
		restore : /* sinon.FakeXMLHttpRequest.restore */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.instantiateFake.!ret
	
	/**
	 * 
	 */
	interface InstantiateFakeRet {
				
		/**
		 * 
		 */
		isSinonProxy : boolean;
				
		/**
		 * 
		 */
		displayName : string;
				
		/**
		 * 
		 */
		id : string;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		named : /*no type*/{};
				
		/**
		 * 
		 */
		withArgs : /*no type*/{};
		
		/**
		 * 
		 */
		fakes : {
		}
				
		/**
		 * 
		 */
		enumerable : boolean;
				
		/**
		 * 
		 */
		configurable : boolean;
				
		/**
		 * 
		 */
		writable : boolean;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
				
		/**
		 * 
		 */
		instantiateFake : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		create : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		getCalls : /*no type*/{};
				
		/**
		 * 
		 */
		restore : /* sinon.collection.fakes.<i>.restore */ any;
				
		/**
		 * 
		 */
		get : /* sinon.collection.fakes.<i>.get */ any;
				
		/**
		 * 
		 */
		set : /* sinon.collection.fakes.<i>.set */ any;
		
		/**
		 * 
		 */
		spyCall : {
						
			/**
			 * 
			 */
			toString : /* sinon.spyCall.toString */ any;
		}
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		reset : /* sinon.spy.reset */ any;
				
		/**
		 * 
		 */
		args : /* sinon.spy.args */ any;
				
		/**
		 * 
		 */
		returnValues : /* sinon.spy.returnValues */ any;
				
		/**
		 * 
		 */
		thisValues : /* sinon.spy.thisValues */ any;
				
		/**
		 * 
		 */
		exceptions : /* sinon.spy.exceptions */ any;
				
		/**
		 * 
		 */
		callIds : /* sinon.spy.callIds */ any;
				
		/**
		 * 
		 */
		stacks : /* sinon.spy.stacks */ any;
				
		/**
		 * 
		 */
		getCall : /* sinon.spy.getCall */ any;
				
		/**
		 * 
		 */
		calledBefore : /* sinon.spy.calledBefore */ any;
				
		/**
		 * 
		 */
		calledAfter : /* sinon.spy.calledAfter */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		matches : /* sinon.spy.matches */ any;
				
		/**
		 * 
		 */
		printf : /* sinon.spy.printf */ any;
		
		/**
		 * 
		 */
		formatters : {
						
			/**
			 * 
			 */
			c : /* sinon.spy.formatters.c */ any;
						
			/**
			 * 
			 */
			n : /* sinon.spy.formatters.n */ any;
						
			/**
			 * 
			 */
			C : /* sinon.spy.formatters.C */ any;
						
			/**
			 * 
			 */
			t : /* sinon.spy.formatters.t */ any;
						
			/**
			 * 
			 */
			"*" : /* sinon.spy.formatters.* */ any;
		}
				
		/**
		 * 
		 */
		behaviors : /* sinon.extend.!ret.behaviors */ any;
	}
}
declare namespace sinon.ExtendRet.InstantiateFakeRet{
	// sinon.extend.!ret.instantiateFake.!ret.named.!ret
	
	/**
	 * 
	 */
	interface NamedRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		withArgs : /*no type*/{};
		
		/**
		 * 
		 */
		fakes : {
		}
				
		/**
		 * 
		 */
		reset : /* sinon.spy.reset */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		args : /* sinon.spy.args */ any;
				
		/**
		 * 
		 */
		returnValues : /* sinon.spy.returnValues */ any;
				
		/**
		 * 
		 */
		thisValues : /* sinon.spy.thisValues */ any;
				
		/**
		 * 
		 */
		exceptions : /* sinon.spy.exceptions */ any;
				
		/**
		 * 
		 */
		callIds : /* sinon.spy.callIds */ any;
				
		/**
		 * 
		 */
		stacks : /* sinon.spy.stacks */ any;
				
		/**
		 * 
		 */
		create : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		named : /* sinon.spy.named */ any;
				
		/**
		 * 
		 */
		getCalls : /*no type*/{};
				
		/**
		 * 
		 */
		getCall : /* sinon.spy.getCall */ any;
				
		/**
		 * 
		 */
		calledBefore : /* sinon.spy.calledBefore */ any;
				
		/**
		 * 
		 */
		calledAfter : /* sinon.spy.calledAfter */ any;
				
		/**
		 * 
		 */
		matches : /* sinon.spy.matches */ any;
				
		/**
		 * 
		 */
		printf : /* sinon.spy.printf */ any;
		
		/**
		 * 
		 */
		formatters : {
						
			/**
			 * 
			 */
			c : /* sinon.spy.formatters.c */ any;
						
			/**
			 * 
			 */
			n : /* sinon.spy.formatters.n */ any;
						
			/**
			 * 
			 */
			C : /* sinon.spy.formatters.C */ any;
						
			/**
			 * 
			 */
			t : /* sinon.spy.formatters.t */ any;
						
			/**
			 * 
			 */
			"*" : /* sinon.spy.formatters.* */ any;
		}
	}
}
declare namespace sinon.ExtendRet.InstantiateFakeRet.NamedRet{
	// sinon.extend.!ret.instantiateFake.!ret.named.!ret.withArgs.!ret
	
	/**
	 * 
	 */
	interface WithArgsRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		matchingAguments : /* sinon.spy.fakes.<i>.matchingAguments */ any;
				
		/**
		 * 
		 */
		parent : /* sinon.spy.fakes.<i>.parent */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.fakes.<i>.withArgs */ any;
	}
}
declare namespace sinon.ExtendRet.InstantiateFakeRet{
	// sinon.extend.!ret.instantiateFake.!ret.withArgs.!ret
	
	/**
	 * 
	 */
	interface WithArgsRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		matchingAguments : /* sinon.spy.fakes.<i>.matchingAguments */ any;
				
		/**
		 * 
		 */
		parent : /* sinon.spy.fakes.<i>.parent */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.fakes.<i>.withArgs */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		method : string;
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		atLeast : /*no type*/{};
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.expectation.withArgs */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
	}
}
declare namespace sinon.ExtendRet.CreateRet{
	// sinon.extend.!ret.create.!ret.atLeast.!ret
	
	/**
	 * 
	 */
	interface AtLeastRet {
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		atLeast : /* sinon.expectation.atLeast */ any;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.expectation.withArgs */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.named.!ret
	
	/**
	 * 
	 */
	interface NamedRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		reset : /* sinon.spy.reset */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		args : /* sinon.spy.args */ any;
				
		/**
		 * 
		 */
		returnValues : /* sinon.spy.returnValues */ any;
				
		/**
		 * 
		 */
		thisValues : /* sinon.spy.thisValues */ any;
				
		/**
		 * 
		 */
		exceptions : /* sinon.spy.exceptions */ any;
				
		/**
		 * 
		 */
		callIds : /* sinon.spy.callIds */ any;
				
		/**
		 * 
		 */
		stacks : /* sinon.spy.stacks */ any;
				
		/**
		 * 
		 */
		create : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		named : /* sinon.spy.named */ any;
				
		/**
		 * 
		 */
		getCall : /* sinon.spy.getCall */ any;
				
		/**
		 * 
		 */
		getCalls : /* sinon.spy.getCalls */ any;
				
		/**
		 * 
		 */
		calledBefore : /* sinon.spy.calledBefore */ any;
				
		/**
		 * 
		 */
		calledAfter : /* sinon.spy.calledAfter */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.withArgs */ any;
				
		/**
		 * 
		 */
		fakes : /* sinon.spy.fakes */ any;
				
		/**
		 * 
		 */
		matches : /* sinon.spy.matches */ any;
				
		/**
		 * 
		 */
		printf : /* sinon.spy.printf */ any;
				
		/**
		 * 
		 */
		formatters : /* sinon.spy.formatters */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.withArgs.!ret
	
	/**
	 * 
	 */
	interface WithArgsRet {
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		atLeast : /* sinon.expectation.atLeast */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.expectation.withArgs */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.callsArg.!ret
	
	/**
	 * 
	 */
	interface CallsArgRet {
				
		/**
		 * 
		 */
		create : /*no type*/{};
				
		/**
		 * 
		 */
		callArgAt : number;
				
		/**
		 * 
		 */
		callbackAsync : boolean;
				
		/**
		 * 
		 */
		returnValueDefined : boolean;
				
		/**
		 * 
		 */
		returnThis : boolean;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.behavior.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.behavior.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.behavior.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.behavior.onThirdCall */ any;
				
		/**
		 * 
		 */
		callsArg : /* sinon.behavior.callsArg */ any;
				
		/**
		 * 
		 */
		throwsException : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		callbackArguments : /* sinon.behavior.callbackArguments */ any;
				
		/**
		 * 
		 */
		callsArgOn : /* sinon.behavior.callsArgOn */ any;
				
		/**
		 * 
		 */
		callsArgWith : /* sinon.behavior.callsArgWith */ any;
				
		/**
		 * 
		 */
		callsArgOnWith : /* sinon.behavior.callsArgOnWith */ any;
				
		/**
		 * 
		 */
		yields : /* sinon.behavior.yields */ any;
				
		/**
		 * 
		 */
		yieldsRight : /* sinon.behavior.yieldsRight */ any;
				
		/**
		 * 
		 */
		yieldsOn : /* sinon.behavior.yieldsOn */ any;
				
		/**
		 * 
		 */
		yieldsTo : /* sinon.behavior.yieldsTo */ any;
				
		/**
		 * 
		 */
		yieldsToOn : /* sinon.behavior.yieldsToOn */ any;
				
		/**
		 * 
		 */
		throws : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		returns : /* sinon.behavior.returns */ any;
				
		/**
		 * 
		 */
		returnsArg : /* sinon.behavior.returnsArg */ any;
				
		/**
		 * 
		 */
		returnsThis : /* sinon.behavior.returnsThis */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.behavior.withArgs */ any;
	}
}
declare namespace sinon.ExtendRet.CallsArgRet{
	// sinon.extend.!ret.callsArg.!ret.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		callArgAt : number;
				
		/**
		 * 
		 */
		callbackAsync : boolean;
				
		/**
		 * 
		 */
		returnValueDefined : boolean;
				
		/**
		 * 
		 */
		returnThis : boolean;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
				
		/**
		 * 
		 */
		create : /* sinon.behavior.create */ any;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.behavior.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.behavior.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.behavior.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.behavior.onThirdCall */ any;
				
		/**
		 * 
		 */
		callsArg : /* sinon.behavior.callsArg */ any;
				
		/**
		 * 
		 */
		throwsException : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.behavior.withArgs */ any;
				
		/**
		 * 
		 */
		callbackArguments : /* sinon.behavior.callbackArguments */ any;
				
		/**
		 * 
		 */
		callsArgOn : /* sinon.behavior.callsArgOn */ any;
				
		/**
		 * 
		 */
		callsArgWith : /* sinon.behavior.callsArgWith */ any;
				
		/**
		 * 
		 */
		callsArgOnWith : /* sinon.behavior.callsArgOnWith */ any;
				
		/**
		 * 
		 */
		yields : /* sinon.behavior.yields */ any;
				
		/**
		 * 
		 */
		yieldsRight : /* sinon.behavior.yieldsRight */ any;
				
		/**
		 * 
		 */
		yieldsOn : /* sinon.behavior.yieldsOn */ any;
				
		/**
		 * 
		 */
		yieldsTo : /* sinon.behavior.yieldsTo */ any;
				
		/**
		 * 
		 */
		yieldsToOn : /* sinon.behavior.yieldsToOn */ any;
				
		/**
		 * 
		 */
		throws : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		returns : /* sinon.behavior.returns */ any;
				
		/**
		 * 
		 */
		returnsArg : /* sinon.behavior.returnsArg */ any;
				
		/**
		 * 
		 */
		returnsThis : /* sinon.behavior.returnsThis */ any;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.uploadProgress.!0
	
	/**
	 * 
	 */
	interface UploadProgress0 {
				
		/**
		 * 
		 */
		loaded : number;
				
		/**
		 * 
		 */
		total : number;
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : string;
	}
}
declare namespace sinon.spy{
	// sinon.spy.reset.!ret
	
	/**
	 * Retain the function length:
	 */
	interface ResetRet {
				
		/**
		 * 
		 */
		isSinonProxy : boolean;
				
		/**
		 * 
		 */
		displayName : string;
				
		/**
		 * 
		 */
		id : string;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		enumerable : boolean;
				
		/**
		 * 
		 */
		configurable : boolean;
				
		/**
		 * 
		 */
		writable : boolean;
				
		/**
		 * 
		 */
		(): void;
	}
}
declare namespace sinon.spy{
	// sinon.spy.named.!ret
	
	/**
	 * 
	 */
	interface NamedRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		reset : /* sinon.spy.reset */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		args : /* sinon.spy.args */ any;
				
		/**
		 * 
		 */
		returnValues : /* sinon.spy.returnValues */ any;
				
		/**
		 * 
		 */
		thisValues : /* sinon.spy.thisValues */ any;
				
		/**
		 * 
		 */
		exceptions : /* sinon.spy.exceptions */ any;
				
		/**
		 * 
		 */
		callIds : /* sinon.spy.callIds */ any;
				
		/**
		 * 
		 */
		stacks : /* sinon.spy.stacks */ any;
				
		/**
		 * 
		 */
		create : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		named : /* sinon.spy.named */ any;
				
		/**
		 * 
		 */
		getCall : /* sinon.spy.getCall */ any;
				
		/**
		 * 
		 */
		getCalls : /* sinon.spy.getCalls */ any;
				
		/**
		 * 
		 */
		calledBefore : /* sinon.spy.calledBefore */ any;
				
		/**
		 * 
		 */
		calledAfter : /* sinon.spy.calledAfter */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.withArgs */ any;
				
		/**
		 * 
		 */
		fakes : /* sinon.spy.fakes */ any;
				
		/**
		 * 
		 */
		matches : /* sinon.spy.matches */ any;
				
		/**
		 * 
		 */
		printf : /* sinon.spy.printf */ any;
				
		/**
		 * 
		 */
		formatters : /* sinon.spy.formatters */ any;
	}
}
declare namespace sinon.spy{
	// sinon.spy.getCalls.!ret
	type GetCallsRet = Array</* sinon.spy.firstCall */ any>;
}
declare namespace sinon.spy{
	// sinon.spy.withArgs.!ret
	
	/**
	 * 
	 */
	interface WithArgsRet {
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		matchingAguments : /* sinon.spy.fakes.<i>.matchingAguments */ any;
				
		/**
		 * 
		 */
		parent : /* sinon.spy.fakes.<i>.parent */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.fakes.<i>.withArgs */ any;
	}
}
declare namespace sinon.spy{
	// sinon.spy.fakes.<i>
	
	/**
	 * 
	 */
	interface FakesI {
				
		/**
		 * 
		 */
		matchingAguments : Array<any>;
		
		/**
		 * Public API
		 */
		parent : {
						
			/**
			 * 
			 */
			called : boolean;
						
			/**
			 * 
			 */
			notCalled : boolean;
						
			/**
			 * 
			 */
			calledOnce : boolean;
						
			/**
			 * 
			 */
			calledTwice : boolean;
						
			/**
			 * 
			 */
			calledThrice : boolean;
						
			/**
			 * 
			 */
			callCount : number;
						
			/**
			 * 
			 */
			invoking : boolean;
						
			/**
			 * 
			 */
			reset : /* sinon.spy.reset */ any;
						
			/**
			 * 
			 */
			firstCall : /* sinon.spy.firstCall */ any;
						
			/**
			 * 
			 */
			secondCall : /* sinon.spy.firstCall */ any;
						
			/**
			 * 
			 */
			thirdCall : /* sinon.spy.firstCall */ any;
						
			/**
			 * 
			 */
			lastCall : /* sinon.spy.firstCall */ any;
						
			/**
			 * 
			 */
			args : /* sinon.spy.args */ any;
						
			/**
			 * 
			 */
			returnValues : /* sinon.spy.returnValues */ any;
						
			/**
			 * 
			 */
			thisValues : /* sinon.spy.thisValues */ any;
						
			/**
			 * 
			 */
			exceptions : /* sinon.spy.exceptions */ any;
						
			/**
			 * 
			 */
			callIds : /* sinon.spy.callIds */ any;
						
			/**
			 * 
			 */
			stacks : /* sinon.spy.stacks */ any;
						
			/**
			 * 
			 */
			create : /* sinon.spy.create */ any;
						
			/**
			 * 
			 */
			invoke : /* sinon.spy.invoke */ any;
						
			/**
			 * 
			 */
			named : /* sinon.spy.named */ any;
						
			/**
			 * 
			 */
			getCall : /* sinon.spy.getCall */ any;
						
			/**
			 * 
			 */
			getCalls : /* sinon.spy.getCalls */ any;
						
			/**
			 * 
			 */
			calledBefore : /* sinon.spy.calledBefore */ any;
						
			/**
			 * 
			 */
			calledAfter : /* sinon.spy.calledAfter */ any;
						
			/**
			 * 
			 */
			withArgs : /* sinon.spy.withArgs */ any;
						
			/**
			 * 
			 */
			fakes : /* sinon.spy.fakes */ any;
						
			/**
			 * 
			 */
			matches : /* sinon.spy.matches */ any;
						
			/**
			 * 
			 */
			printf : /* sinon.spy.printf */ any;
			
			/**
			 * 
			 */
			formatters : {
								
				/**
				 * 
				 */
				c : /* sinon.spy.formatters.c */ any;
								
				/**
				 * 
				 */
				n : /* sinon.spy.formatters.n */ any;
								
				/**
				 * 
				 */
				C : /* sinon.spy.formatters.C */ any;
								
				/**
				 * 
				 */
				t : /* sinon.spy.formatters.t */ any;
								
				/**
				 * 
				 */
				"*" : /* sinon.spy.formatters.* */ any;
			}
		}
				
		/**
		 * 
		 * @return  
		 */
		withArgs(): /* sinon.spy.fakes.<i> */ any;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
	}
}
declare namespace sinon{
	// sinon.spy.!0
	type Spy0 = (() => void);
}
declare namespace sinon.behavior{
	// sinon.behavior.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		callArgAt : number;
				
		/**
		 * 
		 */
		callbackAsync : boolean;
				
		/**
		 * 
		 */
		returnValueDefined : boolean;
				
		/**
		 * 
		 */
		returnThis : boolean;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
				
		/**
		 * 
		 */
		create : /* sinon.behavior.create */ any;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.behavior.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.behavior.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.behavior.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.behavior.onThirdCall */ any;
				
		/**
		 * 
		 */
		callsArg : /* sinon.behavior.callsArg */ any;
				
		/**
		 * 
		 */
		callbackArguments : /* sinon.behavior.callbackArguments */ any;
				
		/**
		 * 
		 */
		callsArgOn : /* sinon.behavior.callsArgOn */ any;
				
		/**
		 * 
		 */
		callsArgWith : /* sinon.behavior.callsArgWith */ any;
				
		/**
		 * 
		 */
		callsArgOnWith : /* sinon.behavior.callsArgOnWith */ any;
				
		/**
		 * 
		 */
		yields : /* sinon.behavior.yields */ any;
				
		/**
		 * 
		 */
		yieldsRight : /* sinon.behavior.yieldsRight */ any;
				
		/**
		 * 
		 */
		yieldsOn : /* sinon.behavior.yieldsOn */ any;
				
		/**
		 * 
		 */
		yieldsTo : /* sinon.behavior.yieldsTo */ any;
				
		/**
		 * 
		 */
		yieldsToOn : /* sinon.behavior.yieldsToOn */ any;
				
		/**
		 * 
		 */
		throws : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		throwsException : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		returns : /* sinon.behavior.returns */ any;
				
		/**
		 * 
		 */
		returnsArg : /* sinon.behavior.returnsArg */ any;
				
		/**
		 * 
		 */
		returnsThis : /* sinon.behavior.returnsThis */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.behavior.withArgs */ any;
	}
}
declare namespace sinon.expectation{
	// sinon.expectation.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		method : string;
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		atLeast : /* sinon.expectation.atLeast */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.expectation.withArgs */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
	}
}
declare namespace sinon.expectation{
	// sinon.expectation.allowsCall.!1
	type AllowsCall1 = Array<any>;
}
declare namespace sinon.mock{
	// sinon.mock.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		create : /* sinon.mock.create */ any;
				
		/**
		 * 
		 */
		expects : /* sinon.mock.expects */ any;
				
		/**
		 * 
		 */
		expectations : /* sinon.mock.expectations */ any;
				
		/**
		 * 
		 */
		proxies : /* sinon.mock.proxies */ any;
				
		/**
		 * 
		 */
		invokeMethod : /* sinon.mock.invokeMethod */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.mock.restore */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.mock.verify */ any;
	}
}
declare namespace sinon.mock.expectations{
	// sinon.mock.expectations.<i>.<i>
	
	/**
	 * 
	 */
	interface ExpectationsII {
				
		/**
		 * 
		 */
		method : string;
				
		/**
		 * 
		 */
		minCalls : number;
				
		/**
		 * 
		 */
		maxCalls : number;
				
		/**
		 * 
		 */
		limitsSet : boolean;
				
		/**
		 * 
		 */
		failed : boolean;
				
		/**
		 * 
		 */
		expectsExactArgCount : boolean;
				
		/**
		 * 
		 */
		invoking : boolean;
				
		/**
		 * 
		 */
		called : boolean;
				
		/**
		 * 
		 */
		callCount : number;
				
		/**
		 * 
		 */
		notCalled : boolean;
				
		/**
		 * 
		 */
		calledOnce : boolean;
				
		/**
		 * 
		 */
		calledTwice : boolean;
				
		/**
		 * 
		 */
		calledThrice : boolean;
				
		/**
		 * 
		 */
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
		/**
		 * 
		 */
		atLeast : /* sinon.expectation.atLeast */ any;
				
		/**
		 * 
		 */
		atMost : /* sinon.expectation.atMost */ any;
				
		/**
		 * 
		 */
		never : /* sinon.expectation.never */ any;
				
		/**
		 * 
		 */
		once : /* sinon.expectation.once */ any;
				
		/**
		 * 
		 */
		twice : /* sinon.expectation.twice */ any;
				
		/**
		 * 
		 */
		thrice : /* sinon.expectation.thrice */ any;
				
		/**
		 * 
		 */
		exactly : /* sinon.expectation.exactly */ any;
				
		/**
		 * 
		 */
		met : /* sinon.expectation.met */ any;
				
		/**
		 * 
		 */
		verifyCallAllowed : /* sinon.expectation.verifyCallAllowed */ any;
				
		/**
		 * 
		 */
		allowsCall : /* sinon.expectation.allowsCall */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.expectation.withArgs */ any;
				
		/**
		 * 
		 */
		expectedArguments : /* sinon.expectation.expectedArguments */ any;
				
		/**
		 * 
		 */
		withExactArgs : /* sinon.expectation.withExactArgs */ any;
				
		/**
		 * 
		 */
		on : /* sinon.expectation.on */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.expectation.verify */ any;
				
		/**
		 * 
		 */
		pass : /* sinon.expectation.pass */ any;
				
		/**
		 * 
		 */
		fail : /* sinon.expectation.fail */ any;
				
		/**
		 * 
		 */
		firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		lastCall : /* sinon.spy.firstCall */ any;
	}
}
declare namespace sinon.mock{
	// sinon.mock.invokeMethod.!2
	type InvokeMethod2 = Array<any>;
}
declare namespace sinon.collection{
	// sinon.collection.stub.!0
	
	/**
	 * 
	 */
	interface Stub0 {
	}
}
declare namespace sinon.collection{
	// sinon.collection.stub.!ret
	
	/**
	 * 
	 */
	interface StubRet {
				
		/**
		 * 
		 */
		restore(): void;
	}
}
declare namespace sinon.collection{
	// sinon.collection.inject.!0
	
	/**
	 * 
	 */
	interface Inject0 {
		
		/**
		 * 
		 */
		clock : {
						
			/**
			 * 
			 */
			duringTick : boolean;
						
			/**
			 * 
			 */
			restore : /* sinon.fakeServerWithClock.clock.uninstall */ any;
						
			/**
			 * 
			 */
			setTimeout : /* sinon.fakeServerWithClock.clock.setTimeout */ any;
						
			/**
			 * 
			 */
			clearTimeout : /* sinon.fakeServerWithClock.clock.clearTimeout */ any;
						
			/**
			 * 
			 */
			setInterval : /* sinon.fakeServerWithClock.clock.setInterval */ any;
						
			/**
			 * 
			 */
			clearInterval : /* sinon.fakeServerWithClock.clock.clearInterval */ any;
						
			/**
			 * 
			 */
			setImmediate : /* sinon.fakeServerWithClock.clock.setImmediate */ any;
						
			/**
			 * 
			 */
			clearImmediate : /* sinon.fakeServerWithClock.clock.clearImmediate */ any;
						
			/**
			 * 
			 */
			tick : /* sinon.fakeServerWithClock.clock.tick */ any;
						
			/**
			 * 
			 */
			reset : /* sinon.fakeServerWithClock.clock.reset */ any;
						
			/**
			 * 
			 */
			setSystemTime : /* sinon.fakeServerWithClock.clock.setSystemTime */ any;
						
			/**
			 * 
			 */
			uninstall : /* sinon.fakeServerWithClock.clock.uninstall */ any;
		}
				
		/**
		 * 
		 */
		requests : Array<any>;
				
		/**
		 * 
		 * @return  
		 */
		spy(): any;
				
		/**
		 * 
		 * @return  
		 */
		stub(): /* sinon.collection.stub.!ret */ any;
				
		/**
		 * 
		 * @return  
		 */
		mock(): any;		
		/**
		 * 
		 */
		mock();
		
		/**
		 * 
		 */
		server : {
			
			/**
			 * 
			 */
			requests : {
			}
		}
				
		/**
		 * 
		 */
		match : /* sinon.match */ any;
	}
}
declare namespace sinon{
	// sinon.useFakeTimers.!ret
	
	/**
	 * 
	 */
	interface UseFakeTimersRet {
				
		/**
		 * 
		 */
		duringTick : boolean;
				
		/**
		 * 
		 */
		restore : /* sinon.fakeServerWithClock.clock.uninstall */ any;
				
		/**
		 * 
		 */
		setTimeout : /* sinon.fakeServerWithClock.clock.setTimeout */ any;
				
		/**
		 * 
		 */
		clearTimeout : /* sinon.fakeServerWithClock.clock.clearTimeout */ any;
				
		/**
		 * 
		 */
		setInterval : /* sinon.fakeServerWithClock.clock.setInterval */ any;
				
		/**
		 * 
		 */
		clearInterval : /* sinon.fakeServerWithClock.clock.clearInterval */ any;
				
		/**
		 * 
		 */
		setImmediate : /* sinon.fakeServerWithClock.clock.setImmediate */ any;
				
		/**
		 * 
		 */
		clearImmediate : /* sinon.fakeServerWithClock.clock.clearImmediate */ any;
				
		/**
		 * 
		 */
		tick : /* sinon.fakeServerWithClock.clock.tick */ any;
				
		/**
		 * 
		 */
		reset : /* sinon.fakeServerWithClock.clock.reset */ any;
				
		/**
		 * 
		 */
		setSystemTime : /* sinon.fakeServerWithClock.clock.setSystemTime */ any;
				
		/**
		 * 
		 */
		uninstall : /* sinon.fakeServerWithClock.clock.uninstall */ any;
	}
}
declare namespace sinon.Event.prototype{
	// sinon.Event.prototype.initEvent.!3
	
	/**
	 * 
	 */
	interface InitEvent3 {
				
		/**
		 * 
		 */
		async : boolean;
				
		/**
		 * 
		 */
		errorFlag : boolean;
				
		/**
		 * 
		 */
		sendFlag : boolean;
				
		/**
		 * 
		 */
		responseText : string;
				
		/**
		 * 
		 */
		response : string;
				
		/**
		 * 
		 */
		aborted : boolean;
				
		/**
		 * 
		 */
		progress : number;
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		statusText : string;
				
		/**
		 * 
		 */
		open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
				
		/**
		 * 
		 */
		readyStateChange : /* sinon.FakeXMLHttpRequest.prototype.readyStateChange */ any;
				
		/**
		 * 
		 */
		setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
				
		/**
		 * 
		 */
		setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
				
		/**
		 * 
		 */
		send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
				
		/**
		 * 
		 */
		abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
				
		/**
		 * 
		 */
		requestHeaders : /* sinon.FakeXMLHttpRequest.prototype.requestHeaders */ any;
				
		/**
		 * 
		 */
		responseHeaders : any;
				
		/**
		 * 
		 */
		error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
				
		/**
		 * 
		 */
		getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
				
		/**
		 * 
		 */
		getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
				
		/**
		 * 
		 */
		setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
				
		/**
		 * 
		 */
		respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
				
		/**
		 * 
		 */
		uploadProgress : /* sinon.FakeXMLHttpRequest.prototype.uploadProgress */ any;
				
		/**
		 * 
		 */
		downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
				
		/**
		 * 
		 */
		uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
	}
}
declare namespace sinon.Event.prototype.target{
	// sinon.Event.prototype.target.uploadProgress.!0
	
	/**
	 * 
	 */
	interface UploadProgress0 {
				
		/**
		 * 
		 */
		loaded : number;
				
		/**
		 * 
		 */
		total : number;
	}
}
declare namespace sinon{
	// sinon.ProgressEvent.!1
	
	/**
	 * ensure loaded and total are numbers
	 */
	interface ProgressEvent1 {
				
		/**
		 * 
		 */
		loaded : number;
				
		/**
		 * 
		 */
		total : number;
	}
}
declare namespace sinon{
	// sinon.CustomEvent.!1
	
	/**
	 * 
	 */
	interface CustomEvent1 {
	}
}
declare namespace sinon.logError{
	// sinon.logError.setTimeout.!0
	type SetTimeout0 = (() => void);
}
declare namespace sinon{
	// sinon.logError.!1
	
	/**
	 * 
	 */
	interface LogError1 {
				
		/**
		 * 
		 */
		message : string;
	}
}
declare namespace sinon.xhr.XMLHttpRequest{
	// sinon.xhr.XMLHttpRequest.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : string;
	}
}
declare namespace sinon.FakeXMLHttpRequest{
	// sinon.FakeXMLHttpRequest.defake.!0
	
	/**
	 * 
	 */
	interface Defake0 {
	}
}
declare namespace sinon.FakeXMLHttpRequest{
	// sinon.FakeXMLHttpRequest.defake.!1
	type Defake1 = Array<any>;
}
declare namespace sinon.FakeXMLHttpRequest{
	// sinon.FakeXMLHttpRequest.parseXML.!ret
	
	/**
	 * 
	 */
	interface ParseXMLRet {
				
		/**
		 * 
		 */
		async : string;
	}
}
declare namespace sinon.fakeServer{
	// sinon.fakeServer.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
				
		/**
		 * 
		 */
		requests : /* sinon.collection.inject.!0.requests */ any;
	}
}
declare namespace sinon.fakeServer{
	// sinon.fakeServer.queue.<i>
	
	/**
	 * 
	 */
	interface QueueI {
				
		/**
		 * 
		 */
		onSend : /* sinon.FakeXMLHttpRequest.onSend */ any;
	}
}
declare namespace sinon.fakeServer{
	// sinon.fakeServer.log.!0
	type Log0 = Array</* number,?,string */ any>;
}
declare namespace sinon.fakeServer{
	// sinon.fakeServer.responses.<i>
	
	/**
	 * 
	 */
	interface ResponsesI {
				
		/**
		 * 
		 */
		response : Array<any>;
	}
}
declare namespace sinon.assert{
	// sinon.assert.expose.!0
	
	/**
	 * 
	 */
	interface Expose0 {
	}
}
declare namespace sinon.Create0{
	// sinon.create.!0.create.!ret
	
	/**
	 * 
	 */
	interface CreateRet {
		
		/**
		 * 
		 */
		requests : {
		}
	}
}
declare namespace sinon.Create0{
	// sinon.create.!0.getHTTPMethod.!0
	
	/**
	 * 
	 */
	interface GetHTTPMethod0 {
				
		/**
		 * 
		 */
		onSend : /* sinon.FakeXMLHttpRequest.onSend */ any;
	}
}
declare namespace sinon.ExtendRet.InstantiateFakeRet.NamedRet{
	// sinon.extend.!ret.instantiateFake.!ret.named.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.ExtendRet.InstantiateFakeRet{
	// sinon.extend.!ret.instantiateFake.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.Create0.xhr{
	// sinon.create.!0.xhr.defake.!0
	
	/**
	 * 
	 */
	interface Defake0 {
	}
}
declare namespace sinon.ExtendRet{
	// sinon.extend.!ret.defake.!0
	
	/**
	 * 
	 */
	interface Defake0 {
	}
}
declare namespace sinon.xhr.XMLHttpRequest{
	// sinon.xhr.XMLHttpRequest.defake.!0
	
	/**
	 * 
	 */
	interface Defake0 {
	}
}
declare namespace sinon.fakeServer{
	// sinon.fakeServer.getHTTPMethod.!0
	
	/**
	 * 
	 */
	interface GetHTTPMethod0 {
				
		/**
		 * 
		 */
		onSend : /* sinon.FakeXMLHttpRequest.onSend */ any;
	}
}

/**
 * 
 */
declare namespace samsam{
		
	/**
	 * @name samsam.isArguments
	 * @param Object object
	 * 
	 * Returns ``true`` if ``object`` is an ``arguments`` object,
	 * ``false`` otherwise.
	 * @param object 
	 * @return  
	 */
	function isArguments(object : samsam.IsArguments0): boolean;
		
	/**
	 * @name samsam.isElement
	 * @param Object object
	 * 
	 * Returns ``true`` if ``object`` is a DOM element node. Unlike
	 * Underscore.js/lodash, this function will return ``false`` if ``object``
	 * is an *element-like* object, i.e. a regular object with a ``nodeType``
	 * property that holds the value ``1``.
	 * @param object 
	 * @return  
	 */
	function isElement(object : any): boolean;
		
	/**
	 * @name samsam.isDate
	 * @param Object value
	 * 
	 * Returns true if the object is a ``Date``, or *date-like*. Duck typing
	 * of date objects work by checking that the object has a ``getTime``
	 * function whose return value equals the return value from the object's
	 * ``valueOf``.
	 * @param value 
	 * @return  
	 */
	function isDate(value : any): boolean;
		
	/**
	 * @name samsam.isNegZero
	 * @param Object value
	 * 
	 * Returns ``true`` if ``value`` is ``-0``.
	 * @param value 
	 * @return  
	 */
	function isNegZero(value : any): boolean;
		
	/**
	 * @name samsam.equal
	 * @param Object obj1
	 * @param Object obj2
	 * 
	 * Returns ``true`` if two objects are strictly equal. Compared to
	 * ``===`` there are two exceptions:
	 * 
	 *   - NaN is considered equal to NaN
	 *   - -0 and +0 are not considered equal
	 * @param obj1 
	 * @param obj2 
	 * @return  
	 */
	function identical(obj1 : any, obj2 : any): boolean;
		
	/**
	 * @name samsam.deepEqual
	 * @param Object obj1
	 * @param Object obj2
	 * 
	 * Deep equal comparison. Two values are "deep equal" if:
	 * 
	 *   - They are equal, according to samsam.identical
	 *   - They are both date objects representing the same time
	 *   - They are both arrays containing elements that are all deepEqual
	 *   - They are objects with the same set of properties, and each property
	 *     in ``obj1`` is deepEqual to the corresponding property in ``obj2``
	 * 
	 * Supports cyclic objects.
	 * @param obj1 
	 * @param obj2 
	 * @return  
	 */
	function deepEqual(obj1 : any, obj2 : any): boolean;
		
	/**
	 * @name samsam.match
	 * @param Object object
	 * @param Object matcher
	 * 
	 * Compare arbitrary value ``object`` with matcher.
	 * @param object 
	 * @param matcher 
	 * @return  
	 */
	function match(object : any, matcher : any): boolean;
		
	/**
	 * 
	 * @param object 
	 * @return  
	 */
	function keys(object : any): samsam.KeysRet;
}

/**
 * 
 */
declare namespace formatio{
		
	/**
	 * 
	 * @param func 
	 * @return  
	 */
	function functionName(func : any):  /* error */ any;
		
	/**
	 * 
	 * @param options 
	 * @return  
	 */
	function configure(options : formatio.Configure0): formatio.ConfigureRet;
		
	/**
	 * 
	 * @param object 
	 * @return  
	 */
	function constructorName(object : any):  /* error */ any;
		
	/**
	 * 
	 * @param object 
	 * @param processed 
	 * @param indent 
	 * @return  
	 */
	function ascii(object : Array<any> | /* sinon.fakeServer.queue.<i> */ any, processed : Array<any> | /* sinon.fakeServer.queue.<i> */ any, indent : Array<any> | /* sinon.fakeServer.queue.<i> */ any): Array<any> | /* sinon.fakeServer.queue.<i> */ any;
}

/**
 * eslint-disable-line no-unused-vars
 */
declare namespace sinon{
		
	/**
	 * 
	 * @param object 
	 * @param property 
	 * @param method 
	 * @return  
	 */
	function wrapMethod(object : sinon.WrapMethod0, property : any, method : {} | (() => void)): {} | (() => void);
		
	/**
	 * 
	 * @param proto 
	 */
	function create(proto : sinon.Create0): void;
		
	/**
	 * 
	 * @param a 
	 * @param b 
	 * @return  
	 */
	function deepEqual(a : any, b : any): boolean;
		
	/**
	 * 
	 * @param func 
	 * @return  
	 */
	function functionName(func : any):  /* error */ any;
		
	/**
	 * 
	 * @return  
	 */
	function functionToString(): /* !this.displayName */ any;
		
	/**
	 * 
	 * @param obj 
	 * @return  
	 */
	function objectKeys(obj : {} | (() => void)): sinon.ObjectKeysRet;
		
	/**
	 * 
	 * @param object 
	 * @param property 
	 * @return  
	 */
	function getPropertyDescriptor(object : /* sinon.wrapMethod.!0 */ any, property : any): sinon.GetPropertyDescriptorRet;
		
	/**
	 * 
	 * @param custom 
	 * @return  
	 */
	function getConfig(custom : any): sinon.GetConfigRet;
	
	/**
	 * 
	 */
	namespace defaultConfig{
				
		/**
		 * 
		 */
		export var injectIntoThis : boolean;
				
		/**
		 * 
		 */
		export var properties : Array<string>;
				
		/**
		 * 
		 */
		export var useFakeTimers : boolean;
				
		/**
		 * 
		 */
		export var useFakeServer : boolean;
	}
		
	/**
	 * 
	 * @param count 
	 * @return  
	 */
	function timesInWords(count : number): boolean;	
	/**
	 * 
	 */
	function timesInWords();
		
	/**
	 * 
	 * @param spies 
	 * @return  
	 */
	function calledInOrder(spies : sinon.CalledInOrder0): boolean;
		
	/**
	 * 
	 * @param spies 
	 */
	function orderByFirstCall(spies : Array<any>): void;
		
	/**
	 * 
	 * @param constructor 
	 */
	function createStubInstance(constructor : any): void;
		
	/**
	 * 
	 * @param object 
	 */
	function restore(object : any): void;
		
	/**
	 * 
	 * @param target 
	 * @return  
	 */
	function extend(target : any): sinon.ExtendRet;
		
	/**
	 * 
	 * @param expectation 
	 * @param message 
	 * @return  
	 */
	function match(expectation : any, message : string): /* sinon.match.any */ any;
	
	/**
	 * 
	 */
	namespace match{
				
		/**
		 * 
		 * @param object 
		 * @return  
		 */
		function isMatcher(object : any): boolean;
		
		/**
		 * 
		 */
		var any : {
						
			/**
			 * 
			 */
			message : string;
		}
				
		/**
		 * 
		 * @param expectation 
		 * @return  
		 */
		function same(expectation : any): /* sinon.match.any */ any;
				
		/**
		 * 
		 * @param type 
		 * @return  
		 */
		function typeOf(type : string): /* sinon.match.any */ any;
				
		/**
		 * 
		 * @param type 
		 * @return  
		 */
		function instanceOf(type : any): /* sinon.match.any */ any;
				
		/**
		 * 
		 * @param property 
		 * @param value 
		 * @return  
		 */
		function has(property : any, value : any): /* sinon.match.any */ any;
	}
		
	/**
	 * 
	 * @param value 
	 * @return  
	 */
	function format(value : Array<any> | /* sinon.fakeServer.queue.<i> */ any): string;
		
	/**
	 * 
	 * @param spy 
	 * @param thisValue 
	 * @param args 
	 * @param returnValue 
	 * @param exception 
	 * @param id 
	 * @param stack 
	 * @return  
	 */
	function spyCall(spy : /* sinon.spy.fakes.<i>.parent */ any | (() => void), thisValue : any, args : any, returnValue : any, exception : any, id : any, stack : any): /* sinon.spy.firstCall */ any;
	
	/**
	 * 
	 */
	namespace spyCall{
				
		/**
		 * 
		 * @return  
		 */
		function toString(): string;
	}
		
	/**
	 * 
	 * @param object 
	 * @param property 
	 * @param types 
	 * @return  
	 */
	function spy(object : sinon.Spy0, property : any, types : any): any;
	
	/**
	 * 
	 */
	namespace spy{
				
		/**
		 * 
		 * @return  
		 */
		function reset(): sinon.spy.ResetRet;
				
		/**
		 * 
		 */
		export var called : boolean;
				
		/**
		 * 
		 */
		export var notCalled : boolean;
				
		/**
		 * 
		 */
		export var calledOnce : boolean;
				
		/**
		 * 
		 */
		export var calledTwice : boolean;
				
		/**
		 * 
		 */
		export var calledThrice : boolean;
				
		/**
		 * 
		 */
		export var callCount : number;
				
		/**
		 * 
		 */
		export var firstCall : /*no type*/{};
				
		/**
		 * 
		 */
		export var args : Array<any>;
				
		/**
		 * 
		 */
		export var returnValues : Array<any>;
				
		/**
		 * 
		 */
		export var thisValues : Array<any>;
				
		/**
		 * 
		 */
		export var exceptions : Array<any>;
				
		/**
		 * 
		 */
		export var callIds : Array<any>;
				
		/**
		 * 
		 */
		export var stacks : Array<any>;
				
		/**
		 * 
		 * @param func 
		 * @param spyLength 
		 * @return  
		 */
		function create(func : (() => void) | {}, spyLength : any): () => void;
				
		/**
		 * 
		 * @param func 
		 * @param thisValue 
		 * @param args 
		 * @return  
		 */
		function invoke(func : any, thisValue : any, args : any): any;
				
		/**
		 * 
		 */
		export var invoking : boolean;
				
		/**
		 * 
		 * @param name 
		 * @return  
		 */
		function named(name : any): sinon.spy.NamedRet;
				
		/**
		 * 
		 * @param i 
		 * @return  
		 */
		function getCall(i : number): /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 * @return  
		 */
		function getCalls(): sinon.spy.GetCallsRet;
				
		/**
		 * 
		 * @param spyFn 
		 * @return  
		 */
		function calledBefore(spyFn : any): boolean;
				
		/**
		 * 
		 * @param spyFn 
		 * @return  
		 */
		function calledAfter(spyFn : any): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function withArgs(): sinon.spy.WithArgsRet;
				
		/**
		 * 
		 */
		export var fakes : Array<sinon.spy.FakesI>;
				
		/**
		 * 
		 * @param args 
		 * @param strict 
		 * @return  
		 */
		function matches(args : any, strict : any): boolean;
				
		/**
		 * 
		 * @param format 
		 * @return  
		 */
		function printf(format : any): string;
		
		/**
		 * 
		 */
		namespace formatters{
						
			/**
			 * 
			 * @param spyInstance 
			 * @return  
			 */
			function c(spyInstance : any): boolean;			
			/**
			 * 
			 */
			function c();
						
			/**
			 * 
			 * @param spyInstance 
			 */
			function n(spyInstance : any): void;
						
			/**
			 * 
			 */
			interface C {
								
				/**
				 * 
				 * @param spyInstance 
				 * @return  
				 */
				new (spyInstance : any): string;
			}

						
			/**
			 * 
			 * @param spyInstance 
			 * @return  
			 */
			function t(spyInstance : any): string;
		}
		
		/**
		 * 
		 */
		interface formatters {
						
			/**
			 * 
			 * @param spyInstance 
			 * @param args 
			 * @return  
			 */
			"*"(spyInstance : any, args : any): string;
		}
	}
	
	/**
	 * 
	 */
	namespace behavior{
				
		/**
		 * 
		 * @param stub 
		 * @return  
		 */
		function create(stub : any): sinon.behavior.CreateRet;		
		/**
		 * 
		 */
		function create();
				
		/**
		 * 
		 * @return  
		 */
		function isPresent(): /* !this.exception */ any;
				
		/**
		 * 
		 * @param context 
		 * @param args 
		 * @return  
		 */
		function invoke(context : any, args : any): /* !this.returnValue */ any;
				
		/**
		 * 
		 * @param index 
		 */
		function onCall(index : any): void;
				
		/**
		 * 
		 */
		function onFirstCall(): void;
				
		/**
		 * 
		 */
		function onSecondCall(): void;
				
		/**
		 * 
		 */
		function onThirdCall(): void;
				
		/**
		 * 
		 */
		function withArgs(): void;
				
		/**
		 * 
		 * @param pos 
		 * @return  
		 */
		function callsArg(pos : any): /* !this */ any;
				
		/**
		 * 
		 */
		export var callArgAt : number;
				
		/**
		 * 
		 */
		export var callbackArguments : Array<any>;
				
		/**
		 * 
		 */
		export var callbackAsync : boolean;
				
		/**
		 * 
		 * @param pos 
		 * @param context 
		 * @return  
		 */
		function callsArgOn(pos : any, context : any): /* !this */ any;
				
		/**
		 * 
		 * @param pos 
		 * @return  
		 */
		function callsArgWith(pos : any): /* !this */ any;
				
		/**
		 * 
		 * @param pos 
		 * @param context 
		 * @return  
		 */
		function callsArgOnWith(pos : any, context : any): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function yields(): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function yieldsRight(): /* !this */ any;
				
		/**
		 * 
		 * @param context 
		 * @return  
		 */
		function yieldsOn(context : any): /* !this */ any;
				
		/**
		 * 
		 * @param prop 
		 * @return  
		 */
		function yieldsTo(prop : any): /* !this */ any;
				
		/**
		 * 
		 * @param prop 
		 * @param context 
		 * @return  
		 */
		function yieldsToOn(prop : any, context : any): /* !this */ any;
				
		/**
		 * 
		 * @param error 
		 * @param message 
		 * @return  
		 */
		function throws(error : any, message : any): /* !this */ any;
				
		/**
		 * 
		 * @param value 
		 * @return  
		 */
		function returns(value : any): /* !this */ any;
				
		/**
		 * 
		 */
		export var returnValueDefined : boolean;
				
		/**
		 * 
		 * @param pos 
		 * @return  
		 */
		function returnsArg(pos : any): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function returnsThis(): /* !this */ any;
				
		/**
		 * 
		 */
		export var returnThis : boolean;
				
		/**
		 * 
		 */
		export var throwsException : /* sinon.behavior.throws */ any;
	}
	
	/**
	 * 
	 */
	namespace expectation{
				
		/**
		 * 
		 */
		export var minCalls : number;
				
		/**
		 * 
		 */
		export var maxCalls : number;
				
		/**
		 * 
		 * @param methodName 
		 * @return  
		 */
		function create(methodName : string): sinon.expectation.CreateRet;		
		/**
		 * 
		 */
		function create();
				
		/**
		 * 
		 * @param func 
		 * @param thisValue 
		 * @param args 
		 */
		function invoke(func : any, thisValue : any, args : any): void;
				
		/**
		 * 
		 * @param num 
		 * @return  
		 */
		function atLeast(num : number): /* !this */ any;
				
		/**
		 * 
		 */
		export var limitsSet : boolean;
				
		/**
		 * 
		 * @param num 
		 * @return  
		 */
		function atMost(num : number): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function never(): /* sinon.expectation */ any;
				
		/**
		 * 
		 * @return  
		 */
		function once(): /* sinon.expectation */ any;
				
		/**
		 * 
		 * @return  
		 */
		function twice(): /* sinon.expectation */ any;
				
		/**
		 * 
		 * @return  
		 */
		function thrice(): /* sinon.expectation */ any;
				
		/**
		 * 
		 * @param num 
		 * @return  
		 */
		function exactly(num : number): /* sinon.expectation */ any;
				
		/**
		 * 
		 * @return  
		 */
		function met(): boolean;
				
		/**
		 * 
		 * @param thisValue 
		 * @param args 
		 */
		function verifyCallAllowed(thisValue : any, args : any): void;
				
		/**
		 * 
		 */
		export var failed : boolean;
				
		/**
		 * 
		 * @param thisValue 
		 * @param args 
		 * @return  
		 */
		function allowsCall(thisValue : any, args : sinon.expectation.AllowsCall1): boolean;
				
		/**
		 * 
		 * @return  
		 */
		function withArgs(): /* !this */ any;
				
		/**
		 * 
		 */
		export var expectedArguments : Array<any>;
				
		/**
		 * 
		 * @return  
		 */
		function withExactArgs(): /* !this */ any;
				
		/**
		 * 
		 */
		export var expectsExactArgCount : boolean;
				
		/**
		 * 
		 * @param thisValue 
		 * @return  
		 */
		function on(thisValue : any): /* !this */ any;
				
		/**
		 * 
		 * @return  
		 */
		function toString(): string;
				
		/**
		 * 
		 * @return  
		 */
		function verify(): boolean;
				
		/**
		 * 
		 * @param message 
		 */
		function pass(message : string): void;
				
		/**
		 * 
		 * @param message 
		 */
		function fail(message : string): void;
				
		/**
		 * 
		 */
		export var invoking : boolean;
				
		/**
		 * 
		 */
		export var called : boolean;
				
		/**
		 * 
		 */
		export var callCount : number;
				
		/**
		 * 
		 */
		export var notCalled : boolean;
				
		/**
		 * 
		 */
		export var calledOnce : boolean;
				
		/**
		 * 
		 */
		export var calledTwice : boolean;
				
		/**
		 * 
		 */
		export var calledThrice : boolean;
				
		/**
		 * 
		 */
		export var firstCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		export var secondCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		export var thirdCall : /* sinon.spy.firstCall */ any;
				
		/**
		 * 
		 */
		export var lastCall : /* sinon.spy.firstCall */ any;
	}
		
	/**
	 * 
	 * @param object 
	 * @return  
	 */
	function mock(object : any): any;	
	/**
	 * 
	 */
	function mock();
	
	/**
	 * 
	 */
	namespace mock{
				
		/**
		 * 
		 * @param object 
		 * @return  
		 */
		function create(object : any): sinon.mock.CreateRet;		
		/**
		 * 
		 */
		function create();
				
		/**
		 * 
		 * @param method 
		 * @return  
		 */
		function expects(method : any): any;		
		/**
		 * 
		 */
		function expects();
		
		/**
		 * 
		 */
		namespace expectations{
		}
				
		/**
		 * 
		 */
		export var proxies : Array<any>;
				
		/**
		 * 
		 */
		function restore(): void;
				
		/**
		 * 
		 * @return  
		 */
		function verify(): boolean;
				
		/**
		 * 
		 * @param method 
		 * @param thisValue 
		 * @param args 
		 */
		function invokeMethod(method : any, thisValue : any, args : sinon.mock.InvokeMethod2): void;
	}
	
	/**
	 * 
	 */
	namespace collection{
				
		/**
		 * 
		 */
		function verify(): void;
				
		/**
		 * 
		 */
		export var fakes : Array<any>;
		
		/**
		 * 
		 */
		namespace fakes{
		}
				
		/**
		 * 
		 */
		function restore(): void;
				
		/**
		 * 
		 */
		function reset(): void;
				
		/**
		 * 
		 */
		function verifyAndRestore(): void;
				
		/**
		 * 
		 * @param fake 
		 * @return  
		 */
		function add(fake : any): any;
				
		/**
		 * 
		 * @return  
		 */
		function spy(): any;
				
		/**
		 * 
		 * @param object 
		 * @param property 
		 * @param value 
		 * @return  
		 */
		function stub(object : sinon.collection.Stub0, property : any, value : any): sinon.collection.StubRet;
				
		/**
		 * 
		 * @return  
		 */
		function mock(): any;		
		/**
		 * 
		 */
		function mock();
				
		/**
		 * 
		 * @param obj 
		 * @return  
		 */
		function inject(obj : sinon.collection.Inject0): sinon.collection.Inject0;
	}
		
	/**
	 * 
	 * @return  
	 */
	function useFakeTimers(): sinon.UseFakeTimersRet;
	
	/**
	 * 
	 */
	namespace clock{
				
		/**
		 * 
		 * @param now 
		 * @return  
		 */
		function create(now : any): /* sinon.fakeServerWithClock.clock */ any;
	}
	
	/**
	 * 
	 */
	var timers : {
				
		/**
		 * 
		 */
		Date : Date;
	}
	
	/**
	 * 
	 */
	interface Event {
				
		/**
		 * 
		 * @param type 
		 * @param bubbles 
		 * @param cancelable 
		 * @param target 
		 */
		new (type : string, bubbles : boolean, cancelable : boolean, target : /* sinon.ProgressEvent.target */ any);
				
		/**
		 * 
		 * @param type 
		 * @param bubbles 
		 * @param cancelable 
		 * @param target 
		 */
		initEvent(type : string, bubbles : boolean, cancelable : boolean, target : sinon.Event.prototype.InitEvent3): void;
				
		/**
		 * 
		 */
		stopPropagation(): void;
				
		/**
		 * 
		 */
		preventDefault(): void;
				
		/**
		 * 
		 */
		type : string;
				
		/**
		 * 
		 */
		bubbles : boolean;
				
		/**
		 * 
		 */
		cancelable : boolean;
		
		/**
		 * 
		 */
		target : {
						
			/**
			 * 
			 */
			async : boolean;
						
			/**
			 * 
			 */
			errorFlag : boolean;
						
			/**
			 * 
			 */
			sendFlag : boolean;
						
			/**
			 * 
			 */
			responseText : string;
						
			/**
			 * 
			 */
			response : string;
						
			/**
			 * 
			 */
			aborted : boolean;
			
			/**
			 * 
			 */
			requestHeaders : {
								
				/**
				 * 
				 */
				"Content-Type" : string;
			}
						
			/**
			 * 
			 */
			progress : number;
						
			/**
			 * 
			 */
			status : number;
						
			/**
			 * 
			 */
			statusText : string;
						
			/**
			 * 
			 */
			uploadProgress : /*no type*/{};
						
			/**
			 * 
			 */
			open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
						
			/**
			 * 
			 */
			readyStateChange : /* sinon.FakeXMLHttpRequest.prototype.readyStateChange */ any;
						
			/**
			 * 
			 */
			setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
						
			/**
			 * 
			 */
			setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
						
			/**
			 * 
			 */
			send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
						
			/**
			 * 
			 */
			abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
						
			/**
			 * 
			 */
			error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
						
			/**
			 * 
			 */
			getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
						
			/**
			 * 
			 */
			getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
						
			/**
			 * 
			 */
			setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
						
			/**
			 * 
			 */
			respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
						
			/**
			 * 
			 */
			downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
						
			/**
			 * 
			 */
			uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
		}
				
		/**
		 * 
		 */
		defaultPrevented : boolean;
	}
	
	/**
	 * 
	 */
	interface ProgressEvent extends sinon.Event {
				
		/**
		 * 
		 * @param type 
		 * @param progressEventRaw 
		 * @param target 
		 */
		new (type : string, progressEventRaw : /* sinon.ProgressEvent.!1 */ any, target : /* sinon.ProgressEvent.target */ any);
				
		/**
		 * 
		 */
		type : string;
				
		/**
		 * 
		 */
		bubbles : boolean;
				
		/**
		 * 
		 */
		cancelable : boolean;
				
		/**
		 * 
		 */
		defaultPrevented : boolean;
		
		/**
		 * 
		 */
		target : {
						
			/**
			 * 
			 */
			async : boolean;
						
			/**
			 * 
			 */
			errorFlag : boolean;
						
			/**
			 * 
			 */
			sendFlag : boolean;
						
			/**
			 * 
			 */
			responseText : string;
						
			/**
			 * 
			 */
			response : string;
						
			/**
			 * 
			 */
			aborted : boolean;
						
			/**
			 * 
			 */
			progress : number;
						
			/**
			 * 
			 */
			status : number;
						
			/**
			 * 
			 */
			statusText : string;
						
			/**
			 * 
			 */
			open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
						
			/**
			 * 
			 */
			readyStateChange : /* sinon.FakeXMLHttpRequest.prototype.readyStateChange */ any;
						
			/**
			 * 
			 */
			setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
						
			/**
			 * 
			 */
			setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
						
			/**
			 * 
			 */
			send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
						
			/**
			 * 
			 */
			abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
						
			/**
			 * 
			 */
			requestHeaders : /* sinon.FakeXMLHttpRequest.prototype.requestHeaders */ any;
						
			/**
			 * 
			 */
			responseHeaders : any;
						
			/**
			 * 
			 */
			error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
						
			/**
			 * 
			 */
			getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
						
			/**
			 * 
			 */
			getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
						
			/**
			 * 
			 */
			setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
						
			/**
			 * 
			 */
			respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
						
			/**
			 * 
			 */
			uploadProgress : /* sinon.FakeXMLHttpRequest.prototype.uploadProgress */ any;
						
			/**
			 * 
			 */
			downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
						
			/**
			 * 
			 */
			uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
		}
				
		/**
		 * 
		 */
		loaded : number;
				
		/**
		 * 
		 */
		total : number;
				
		/**
		 * 
		 */
		lengthComputable : boolean;
	}
		
	/**
	 * 
	 */
	interface CustomEvent {
				
		/**
		 * 
		 * @param type 
		 * @param customData 
		 * @param target 
		 * @return  
		 */
		new (type : string, customData : sinon.CustomEvent1, target : any): CustomEvent;
	}

	
	/**
	 * 
	 */
	namespace EventTarget{
				
		/**
		 * 
		 * @param event 
		 * @param listener 
		 */
		function addEventListener(event : any, listener : any): void;
				
		/**
		 * 
		 * @param event 
		 * @param listener 
		 * @return  
		 */
		function removeEventListener(event : any, listener : any): Array<any>;
				
		/**
		 * 
		 * @param event 
		 * @return  
		 */
		function dispatchEvent(event : /* sinon.EventTarget.ProgressEvent */ any): boolean;
		
		/**
		 * 
		 */
		namespace eventListeners{
		}
	}
		
	/**
	 * 
	 */
	export var loaded : number;
		
	/**
	 * 
	 */
	export var total : number;
		
	/**
	 * 
	 */
	export var lengthComputable : boolean;
		
	/**
	 * 
	 */
	function log(): void;
		
	/**
	 * 
	 * @param label 
	 * @param err 
	 */
	function logError(label : string, err : sinon.LogError1): void;
	
	/**
	 * 
	 */
	namespace logError{
				
		/**
		 * When set to true, any errors logged will be thrown immediately;
		 * If set to false, the errors will be thrown in separate execution frame.
		 */
		export var useImmediateExceptions : boolean;
				
		/**
		 * wrap realSetTimeout with something we can stub in tests
		 * @param func 
		 * @param timeout 
		 */
		function setTimeout(func : sinon.logError.SetTimeout0, timeout : number): void;
	}
	
	/**
	 * 
	 */
	namespace xdr{
		
		/**
		 * 
		 */
		namespace XDomainRequest{
			
			/**
			 * 
			 */
			namespace prototype{
								
				/**
				 * 
				 */
				export var responseText : string;
								
				/**
				 * 
				 */
				export var sendFlag : boolean;
								
				/**
				 * 
				 */
				export var readyState : number;
								
				/**
				 * 
				 */
				export var errorFlag : boolean;
								
				/**
				 * 
				 */
				export var aborted : boolean;
								
				/**
				 * 
				 */
				export var status : number;
								
				/**
				 * 
				 */
				export var isTimeout : boolean;
								
				/**
				 * 
				 */
				export var toString : /* !proto.toString */ any;
								
				/**
				 * 
				 */
				export var addEventListener : /* sinon.EventTarget.addEventListener */ any;
								
				/**
				 * 
				 */
				export var removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
								
				/**
				 * 
				 */
				export var dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
								
				/**
				 * 
				 */
				export var eventListeners : /* sinon.EventTarget.eventListeners */ any;
								
				/**
				 * 
				 */
				export var open : /* sinon.FakeXDomainRequest.prototype.open */ any;
								
				/**
				 * 
				 */
				export var readyStateChange : /* sinon.FakeXDomainRequest.prototype.readyStateChange */ any;
								
				/**
				 * 
				 */
				export var send : /* sinon.FakeXDomainRequest.prototype.send */ any;
								
				/**
				 * 
				 */
				export var abort : /* sinon.FakeXDomainRequest.prototype.abort */ any;
								
				/**
				 * 
				 */
				export var setResponseBody : /* sinon.FakeXDomainRequest.prototype.setResponseBody */ any;
								
				/**
				 * 
				 */
				export var respond : /* sinon.FakeXDomainRequest.prototype.respond */ any;
								
				/**
				 * 
				 */
				export var simulatetimeout : /* sinon.FakeXDomainRequest.prototype.simulatetimeout */ any;
			}
						
			/**
			 * 
			 */
			export var UNSENT : number;
						
			/**
			 * 
			 */
			export var OPENED : number;
						
			/**
			 * 
			 */
			export var LOADING : number;
						
			/**
			 * 
			 */
			export var DONE : number;
						
			/**
			 * 
			 */
			export var toString : /* !proto.toString */ any;
						
			/**
			 * 
			 */
			export var restore : /* sinon.FakeXDomainRequest.restore */ any;
						
			/**
			 * 
			 */
			export var onCreate : /* sinon.FakeXDomainRequest.onCreate */ any;
		}
				
		/**
		 * 
		 */
		export var supportsXDR : boolean;
				
		/**
		 * 
		 */
		export var workingXDR : boolean;
				
		/**
		 * 
		 */
		export var GlobalXDomainRequest : /* sinon.FakeXDomainRequest */ any;
	}
		
	/**
	 * 
	 * @return  
	 */
	function useFakeXDomainRequest(): () => void;
	
	/**
	 * 
	 */
	interface FakeXDomainRequest {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 * @param method 
		 * @param url 
		 */
		open(method : any, url : any): void;
				
		/**
		 * 
		 */
		responseText : string;
				
		/**
		 * 
		 */
		sendFlag : boolean;
				
		/**
		 * 
		 * @param state 
		 */
		readyStateChange(state : number): void;
				
		/**
		 * 
		 */
		readyState : number;
				
		/**
		 * 
		 * @param data 
		 */
		send(data : any): void;
				
		/**
		 * 
		 */
		errorFlag : boolean;
				
		/**
		 * 
		 */
		abort(): void;
				
		/**
		 * 
		 */
		aborted : boolean;
				
		/**
		 * 
		 * @param body 
		 */
		setResponseBody(body : string): void;
				
		/**
		 * 
		 * @param status 
		 * @param contentType 
		 * @param body 
		 */
		respond(status : any, contentType : any, body : any): void;
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		simulatetimeout(): void;
				
		/**
		 * 
		 */
		isTimeout : boolean;
				
		/**
		 * 
		 */
		addEventListener : /* sinon.EventTarget.addEventListener */ any;
				
		/**
		 * 
		 */
		removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
				
		/**
		 * 
		 */
		dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
				
		/**
		 * 
		 */
		eventListeners : /* sinon.EventTarget.eventListeners */ any;
				
		/**
		 * 
		 * @param keepOnCreate 
		 */
		restore(keepOnCreate : any): void;
				
		/**
		 * 
		 */
		UNSENT : number;
				
		/**
		 * 
		 */
		OPENED : number;
				
		/**
		 * 
		 */
		LOADING : number;
				
		/**
		 * 
		 */
		DONE : number;
				
		/**
		 * 
		 * @param xhrObj 
		 */
		onCreate(xhrObj : /* sinon.FakeXDomainRequest.FakeXMLHttpRequest */ any): void;
	}
	
	/**
	 * 
	 */
	namespace xhr{
		
		/**
		 * 
		 */
		namespace XMLHttpRequest{
						
			/**
			 * 
			 */
			export var useFilters : boolean;
						
			/**
			 * 
			 */
			export var parseXML : /*no type*/{};
			
			/**
			 * 
			 */
			var statusCodes : {
			}
			
			/**
			 * 
			 */
			namespace prototype{
								
				/**
				 * 
				 */
				export var async : boolean;
								
				/**
				 * 
				 */
				export var errorFlag : boolean;
								
				/**
				 * 
				 */
				export var sendFlag : boolean;
								
				/**
				 * 
				 */
				export var responseText : string;
								
				/**
				 * 
				 */
				export var response : string;
								
				/**
				 * 
				 */
				export var aborted : boolean;
								
				/**
				 * 
				 */
				export var progress : number;
								
				/**
				 * 
				 */
				export var status : number;
								
				/**
				 * 
				 */
				export var statusText : string;
								
				/**
				 * 
				 */
				export var toString : /* !proto.toString */ any;
								
				/**
				 * 
				 */
				export var open : /* sinon.FakeXMLHttpRequest.prototype.open */ any;
								
				/**
				 * 
				 */
				export var readyStateChange : /* sinon.FakeXMLHttpRequest.prototype.readyStateChange */ any;
								
				/**
				 * 
				 */
				export var setRequestHeader : /* sinon.FakeXMLHttpRequest.prototype.setRequestHeader */ any;
								
				/**
				 * 
				 */
				export var setResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.setResponseHeaders */ any;
								
				/**
				 * 
				 */
				export var send : /* sinon.FakeXMLHttpRequest.prototype.send */ any;
								
				/**
				 * 
				 */
				export var abort : /* sinon.FakeXMLHttpRequest.prototype.abort */ any;
								
				/**
				 * 
				 */
				export var requestHeaders : /* sinon.FakeXMLHttpRequest.prototype.requestHeaders */ any;
								
				/**
				 * 
				 */
				export var responseHeaders : any;
								
				/**
				 * 
				 */
				export var error : /* sinon.FakeXMLHttpRequest.prototype.error */ any;
								
				/**
				 * 
				 */
				export var getResponseHeader : /* sinon.FakeXMLHttpRequest.prototype.getResponseHeader */ any;
								
				/**
				 * 
				 */
				export var getAllResponseHeaders : /* sinon.FakeXMLHttpRequest.prototype.getAllResponseHeaders */ any;
								
				/**
				 * 
				 */
				export var setResponseBody : /* sinon.FakeXMLHttpRequest.prototype.setResponseBody */ any;
								
				/**
				 * 
				 */
				export var respond : /* sinon.FakeXMLHttpRequest.prototype.respond */ any;
								
				/**
				 * 
				 */
				export var uploadProgress : /* sinon.FakeXMLHttpRequest.prototype.uploadProgress */ any;
								
				/**
				 * 
				 */
				export var downloadProgress : /* sinon.FakeXMLHttpRequest.prototype.downloadProgress */ any;
								
				/**
				 * 
				 */
				export var uploadError : /* sinon.FakeXMLHttpRequest.prototype.uploadError */ any;
								
				/**
				 * 
				 */
				export var addEventListener : /* sinon.EventTarget.addEventListener */ any;
								
				/**
				 * 
				 */
				export var removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
								
				/**
				 * 
				 */
				export var dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
								
				/**
				 * 
				 */
				export var eventListeners : /* sinon.EventTarget.eventListeners */ any;
			}
						
			/**
			 * 
			 */
			export var UNSENT : number;
						
			/**
			 * 
			 */
			export var OPENED : number;
						
			/**
			 * 
			 */
			export var HEADERS_RECEIVED : number;
						
			/**
			 * 
			 */
			export var LOADING : number;
						
			/**
			 * 
			 */
			export var DONE : number;
						
			/**
			 * 
			 */
			export var toString : /* !proto.toString */ any;
						
			/**
			 * 
			 */
			export var onCreate : /* sinon.FakeXDomainRequest.onCreate */ any;
						
			/**
			 * 
			 */
			export var filters : /* sinon.FakeXMLHttpRequest.filters */ any;
						
			/**
			 * 
			 */
			export var addFilter : /* sinon.FakeXMLHttpRequest.addFilter */ any;
						
			/**
			 * 
			 */
			export var defake : /*no type*/{};
						
			/**
			 * 
			 */
			export var restore : /* sinon.FakeXMLHttpRequest.restore */ any;
		}
				
		/**
		 * 
		 */
		interface GlobalActiveXObject {
						
			/**
			 * 
			 * @param objId 
			 * @return  
			 */
			new (objId : string): /* sinon.xhr.GlobalActiveXObject */ any;
		}

				
		/**
		 * 
		 */
		export var supportsActiveX : boolean;
				
		/**
		 * 
		 */
		export var supportsXHR : boolean;
				
		/**
		 * 
		 */
		export var supportsCORS : boolean;
				
		/**
		 * 
		 */
		export var GlobalXMLHttpRequest : /* sinon.FakeXMLHttpRequest */ any;
				
		/**
		 * 
		 */
		export var workingXHR : /* sinon.FakeXMLHttpRequest */ any;
	}
		
	/**
	 * 
	 * @return  
	 */
	function useFakeXMLHttpRequest(): () => void;
	
	/**
	 * Note that for FakeXMLHttpRequest to work pre ES5
	 * we lose some of the alignment with the spec.
	 * To ensure as close a match as possible,
	 * set responseType before calling open, send or respond;
	 */
	interface FakeXMLHttpRequest {
				
		/**
		 * 
		 */
		new ();
				
		/**
		 * 
		 */
		async : boolean;
				
		/**
		 * 
		 * @param method 
		 * @param url 
		 * @param async 
		 * @param username 
		 * @param password 
		 */
		open(method : any, url : any, async : any, username : any, password : any): void;
				
		/**
		 * 
		 * @param state 
		 */
		readyStateChange(state : any): void;
				
		/**
		 * 
		 * @param header 
		 * @param value 
		 */
		setRequestHeader(header : any, value : any): void;
				
		/**
		 * Helps testing
		 * @param headers 
		 */
		setResponseHeaders(headers : any): void;
				
		/**
		 * Currently treats ALL data as a DOMString (i.e. no Document)
		 * @param data 
		 */
		send(data : any): void;
				
		/**
		 * 
		 */
		errorFlag : boolean;
				
		/**
		 * 
		 */
		sendFlag : boolean;
				
		/**
		 * 
		 */
		responseText : string;
				
		/**
		 * 
		 */
		response : string;
				
		/**
		 * 
		 */
		abort(): void;
				
		/**
		 * 
		 */
		aborted : boolean;
		
		/**
		 * 
		 */
		requestHeaders : {
						
			/**
			 * 
			 */
			"Content-Type" : string;
		}
				
		/**
		 * 
		 */
		error(): void;
				
		/**
		 * 
		 * @param header 
		 * @return  
		 */
		getResponseHeader(header : string): /* !this.responseHeaders.<i> */ any;
				
		/**
		 * 
		 * @return  
		 */
		getAllResponseHeaders(): string;
				
		/**
		 * 
		 * @param body 
		 */
		setResponseBody(body : string): void;
				
		/**
		 * 
		 */
		progress : number;
				
		/**
		 * 
		 * @param status 
		 * @param headers 
		 * @param body 
		 */
		respond(status : any, headers : any, body : any): void;
				
		/**
		 * 
		 */
		status : number;
				
		/**
		 * 
		 */
		statusText : string;
				
		/**
		 * 
		 * @param progressEventRaw 
		 */
		uploadProgress(progressEventRaw : any): void;
				
		/**
		 * 
		 * @param progressEventRaw 
		 */
		downloadProgress(progressEventRaw : any): void;
				
		/**
		 * 
		 * @param error 
		 */
		uploadError(error : any): void;
				
		/**
		 * 
		 */
		addEventListener : /* sinon.EventTarget.addEventListener */ any;
				
		/**
		 * 
		 */
		removeEventListener : /* sinon.EventTarget.removeEventListener */ any;
				
		/**
		 * 
		 */
		dispatchEvent : /* sinon.EventTarget.dispatchEvent */ any;
				
		/**
		 * 
		 */
		eventListeners : /* sinon.EventTarget.eventListeners */ any;
				
		/**
		 * 
		 */
		filters : Array<any>;
				
		/**
		 * 
		 * @param fn 
		 */
		addFilter(fn : any): void;
				
		/**
		 * 
		 * @param fakeXhr 
		 * @param xhrArgs 
		 */
		defake(fakeXhr : sinon.FakeXMLHttpRequest.Defake0, xhrArgs : sinon.FakeXMLHttpRequest.Defake1): void;
				
		/**
		 * 
		 */
		useFilters : boolean;
				
		/**
		 * 
		 * @param text 
		 * @return  
		 */
		parseXML(text : string): sinon.FakeXMLHttpRequest.ParseXMLRet;
		
		/**
		 * 
		 */
		statusCodes : {
		}
				
		/**
		 * 
		 * @param keepOnCreate 
		 */
		restore(keepOnCreate : any): void;
				
		/**
		 * 
		 */
		UNSENT : number;
				
		/**
		 * 
		 */
		OPENED : number;
				
		/**
		 * 
		 */
		HEADERS_RECEIVED : number;
				
		/**
		 * 
		 */
		LOADING : number;
				
		/**
		 * 
		 */
		DONE : number;
		
		/**
		 * 
		 */
		upload : {
			
			/**
			 * 
			 */
			eventListeners : {
								
				/**
				 * 
				 */
				abort : Array<any>;
								
				/**
				 * 
				 */
				error : Array<any>;
								
				/**
				 * 
				 */
				load : Array<any>;
								
				/**
				 * 
				 */
				loadend : Array<any>;
								
				/**
				 * 
				 */
				progress : Array<any>;
			}
		}
				
		/**
		 * 
		 */
		responseType : string;
				
		/**
		 * 
		 */
		withCredentials : boolean;
				
		/**
		 * 
		 */
		onreadystatechange(): void;
				
		/**
		 * 
		 */
		onSend(): void;
	}
	
	/**
	 * 
	 */
	namespace fakeServer{
				
		/**
		 * 
		 * @param config 
		 * @return  
		 */
		function create(config : any): sinon.fakeServer.CreateRet;
				
		/**
		 * 
		 * @param config 
		 */
		function configure(config : any): void;
				
		/**
		 * 
		 * @param xhrObj 
		 */
		function addRequest(xhrObj : any): void;
				
		/**
		 * 
		 */
		export var responding : boolean;
				
		/**
		 * 
		 * @param request 
		 * @return  
		 */
		function getHTTPMethod(request : sinon.fakeServer.GetHTTPMethod0):  /* error */ any;
				
		/**
		 * 
		 * @param xhr 
		 */
		function handleRequest(xhr : /* sinon.fakeServer.queue.<i> */ any): void;
				
		/**
		 * 
		 */
		export var queue : Array<sinon.fakeServer.QueueI>;
				
		/**
		 * 
		 * @param response 
		 * @param undefined 
		 * @param undefined 
		 * @param request 
		 */
		function log(response : sinon.fakeServer.Log0, param2 : any, param3 : /* string] */ any, request : /* sinon.fakeServer.queue.<i> */ any): void;
				
		/**
		 * 
		 * @param method 
		 * @param url 
		 * @param body 
		 */
		function respondWith(method : any, url : any, body : any): void;
				
		/**
		 * 
		 */
		export var response : Array<any>;
				
		/**
		 * 
		 */
		export var responses : Array<sinon.fakeServer.ResponsesI>;
				
		/**
		 * 
		 */
		function respond(): void;
				
		/**
		 * 
		 * @param request 
		 */
		function processRequest(request : /* sinon.fakeServer.queue.<i> */ any): void;
				
		/**
		 * 
		 * @return  
		 */
		function restore(): /* !this.xhr.restore */ any;
				
		/**
		 * 
		 */
		export var xhr : /* sinon.FakeXMLHttpRequest */ any;
	}
	
	/**
	 * 
	 */
	interface fakeServerWithClock {
				
		/**
		 * 
		 * @param xhr 
		 */
		addRequest(xhr : any): void;
				
		/**
		 * 
		 */
		respond(): void;
				
		/**
		 * 
		 * @return  
		 */
		restore(): (keepOnCreate : any) => void;
		
		/**
		 * 
		 */
		clock : {
						
			/**
			 * 
			 * @param func 
			 * @param timeout 
			 * @return  
			 */
			setTimeout(func : any, timeout : any): number;
						
			/**
			 * 
			 * @param timerId 
			 */
			clearTimeout(timerId : any): void;
						
			/**
			 * 
			 * @param func 
			 * @param timeout 
			 * @return  
			 */
			setInterval(func : any, timeout : any): number;
						
			/**
			 * 
			 * @param timerId 
			 */
			clearInterval(timerId : any): void;
						
			/**
			 * 
			 * @param func 
			 * @return  
			 */
			setImmediate(func : any): number;
						
			/**
			 * 
			 * @param timerId 
			 */
			clearImmediate(timerId : any): void;
						
			/**
			 * 
			 */
			duringTick : boolean;
						
			/**
			 * 
			 * @param ms 
			 * @return  
			 */
			tick(ms : number): any;
						
			/**
			 * 
			 */
			reset(): void;
						
			/**
			 * 
			 * @param now 
			 */
			setSystemTime(now : any): void;
						
			/**
			 * 
			 */
			uninstall(): void;
						
			/**
			 * 
			 */
			restore : /* sinon.fakeServerWithClock.clock.uninstall */ any;
		}
				
		/**
		 * 
		 */
		resetClock : boolean;
				
		/**
		 * 
		 */
		longestTimeout : number;
	}
	
	/**
	 * 
	 */
	namespace assert{
				
		/**
		 * 
		 */
		export var failException : string;
				
		/**
		 * 
		 * @param message 
		 */
		function fail(message : string): void;
				
		/**
		 * 
		 */
		function pass(): void;
				
		/**
		 * 
		 */
		function callOrder(): void;
				
		/**
		 * 
		 * @param method 
		 * @param count 
		 */
		function callCount(method : any, count : any): void;
				
		/**
		 * 
		 * @param target 
		 * @param options 
		 * @return  
		 */
		function expose(target : sinon.assert.Expose0, options : any): sinon.assert.Expose0;
				
		/**
		 * 
		 * @param actual 
		 * @param expectation 
		 */
		function match(actual : any, expectation : any): void;
	}
}

declare module 'sinon' {

	export = sinon;    //legacy ts module export
}
