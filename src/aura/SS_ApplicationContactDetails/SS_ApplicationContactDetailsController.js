/**
 * Created by chris.baldock on 27/6/17.
 */
({
    onInit : function(component, event, helper){
        component.set("v.linkedSection", 'contactDetails');
    },
    nextSection : function(component, event, helper){
        var activeSubSection = component.get("v.activeSubSection")
        var newSubSection = activeSubSection;
        if(activeSubSection === 'section1'){
            newSubSection = 'section2';
        }
        if(activeSubSection == 'section2'){
            newSubSection = 'section1';
        }
        component.set("v.activeSubSection", newSubSection);
    },
    exitApplication : function(component, event, helper){

    }
})