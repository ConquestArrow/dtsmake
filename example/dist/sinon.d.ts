// Type definitions for sinon
// Project: [LIBRARY_URL_HERE] 
// Definitions by: [YOUR_NAME_HERE] <[YOUR_URL_HERE]> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped
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
declare namespace formatio{
	// formatio.ascii.!0
	type Ascii0 = Array<any>;
}
declare namespace sinon{
	// sinon.wrapMethod.!0
	
	/**
	 * 
	 */
	interface WrapMethod0 {
				
		/**
		 * 
		 * @return  
		 */
		toString(): string;
				
		/**
		 * 
		 * @return  
		 */
		valueOf(): string;
				
		/**
		 * 
		 * @return  
		 */
		prototype(): string;
				
		/**
		 * 
		 * @return  
		 */
		length(): string;
				
		/**
		 * 
		 * @return  
		 */
		unique(): string;
	}
}
declare namespace sinon{
	// sinon.wrapMethod.!2
	
	/**
	 * 
	 */
	interface WrapMethod2 {
		
		/**
		 * 
		 */
		restore : {
						
			/**
			 * 
			 */
			sinon : boolean;
		}
				
		/**
		 * 
		 */
		(): void;
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
		mock : /*no type*/{};
				
		/**
		 * 
		 */
		inject : /*no type*/{};
				
		/**
		 * 
		 */
		verify : /* sinon.collection.verify */ any;
				
		/**
		 * 
		 */
		fakes : /* sinon.collection.fakes */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.collection.restore */ any;
				
		/**
		 * 
		 */
		reset : /* sinon.collection.reset */ any;
				
		/**
		 * 
		 */
		verifyAndRestore : /* sinon.collection.verifyAndRestore */ any;
				
		/**
		 * 
		 */
		add : /* sinon.collection.add */ any;
				
		/**
		 * 
		 */
		spy : /* sinon.collection.spy */ any;
				
		/**
		 * 
		 */
		stub : /*no type*/{};
	}
}
declare namespace sinon.Create0{
	// sinon.create.!0.mock.!ret
	
	/**
	 * 
	 */
	interface MockRet {
				
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
		behaviors : {
		}
				
		/**
		 * 
		 */
		returnThis : boolean;
				
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
		func : /* sinon.mock.expectations.<i>.<i> */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.mock.expectations.<i>.<i>.restore */ any;
		
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
		toString : /* sinon.expectation.toString */ any;
				
		/**
		 * 
		 */
		instantiateFake : /* sinon.spy.create */ any;
				
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
		create : /* sinon.expectation.create */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.expectation.invoke */ any;
				
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
				
		/**
		 * 
		 */
		resetBehavior : /* sinon.stub.resetBehavior */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.stub.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.stub.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.stub.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.stub.onThirdCall */ any;
				
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
		reset : /* sinon.spy.reset */ any;
	}
}
declare namespace sinon.Create0.MockRet{
	// sinon.create.!0.mock.!ret.named.!ret
	
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
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.withArgs */ any;
	}
}
declare namespace sinon.Create0.MockRet{
	// sinon.create.!0.mock.!ret.withArgs.!ret
	
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
		withArgs : /* sinon.expectation.withArgs */ any;
				
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
declare namespace sinon.Create0.MockRet.BehaviorsI{
	// sinon.create.!0.mock.!ret.behaviors.<i>.callsArg.!ret
	
	/**
	 * 
	 */
	interface CallsArgRet {
				
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
		create : /* sinon.behavior.create */ any;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
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
		withArgs : /* sinon.behavior.withArgs */ any;
				
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
	}
}
declare namespace sinon.Create0{
	// sinon.create.!0.inject.!0
	
	/**
	 * 
	 */
	interface Inject0 {
		
