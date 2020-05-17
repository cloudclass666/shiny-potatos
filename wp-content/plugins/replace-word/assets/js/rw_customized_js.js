function addNewField() {
	var id = jQuery('#id').val();
jQuery("#rw_itemlist").append("<li id ='row" + id + "'><textarea class='left' name='rwsearch["+ id +"]' id='rwsearch" + id + "'></textarea>"
	+ "<textarea class='left' name='rwchange["+ id +"]' id='rwchange" + id + "'></textarea>"
	+ "<label class='left' for='rwlink" + id + "'>Link?:&nbsp;</label>"
	+ "<input type='text' class='left' name='rwlink[" + id + "]' id='rwlink" + id + "' value=''/>"
	+ "<select class='left' name='rwtagdata[" + id + "]' id='rwtagdata" + id + "'>"
	+ "<option value=''/>Select</option>"
	+ "<option value='h1'>h1</option>"
	+ "<option value='h2'>h2</option>"
	+ "<option value='h3'>h3</option>"
	+ "<option value='h4'>h4</option>"
	+ "<option value='h5'>h5</option>"
	+ "<option value='h6'>h6</option>"
	+ "<option value='span'>span</option>"
	+ "</select>"
	+ "<input type='button' class='button left remove' value='Remove' onClick='removeFormField(\"#row"+ id +"\"); return false;' />\n</li>");
	id = (id - 1) + 2;
	document.getElementById("id").value = id;

   jQuery('html, body').animate({
        scrollTop: jQuery("#row"+(id-1)).offset().top
    }, 1000);

}
function removeFormField(id) {
	jQuery(id).remove();
}
jQuery(function() {
jQuery( "#rw_itemlist" ).sortable();
});
