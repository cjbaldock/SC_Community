/**
 * Created by chris.baldock on 27/6/17.
 */
({
    updateActiveSection : function(component, event, helper){
        var sectionKey = component.get("v.sectionKey");
        component.set("v.activeSection", sectionKey);
    }
})