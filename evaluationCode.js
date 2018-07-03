var imported = document.createElement('script');
imported.src = 'jquery-3.3.1.min.js';
document.head.appendChild(imported);

$.when(
    $.getScript( "oaa_a11y_evaluation.js" ),
    $.getScript( "oaa_a11y_rules.js" ),
    $.getScript( "oaa_a11y_rulesets.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

    function evaluatePage(){
        console.log('entering evaluatePage');
        var doc = window.document;
        var ruleset = OpenAjax.a11y.RulesetManager.getRuleset(passedRuleset);
        var evaluator_factory = OpenAjax.a11y.EvaluatorFactory.newInstance();
        evaluator_factory.setParameter('ruleset', ruleset);
        evaluator_factory.setFeature('eventProcessing', 'fae-util');
        evaluator_factory.setFeature('groups', 7);
        var evaluator = evaluator_factory.newEvaluator();
        var evaluation = evaluator.evaluate(doc, doc.title, doc.location.href);
        var out = evaluation.toJSON(true);
        console.log('This is out: ' + out);
        return out;
    };

});