		/**
		 * 
		 */
		serverPrototype : {
			
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
				statusCodes : {
					
					/**
					 * 
					 */
					FakeXMLHttpRequest : {
												
						/**
						 * 
						 */
						statusCodes : string;
					}
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
					response : string;
										
					/**
					 * 
					 */
					aborted : boolean;
										
					/**
					 * 
					 */
					responseText : string;
					
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
					status : number;
										
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
				filters : /* sinon.FakeXMLHttpRequest.filters */ any;
								
				/**
				 * 
				 */
				addFilter : /* sinon.FakeXMLHttpRequest.addFilter */ any;
								
				/**
				 * 
				 */
				defake : /* sinon.FakeXMLHttpRequest.defake */ any;
								
				/**
				 * 
				 */
				parseXML : /* sinon.FakeXMLHttpRequest.parseXML */ any;
								
				/**
				 * 
				 */
				restore : /* sinon.FakeXMLHttpRequest.restore */ any;
								
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
			create : /* sinon.fakeServer.create */ any;
						
			/**
			 * 
			 */
			configure : /* sinon.fakeServer.configure */ any;
			
			/**
			 * 
			 */
			queue : {
			}
						
			/**
			 * 
			 */
			addRequest : /* sinon.fakeServer.addRequest */ any;
						
			/**
			 * 
			 */
			getHTTPMethod : /* sinon.fakeServer.getHTTPMethod */ any;
						
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
				
		/**
		 * 
		 */
		fakes : /* sinon.collection.fakes */ any;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
		
		/**
		 * 
		 */
		match : {
						
			/**
			 * 
			 */
			defined : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			truthy : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			falsy : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			hasOwn : /* sinon.match.has */ any;
						
			/**
			 * 
			 */
			bool : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			number : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			string : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			object : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			func : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			array : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			regexp : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			date : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			isMatcher : /* sinon.match.isMatcher */ any;
						
			/**
			 * 
			 */
			any : /* sinon.match.any */ any;
						
			/**
			 * 
			 */
			same : /* sinon.match.same */ any;
						
			/**
			 * 
			 */
			typeOf : /* sinon.match.typeOf */ any;
						
			/**
			 * 
			 */
			instanceOf : /* sinon.match.instanceOf */ any;
						
			/**
			 * 
			 */
			has : /* sinon.match.has */ any;
		}
				
		/**
		 * 
		 */
		useFakeTimers : /* sinon.sandbox.useFakeTimers */ any;
				
		/**
		 * 
		 */
		useFakeServer : /* sinon.sandbox.useFakeServer */ any;
				
		/**
		 * 
		 */
		server : /* sinon.sandbox.server */ any;
				
		/**
		 * 
		 */
		inject : /* sinon.sandbox.inject */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.sandbox.restore */ any;
				
		/**
		 * 
		 */
		restoreContext : /* sinon.sandbox.restoreContext */ any;
				
		/**
		 * 
		 */
		injectedKeys : /* sinon.sandbox.injectedKeys */ any;
				
		/**
		 * 
		 */
		create : /* sinon.sandbox.create */ any;
	}
}
declare namespace sinon.Create0.Inject0.serverPrototype.xhr.prototype{
	// sinon.create.!0.inject.!0.serverPrototype.xhr.prototype.uploadProgress.!0
	
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
declare namespace sinon.spy{
	// sinon.spy.reset.!ret
	
	/**
	 * 
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
		named : /*no type*/{};
				
		/**
		 * 
		 */
		withArgs : /*no type*/{};
		
		/**
		 * 
		 */
		behaviors : {
		}
				
		/**
		 * 
		 */
		returnThis : boolean;
				
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
		spyCall : /* sinon.spyCall */ any;
				
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
		getCalls : /*no type*/{};
				
		/**
		 * 
		 */
		func : /* sinon.mock.expectations.<i>.<i> */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.mock.expectations.<i>.<i>.restore */ any;
				
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
		instantiateFake : /* sinon.spy.create */ any;
				
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
				
		/**
		 * 
		 */
		resetBehavior : /* sinon.stub.resetBehavior */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.stub.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.stub.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.stub.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.stub.onThirdCall */ any;
				
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
declare namespace sinon.spy.ResetRet{
	// sinon.spy.reset.!ret.named.!ret
	
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
				
		/**
		 * 
		 */
		invoke : /* sinon.spy.invoke */ any;
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.withArgs */ any;
	}
}
declare namespace sinon.spy.ResetRet{
	// sinon.spy.reset.!ret.withArgs.!ret
	
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
declare namespace sinon.spy.ResetRet.BehaviorsI{
	// sinon.spy.reset.!ret.behaviors.<i>.callsArg.!ret
	
