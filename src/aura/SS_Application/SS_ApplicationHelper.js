/**
 * Created by chris.baldock on 27/6/17.
 */
({
    initApplicationState : function(component, event){
        var applicationState = {};
        applicationState.activeSection = 'contactDetails'; //set the default section
        component.set("v.applicationState", applicationState);
    }
})