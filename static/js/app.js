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

function AppViewModel(){
    this.ip = ko.observable("cru.ci");
    this.title = ko.observable("Welcome to Crucible");
}

ko.applyBindings(new AppViewModel());