	/**
	 * 
	 */
	interface CallsArgRet {
				
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
		create : /* sinon.behavior.create */ any;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
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
		withArgs : /* sinon.behavior.withArgs */ any;
				
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
	}
}
declare namespace sinon.spy{
	// sinon.spy.invoke.!2
	type Invoke2 = Array<any>;
}
declare namespace sinon.spy{
	// sinon.spy.named.!ret
	
	/**
	 * Public API
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
				
		/**
		 * 
		 */
		withArgs : /* sinon.spy.withArgs */ any;
	}
}
declare namespace sinon.spy{
	// sinon.spy.getCalls.!ret
	type GetCallsRet = Array</* sinon.spy.firstCall */ any>;
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
		throwsException : /* sinon.behavior.throws */ any;
				
		/**
		 * 
		 */
		isPresent : /* sinon.behavior.isPresent */ any;
				
		/**
		 * 
		 */
		invoke : /* sinon.behavior.invoke */ any;
				
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
		withArgs : /* sinon.behavior.withArgs */ any;
				
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
declare namespace sinon.stub{
	// sinon.stub.behaviors.<i>
	
	/**
	 * 
	 */
	interface BehaviorsI {
				
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
		invoke : /* sinon.behavior.invoke */ any;
				
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
		withArgs : /* sinon.behavior.withArgs */ any;
				
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
	}
}
declare namespace sinon{
	// sinon.stub.!0
	
	/**
	 * 
	 */
	interface Stub0 {
				
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
		withArgs : /*no type*/{};
				
		/**
		 * 
		 */
		returnThis : boolean;
				
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
		instantiateFake : /* sinon.spy.create */ any;
				
		/**
		 * 
		 */
		spyCall : /* sinon.spyCall */ any;
				
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
				
		/**
		 * 
		 */
		func : /* sinon.mock.expectations.<i>.<i> */ any;
				
		/**
		 * 
		 */
		behaviors : /* sinon.stub.behaviors */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.mock.expectations.<i>.<i>.restore */ any;
				
		/**
		 * 
		 */
		resetBehavior : /* sinon.stub.resetBehavior */ any;
				
		/**
		 * 
		 */
		onCall : /* sinon.stub.onCall */ any;
				
		/**
		 * 
		 */
		onFirstCall : /* sinon.stub.onFirstCall */ any;
				
		/**
		 * 
		 */
		onSecondCall : /* sinon.stub.onSecondCall */ any;
				
		/**
		 * 
		 */
		onThirdCall : /* sinon.stub.onThirdCall */ any;
				
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
	}
}
declare namespace sinon.Stub0{
	// sinon.stub.!0.withArgs.!ret
	
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
declare namespace sinon{
	// sinon.stub.!2
	type Stub2 = (() => void);
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
		expectations : {
		}
				
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
		restore : /* sinon.mock.restore */ any;
				
		/**
		 * 
		 */
		verify : /* sinon.mock.verify */ any;
				
		/**
		 * 
		 */
		invokeMethod : /* sinon.mock.invokeMethod */ any;
	}
}
declare namespace sinon.mock.expectations{
	// sinon.mock.expectations.<i>.<i>
	
	/**
	 * Retain the function length:
	 */
	interface ExpectationsII {
				
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
		restore(): void;
				
