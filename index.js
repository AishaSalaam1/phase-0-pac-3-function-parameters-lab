function introduction(name) {
    return `Hi, my name is ${name}.`
  }
  console.log(introduction("Aisha"))
  function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  function introductionWithLanguageOptional(name,language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }
  
//   function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}!`);
//   }
//   function sayHelloTo(firstName = "User") {
//     console.log(`Hello, ${firstName}!`);
//   }
//   function introductionWithLanguageOptional(string)
//   {
//     console.log( '${name} and ${language}' );
//   }
   