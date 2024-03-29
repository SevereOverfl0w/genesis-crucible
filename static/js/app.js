ko.bindingHandlers.editableText = {
    init: function(element, valueAccessor) {
        $(element).attr('contenteditable', true);
        $(element).on('blur', function() {
            var observable = valueAccessor();
            if (typeof (observable) == 'function'){
                observable( $(this).text() );
            }
        });
    },
    update: function(element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).text(value);
    }
};
    
var storeViewModel = {};

$.getJSON("/store", function(data) {
    for (var key in data) {
        storeViewModel[key] = ko.observable(data[key]);
    }
    ko.applyBindings(storeViewModel);
});

$('#save').click(function(){
    $.post("/store/", ko.toJSON(storeViewModel));
});