		/**
		 * 
		 */
		returnThis : boolean;
				
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
		(): void;
	}
}
declare namespace sinon.mock{
	// sinon.mock.invokeMethod.!2
	type InvokeMethod2 = Array<any>;
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
		serverPrototype : {
			
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
				statusCodes : {
					
					/**
					 * 
					 */
					FakeXMLHttpRequest : {
												
						/**
						 * 
						 */
						statusCodes : string;
					}
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
					response : string;
										
					/**
					 * 
					 */
					aborted : boolean;
										
					/**
					 * 
					 */
					responseText : string;
					
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
					status : number;
										
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
				defake : /* sinon.FakeXMLHttpRequest.defake */ any;
								
				/**
				 * 
				 */
				parseXML : /* sinon.FakeXMLHttpRequest.parseXML */ any;
								
				/**
				 * 
				 */
				restore : /* sinon.FakeXMLHttpRequest.restore */ any;
			}
						
			/**
			 * 
			 */
			responding : boolean;
			
			/**
			 * 
			 */
			queue : {
			}
						
			/**
			 * 
			 */
			create : /* sinon.fakeServer.create */ any;
						
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
			getHTTPMethod : /* sinon.fakeServer.getHTTPMethod */ any;
						
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
				
		/**
		 * 
		 */
		fakes : /* sinon.collection.fakes */ any;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
				
		/**
		 * 
		 */
		match : /* sinon.match */ any;
				
		/**
		 * 
		 */
		server : /* sinon.sandbox.server */ any;
				
		/**
		 * 
		 */
		useFakeTimers : /* sinon.sandbox.useFakeTimers */ any;
				
		/**
		 * 
		 */
		useFakeServer : /* sinon.sandbox.useFakeServer */ any;
				
		/**
		 * 
		 */
		inject : /* sinon.sandbox.inject */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.sandbox.restore */ any;
				
		/**
		 * 
		 */
		restoreContext : /* sinon.sandbox.restoreContext */ any;
				
		/**
		 * 
		 */
		injectedKeys : /* sinon.sandbox.injectedKeys */ any;
				
		/**
		 * 
		 */
		create : /* sinon.sandbox.create */ any;
	}
}
declare namespace sinon.collection.Inject0.serverPrototype.xhr.prototype{
	// sinon.collection.inject.!0.serverPrototype.xhr.prototype.uploadProgress.!0
	
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
		response : string;
				
		/**
		 * 
		 */
		aborted : boolean;
				
		/**
		 * 
		 */
		responseText : string;
		
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
		status : number;
				
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
}
declare namespace sinon.Event.prototype.InitEvent3{
	// sinon.Event.prototype.initEvent.!3.uploadProgress.!0
	
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
	 * 
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
	// sinon.useFakeXDomainRequest.!ret
	
	/**
	 * 
	 */
	interface UseFakeXDomainRequestRet {
		
		/**
		 * 
		 */
		prototype : {
						
			/**
			 * Access to this should actually throw an error
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
			toString : /* !proto.toString */ any;
						
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
			open : /* sinon.FakeXDomainRequest.prototype.open */ any;
						
			/**
			 * 
			 */
			readyStateChange : /* sinon.FakeXDomainRequest.prototype.readyStateChange */ any;
						
			/**
			 * 
			 */
			send : /* sinon.FakeXDomainRequest.prototype.send */ any;
						
			/**
			 * 
			 */
			abort : /* sinon.FakeXDomainRequest.prototype.abort */ any;
						
			/**
			 * 
			 */
			setResponseBody : /* sinon.FakeXDomainRequest.prototype.setResponseBody */ any;
						
			/**
			 * 
			 */
			respond : /* sinon.FakeXDomainRequest.prototype.respond */ any;
						
			/**
			 * 
			 */
			simulatetimeout : /* sinon.FakeXDomainRequest.prototype.simulatetimeout */ any;
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
		restore : /* sinon.FakeXDomainRequest.restore */ any;
				
		/**
		 * 
		 */
		onCreate : /* sinon.FakeXDomainRequest.onCreate */ any;
	}
}
declare namespace sinon{
	// sinon.useFakeXMLHttpRequest.!ret
	
	/**
	 * 
	 */
	interface UseFakeXMLHttpRequestRet {
				
		/**
		 * 
		 */
		useFilters : boolean;
		
		/**
		 * 
		 */
		statusCodes : {
			
			/**
			 * 
			 */
			FakeXMLHttpRequest : {
								
				/**
				 * 
				 */
				statusCodes : string;
			}
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
			response : string;
						
			/**
			 * 
			 */
			aborted : boolean;
						
			/**
			 * 
			 */
			responseText : string;
						
			/**
			 * 
			 */
			status : number;
						
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
		defake : /* sinon.FakeXMLHttpRequest.defake */ any;
				
		/**
		 * 
		 */
		parseXML : /* sinon.FakeXMLHttpRequest.parseXML */ any;
				
		/**
		 * 
		 */
		restore : /* sinon.FakeXMLHttpRequest.restore */ any;
	}
}
declare namespace sinon.FakeXMLHttpRequest{
	// sinon.FakeXMLHttpRequest.defake.!1
	type Defake1 = Array<any>;
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
declare namespace sinon.sandbox{
	// sinon.sandbox.create.!0
	
