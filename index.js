function introduction(name = "Danielle") {
    return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name = "Danielle", language = "Ember.js") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name = "Danielle", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}