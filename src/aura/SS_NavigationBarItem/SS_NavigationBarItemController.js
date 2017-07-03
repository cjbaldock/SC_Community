/**
 * Created by chris.baldock on 29/6/17.
 */
({
    navigateToPage : function(component, event, helper){
        var pageKey = component.get("v.pageKey");
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": '/'+pageKey
        });
        urlEvent.fire();
    }
})