	/**
	 * 
	 */
	interface Create0 {
	}
}
declare namespace sinon{
	// sinon.test.!0
	type Test0 = (() => void);
}
declare namespace sinon{
	// sinon.test.!ret
	type TestRet = (() => void);
}
declare namespace sinon.Create0.MockRet.NamedRet{
	// sinon.create.!0.mock.!ret.named.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.Create0.MockRet{
	// sinon.create.!0.mock.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.spy.ResetRet{
	// sinon.spy.reset.!ret.getCalls.!ret
	
	/**
	 * 
	 */
	interface GetCallsRet {
	}
}
declare namespace sinon.Create0{
	// sinon.create.!0.stub.!ret
	
	/**
	 * 
	 */
	interface StubRet {
				
		/**
		 * 
		 */
		restore : /* sinon.collection.stub.!ret.restore */ any;
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
	function isArguments(object : any): boolean;
		
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
	function keys(object : any): KeysRet;
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
	function configure(options : formatio.Configure0): ConfigureRet;
		
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
	function ascii(object : formatio.Ascii0, processed : Array<any>, indent : Array<any>): formatio.Ascii0;
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
	function wrapMethod(object : sinon.WrapMethod0, property : any, method : sinon.WrapMethod2): sinon.WrapMethod2;
		
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
	function deepEqual(a : (() => boolean) | ((actual : any) => boolean), b : any): boolean;
		
	/**
	 * 
	 * @param func 
	 * @return  
	 */
	function functionName(func : (() => void) | ((actual : any) => boolean)):  /* error */ any;
		
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
	function objectKeys(obj : {} | (() => void)): ObjectKeysRet;
		
	/**
	 * 
	 * @param object 
	 * @param property 
	 */
	function getPropertyDescriptor(object : any, property : any): void;
		
	/**
	 * 
	 * @param custom 
	 * @return  
	 */
	function getConfig(custom : any): GetConfigRet;
	
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
	function timesInWords(count : number): string;
		
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
	 */
	function extend(target : any): void;
		
	/**
	 * 
	 * @param value 
	 * @return  
	 */
	function typeOf(value : any): string;
		
	/**
	 * 
	 * @param expectation 
	 * @param message 
	 * @return  
	 */
	function match(expectation : (() => boolean) | ((actual : any) => boolean), message : string): /* sinon.match.any */ any;
	
	/**
	 * 
	 */
	namespace match{
				
		/**
		 * 
		 * @param object 
		 * @return  
		 */
		function isMatcher(object : (() => boolean) | ((actual : any) => boolean)): boolean;
		
		/**
		 * 
		 */
		namespace any{
						
			/**
			 * 
			 * @param actual 
			 * @return  
			 */
			function test(actual : any): boolean;
						
			/**
			 * 
			 */
			export var message : string;
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
	function format(value : Array<any>): string;
		
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
	function spyCall(spy : /* sinon.spy.named.!ret */ any | (() => void), thisValue : any, args : any, returnValue : any, exception : any, id : any, stack : any): /* sinon.spy.firstCall */ any;
	
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
	 */
	function spy(object : sinon.Spy0, property : any, types : any): void;
	
	/**
	 * 
	 */
	namespace spy{
				
		/**
		 * 
		 * @return  
		 */
		function reset(): ResetRet;
				
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
		function create(func : () => void, spyLength : any): () => void;
				
		/**
		 * 
		 * @param func 
		 * @param thisValue 
		 * @param args 
		 * @return  
		 */
		function invoke(func : any, thisValue : any, args : sinon.spy.Invoke2): any;
				
		/**
		 * 
		 */
		export var invoking : boolean;
				
		/**
		 * 
		 * @param name 
		 * @return  
		 */
		function named(name : any): NamedRet;
				
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
		function getCalls(): GetCallsRet;
				
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
		 */
		function withArgs(): void;
				
