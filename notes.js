/*
Objects - collection of properties and has a single prototype object.
          may be either an OBJECT or the NULL value.
*/

let point = { 
    x: 10,
    y: 20,
};

/*
Prototype - is a delegation object used to implement prototype-based inheritance.
*/

let point3D = {
    z: 30,
    __proto__ : point,  // inheriting `point` object
};

/*
Delegation - a mechanism used to resolve a property in the inheritance chain. 
             The process happens at runtime, hence is also called dynamic dispatch

             in case of the property chain is not found , the "undefined" value is returned
*/

let empty = {};

console.log(
    //function, from default prototype
    empty.toString,
    
    //undefined
    empty.x,
);

/*
    default object is never empty. It always inheritce something from the Object.prototype
     As such, to create prototype-less dictionary, necessary to set prototype to null 
*/

let dict = Object.create(null);
console.log(dict.toString);


/*
The dynamic dispatch mechanism allows full mutability of the inheritance chain, 
providing an ability to change the delegation object:
*/

let protoA = {x: 10};
let protoB = {x: 20};
 
// Same as `let objectC = {__proto__: protoA};`:
let objectC = Object.create(protoA);
console.log(objectC.x); // 10
 
// Change the delegate:
Object.setPrototypeOf(objectC, protoB);
console.log(objectC.x); // 20

/*
Note: even though the __proto__ property is standardized today, and is easier to use for explanations, 
on practice prefer using API methods for prototype manipulations, such as Object.create, Object.getPrototypeOf,
Object.setPrototypeOf, and similar on the Reflect module.
*/

/*********************************************************************/
                                //Class
/*
When a function is called 
    > a new execution context is created 
        > pushed onto the stack 
            > at this point it becomes "an active execution context"
                > when a funciton returns, its context is popped from the stack
    
    > a context which calls another context is called a "caller"
        > a context which is being called is a "callee"
*/

function recursive(flag) {     // <- callee
 
    // Exit condition.
    if (flag === 2) {
      return;
    }
   
    // Call recursively.
    recursive(++flag);
  }
   
  // Go.
  recursive(0);                 // <- caller of recursive function

  /*
    Execution context        - An execution context is a specification device 
                               that is used to track the runtime evaluation of the code. 

    Execution context stack  - An execution context stack is a LIFO structure used 
                               to maintain control flow and order of execution.
  */

   /* https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript
    A generator              - is a process that can be paused and resumed. 
                               Can yield multiple values. A generator in JavaScript consists of a 
                               generator function, which returns an iterable Gonerator object. 

                               Generators 
                                            > can maintain state  
                                            > providing an efficinent way to make iterators 
                                            > capable with dealing with infinite data streams 
                                ->These can be used to implement infinite scroll on the frontend of web application 
                                ->To operate on sound wave data 
                                
                                When used with Promises, generators can mimic the async/await functionality,
                                this allows to deal with asynchronous code in more "straightforward manner" and "readable manner"
   */

   /*
    A generator function      - is a function that returns a Generator Object. 
                                Defined by the "function" keyword followed by an "asterisk (*)"
                                Example: function* generatorFunction(){};
                                widely accepted way of writing place of the asterisk is after function
                                 ->function* generatorFunction(){};
                                as opposed to 
                                 ->function *generatorFunction(){};

                                Generator function can be defined in an expression:
                                 ->const generatorFunction = function* (){};
                                
                                Generators can even be be the methods of an object or class:
                                 -> const generatorObj = { *generatorMethod(){} }  <-- Generator as the method of an object
                                
                                 -> class GeneratorClass { *generatorMethod(){} }  <-- Generator as the method of a class
                                
                                Note: generatos x cannot be constructed with "new" keyword
                                                x cannot be used in conjuction with arrow function 
                                
                                Operators
                                    "yield"
                                        ->yield can pause a generator function adn return the value that follow yield
                                        ->providing lighweight way to iterate through values
                                        ->Generator does not require "return" statemement
                                            ->if omitted the last iteration will return {value: undefined, done: true}
                                    "for..of"
                                        ->Generators follow the iteration protocol, and can be iterated throguh "for..of"
                                        ->without creating infinite loop for infinite data stream "for..of" loop is not useable
                                            ->using "spread" or "for...of" on an infinite data stream will make looping infinite data all at once
                                              which will cause the environment to crash
                                            ->for complex infinite data stream create Fibonnaci generator function
                                            // Create a fibonacci generator function
                                                function* fibonacci() {
                                                let prev = 0
                                                let next = 1

                                                yield prev
                                                yield next

                                                // Add previous and next values and yield them forever
                                                while (true) {
                                                    const newVal = next + prev

                                                    yield newVal

                                                    prev = next
                                                    next = newVal
                                                            }//end of while loop
                                                }//end of fibonacci function
                                            ->ability of working with infinite data sets is one part of what makes generators powerful
                                                ->EXAMPLE OF INFINITE SCROLL : https://infinite-scroll.com/
                                            ->this can be used for implementing infinite scroll on the frontend of a web application 
                                    "spread"
                                        ->the spread operator can also be used to assingthe values of a Generator to an array
                                
                                Closing Generator 
                                    "return()"
                                        ->forces Generatro object to complete and to ignore any other yield keywords
                                            ->useful for asynchronus programming to make functions cancelable
                                                ->for example: interrupting a web request when a user wants to perform a different action
                                    "throw()"
                                        ->used if the body of a generator functino has a way to catch and deal with errors 
                                        ->This starts up the generator -> throws the error in -> terminates the generator
                                            -> try...catch
                                            ->generator.next()
                                              generator.throw(new Error('Agent Smith!'))
                                
                                Delegation 
                                    yield*
                                        ->used to delegate further values to another generator.
                                            ->when "yield*" is encountered within a generatro
                                                ->it will go indise the delegated generator
                                                    ->begins iterating through all the yields until that generator is closed
                                            ->can be used for semantically organize code while still having all yields be iterable in the right order
                                            -> Example:
                                                // Generator function that will be delegated to
                                                function* delegate() { <---------
                                                    yield 3                     '
                                                    yield 4                     '
                                                }                               '                
                                                                                '
                                                // Outer generator function     '
                                                function* begin() {             '
                                                    yield 1                     '
                                                    yield 2                     '
                                                yield* delegate()----------------
                                                }
                                    begin()
                                        ->// Iterate through the outer generator
                                                const generator = begin()
                                                for (const value of generator) {
                                                    console.log(value)
                                                }
   */   


  /*
  In general, the code of a context runs to a completion. However, some objects - 
  such as generators, may violate LIFO order of the stack. 
    > generator function may suspend running context
        > removes it from the stack before completion 
            > once a generator is activated again, its context is resumed 
                > and again pushed onto the stack
  */