		/**
		 * 
		 */
		export var fakes : Array<any>;
				
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
			function c(spyInstance : any): boolean			
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
		function create(stub : (() => void) | {}): CreateRet;
				
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
	 * @param object 
	 * @param property 
	 * @param func 
	 * @return  
	 */
	function stub(object : sinon.Stub0, property : any, func : sinon.Stub2): sinon.Stub0;
	
	/**
	 * 
	 */
	namespace stub{
				
		/**
		 * 
		 * @param stubLength 
		 * @return  
		 */
		function create(stubLength : any): () => void;
				
		/**
		 * 
		 */
		function resetBehavior(): void;
				
		/**
		 * 
		 */
		export var behaviors : Array<sinon.stub.BehaviorsI>;
				
		/**
		 * 
		 */
		export var returnThis : boolean;
				
		/**
		 * 
		 * @param index 
		 * @return  
		 */
		function onCall(index : number): /* !this.behaviors.<i> */ any;
				
		/**
		 * 
		 * @return  
		 */
		function onFirstCall(): /* sinon.stub.behaviors.<i> */ any;
				
		/**
		 * 
		 * @return  
		 */
		function onSecondCall(): /* sinon.stub.behaviors.<i> */ any;
				
		/**
		 * 
		 * @return  
		 */
		function onThirdCall(): /* sinon.stub.behaviors.<i> */ any;
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
		function create(methodName : string): () => void;
				
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
	function mock(object : any): () => void;
	
	/**
	 * 
	 */
	namespace mock{
				
		/**
		 * 
		 * @param object 
		 * @return  
		 */
		function create(object : any): CreateRet;
				
		/**
		 * 
		 * @param method 
		 * @return  
		 */
		function expects(method : any): () => void;
		
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
		function add(fake : /* sinon.collection.stub.!ret */ any | (() => void)): /* sinon.collection.stub.!ret */ any | (() => void);
				
		/**
		 * 
		 */
		function spy(): void;
				
		/**
		 * 
		 * @param object 
		 * @param property 
		 * @param value 
		 * @return  
		 */
		function stub(object : any, property : any, value : any): StubRet;
				
		/**
		 * 
		 * @return  
		 */
		function mock(): () => void;
				
		/**
		 * 
		 * @param obj 
		 * @return  
		 */
		function inject(obj : sinon.collection.Inject0): sinon.collection.Inject0;
	}
		
	/**
	 * 
	 */
	function useFakeTimers(): void;
	
	/**
	 * 
	 */
	namespace clock{
				
		/**
		 * 
		 * @param now 
		 */
		function create(now : any): void;
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
			response : string;
						
			/**
			 * 
			 */
			aborted : boolean;
						
			/**
			 * 
			 */
			responseText : string;
			
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
			status : number;
						
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
		new (type : string, progressEventRaw : any, target : any);
				
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
			response : string;
						
			/**
			 * 
			 */
			aborted : boolean;
						
			/**
			 * 
			 */
			responseText : string;
						
			/**
			 * 
			 */
			status : number;
						
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
		 */
		function removeEventListener(event : any, listener : any): void;
				
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
	function logError(label : string, err : Error): void;
	
	/**
	 * 
	 */
	namespace logError{
				
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
		export var supportsXDR : boolean;
				
		/**
		 * 
		 */
		export var workingXDR : boolean;
	}
		
	/**
	 * 
	 * @return  
	 */
	function useFakeXDomainRequest(): UseFakeXDomainRequestRet;
	
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
		 * Access to this should actually throw an error
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
		onCreate(xhrObj : /* sinon.sandbox.server */ any): void;
	}
	
	/**
	 * 
	 */
	namespace xhr{
				
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
	}
		
	/**
	 * 
	 * @return  
	 */
	function useFakeXMLHttpRequest(): UseFakeXMLHttpRequestRet;
	
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
		responseText : string;
		
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
		defake(fakeXhr : any, xhrArgs : sinon.FakeXMLHttpRequest.Defake1): void;
				
		/**
		 * 
		 */
		useFilters : boolean;
				
		/**
		 * 
		 * @param text 
		 */
		parseXML(text : string): void;
		
		/**
		 * 
		 */
		statusCodes : {
			
			/**
			 * 
			 */
			FakeXMLHttpRequest : {
								
				/**
				 * 
				 */
				statusCodes : string;
			}
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
		statusText : string;
		
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
				progress : Array<any>;
								
				/**
				 * 
				 */
				load : Array<any>;
								
				/**
				 * 
				 */
				abort : Array<any>;
								
				/**
				 * 
				 */
				error : Array<any>;
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
		function create(config : any): /* sinon.sandbox.server */ any;
				
		/**
		 * 
		 * @param config 
		 */
		function configure(config : any): void;
				
		/**
		 * 
		 * @param xhrObj 
		 */
		function addRequest(xhrObj : /* sinon.sandbox.server */ any): void;
				
		/**
		 * 
		 */
		export var responding : boolean;
				
		/**
		 * 
		 * @param request 
		 * @return  
		 */
		function getHTTPMethod(request : /* sinon.sandbox.server */ any):  /* error */ any;
				
		/**
		 * 
		 * @param xhr 
		 */
		function handleRequest(xhr : /* sinon.sandbox.server */ any): void;
				
		/**
		 * 
		 */
		export var queue : Array</* sinon.fakeServer.FakeXMLHttpRequest */ any>;
				
		/**
		 * 
		 * @param response 
		 * @param request 
		 */
		function log(response : Array<any>, request : /* sinon.sandbox.server */ any): void;
				
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
		function processRequest(request : /* sinon.sandbox.server */ any): void;
				
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
		resetClock : boolean;
				
		/**
		 * 
		 */
		longestTimeout : number;
	}
	
	/**
	 * 
	 */
	interface sandbox {
				
		/**
		 * 
		 */
		useFakeTimers(): void;
				
		/**
		 * 
		 */
		useFakeServer(): void;
		
		/**
		 * 
		 */
		server : {
						
			/**
			 * 
			 */
			status : number;
						
			/**
			 * 
			 */
			responding : boolean;
						
			/**
			 * 
			 */
			requests : Array<any>;
						
			/**
			 * 
			 */
			xhr : /* sinon.FakeXMLHttpRequest */ any;
						
			/**
			 * 
			 */
			queue : /* sinon.fakeServer.queue */ any;
						
			/**
			 * 
			 */
			onSend : /* sinon.FakeXMLHttpRequest.onSend */ any;
		}
				
		/**
		 * 
		 * @param obj 
		 * @return  
		 */
		inject(obj : any): any;
				
		/**
		 * 
		 */
		restore(): void;
				
		/**
		 * 
		 */
		restoreContext(): void;
				
		/**
		 * 
		 */
		injectedKeys : Array<any>;
				
		/**
		 * 
		 * @param config 
		 */
		create(config : sinon.sandbox.Create0): void;
				
		/**
		 * 
		 */
		fakes : /* sinon.collection.fakes */ any;
				
		/**
		 * 
		 */
		toString : /* !proto.toString */ any;
				
		/**
		 * 
		 */
		serverPrototype : /* sinon.fakeServer */ any;
				
		/**
		 * 
		 */
		match : /* sinon.match */ any;
	}
		
	/**
	 * 
	 * @param callback 
	 * @return  
	 */
	function test(callback : sinon.Test0): TestRet	
	/**
	 * 
	 */
	function test(): void;
	
	/**
	 * 
	 */
	namespace test{
		
		/**
		 * 
		 */
		namespace config{
						
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
	}
		
	/**
	 * 
	 * @param tests 
	 * @param prefix 
	 * @return  
	 */
	function testCase(tests : any, prefix : string): any;
	
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
		function expose(target : any, options : any): any;
				
		/**
		 * 
		 * @param actual 
		 * @param expectation 
		 */
		function match(actual : any, expectation : any): void;
	}
	
	/**
	 * 
	 */
	interface Error {
				
		/**
		 * 
		 */
		code : string;
				
		/**
		 * 
		 */
		name : string;
				
		/**
		 * 
		 */
		message : string;
	}
}

declare module 'sinon' {

	export = sinon;    //legacy ts module export
}