function *gen() {           // <- The function* declaration (function keyword followed by an asterisk)
                            //    defines a "generator function", which returns a Generator object
  yield 1;
  return 2;
}
 
let g = gen();
 
console.log(
  g.next().value, // 1
  g.next().value, // 2
);

/*
    Identifier                - is a sequence of characters in the code that identifies a "variable", "function", or "property"
                                ->case-sensitive
                                ->can containe Unicode letters $,_,0-9 digits
                                ->may not start with digits
                                ->is part of code while string is data
*/

/*
    Lexical Environment        - is a strcuture used to define association between identifiers appearing 
                                 in the context with their values.
                               - Each environment can have a reference to an optional parent environement
                               - IN SHORT: is a storage of variables, functions, and classes defined in a scope
                               - Consists of "Environment Record" ( an actual storage table which maps identifiers to values) 

                               -> Identifier Resolution - is the machine process that returns the value of a variable by looking 
                                                          up the scope chain.
                                                        - the processof resolving a variable in an environemnt chain
                                                        - An unresolved binding results to "ReferenceError"
                                - Rule of Identifier Resolution is if variable is not found in the own environemnt,
                                  there is attempt to look it from parent environment and parent of the parent unti whole 
                                  chain of environment is considered.

                                let x = 10;             <-parent lexical environment identifier x = 10
                                let y = 20;             <-parent lexical environment identifier y = 20
                                
                                function foo(z) {       <-parent lexical environment identifier function foo()
                                let x = 100;            <-foo() (own) environment x = 100
                                return x + y + z;       <-"z" parameter is stored in "activation environemnt"
                                }
                                
                                foo(30); // 150

    Environemnt Records Type    - Object Environemnt Records 
                                  Declarative Environment Records - Function Environemnt Records
                                                                  - Module Environment Records
                                - Each environment has its own record specific only to its properties
                                - However, the generic mechanism of the identifier resolution is common across all 
                                  the environments and does not depend on the type of record
                                  
                                
                                    - Example of Object Environment Records: 
                                        -> Such record has also associated binding object, which may store some 
                                           properties from the record, but not the others, and vice-versa. 
                                           "this" value.
                                           // Legacy variables using `var`.
                                            var x = 10;
                                            
                                            // Modern variables using `let`.
                                            let y = 20;
                                            
                                            // Both are added to the environment record:
                                            console.log(
                                            x, // 10
                                            y, // 20
                                            );
                                            
                                            // But only `x` is added to the "binding object".
                                            // The binding object of the global environment
                                            // is the global object, and equals to `this`:
                                            
                                            console.log(
                                            this.x, // 10
                                            this.y, // undefined!
                                            );
                                            
                                            // Binding object can store a name which is not
                                            // added to the environment record, since it's
                                            // not a valid identifier:
                                            
                                            this['not valid ID'] = 30;
                                            
                                            console.log(
                                            this['not valid ID'], // 30
                                            );
    
    Closures                    - is a function which captures the environemnt where it is defined.
                                  Then this environemnt is used for identifier resolution
                                - Functions in ECMAScrip are first-class.
                                - First-class function - a function which can participate as 
                                    ->a normal data,
                                    ->passed as an argument 
                                    ->returned as a value from another function
                                    
                                - when a function deals with free variables "Funarg problem" the problem arises
                                - Free Variable           - a variable which is neither a parameter , nor a local variable of this function
                                - Downward Funarg Problem - an ambiguity at determining a correct environment of a binding
                                                            -> this problem is solved through "Static Scope"agreement
                                                                ->which is scope of "Creation Time"
                                - Static Scope            - a language implements static scope, if only by looking the source code one can 
                                                            determine in which environment a binding resolved
                                                          - sometimes "Static Scope" is called "Lexical Scope" hence lexical environment
                                - Upward Funarg Problem   - Capturing environment outlives the context which creates it
                                function foo() {
                                let x = 10;
                                
                                // Closure, capturing environment of `foo`.
                                function bar() {
                                    return x;
                                }
                                
                                // Upward funarg.
                                return bar;
                                }
                                
                                let x = 20;
                                
                                // Call to `foo` returns `bar` closure.
                                let bar = foo();
                                
                                bar(); // 10, not 20!

                                JavaSCript captures by-reference to the parent scope
    
                
                                  
*/