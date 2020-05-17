window.wp = window.wp || {};
window.bp = window.bp || {};

(function( $ ) {
	'use strict';
	var group_all_clicked = true;

	var object = 'groups';// wbcom_agt_bp_filter_request
	$.cookie(
		'bp-' + object + '-extras', '', {
			path: '/'
		}
	);

	$( document ).on(
		'change', '#bpgt-groups-nouveau-search-group-type .bpgt-groups-search-group-type', function(){
			var scope_val         = $("#bpgt-groups-nouveau-search-group-type .bpgt-groups-search-group-type option:selected").val();
			if( '' == scope_val ) {
				var current_group = jQuery.cookie( 'current_bpgt_tab' );
				scope_val = current_group;
			}
			var extras_group_type = 'group_type=' + scope_val;
			var self = bp.Nouveau, objectData = {}, queryData = {}, scope = null, search_terms = '', extras = null, filter = null;
			var bpt  = bp.Nouveau.setupGlobals();

			objectData = self.getStorage( 'bp-' + object );

			if ( undefined !== objectData.scope ) {
				scope = objectData.scope;
			}

			// Notifications always need to start with Newest ones
			if ( undefined !== objectData.extras && 'notifications' !== object ) {
				extras = objectData.extras;
			}

			if (  $( '#buddypress [data-bp-filter="' + object + '"]' ).length ) {
				if ( '-1' !== $( '#buddypress [data-bp-filter="' + object + '"]' ).val() && '0' !== $( '#buddypress [data-bp-filter="' + object + '"]' ).val() ) {
					filter = $( '#buddypress [data-bp-filter="' + object + '"]' ).val();
				} else if ( undefined !== objectData.filter ) {
					filter = objectData.filter,
					$( '#buddypress [data-bp-filter="' + object + '"] option[value="' + filter + '"]' ).prop( 'selected', true );
				}
			}

			if ( $( this.objectNavParent + ' [data-bp-object="' + object + '"]' ).length ) {
				$( this.objectNavParent + ' [data-bp-object="' + object + '"]' ).each( function() {
					$( this ).removeClass( 'selected' );
				} );

				$( this.objectNavParent + ' [data-bp-scope="' + object + '"], #object-nav li.current' ).addClass( 'selected' );
			}

			// Check the querystring to eventually include the search terms
			if ( null !== self.querystring ) {
				if ( undefined !== self.querystring[ object + '_search'] ) {
					search_terms = self.querystring[ object + '_search'];
				} else if ( undefined !== self.querystring.s ) {
					search_terms = self.querystring.s;
				}

				if ( search_terms ) {
					$( '#buddypress [data-bp-search="' + object + '"] input[type=search]' ).val( search_terms );
				}
			}
			var search_terms = $( '#buddypress [data-bp-search="' + object + '"] input[type=search]' ).val();

			if ( $( '#buddypress [data-bp-list="' + object + '"]' ).length ) {
				queryData =  {
					object       : object,
					scope        : scope,
					filter       : filter,
					search_terms : search_terms,
					extras       : extras_group_type
				};


				// Populate the object list
				self.objectRequest( queryData );
			}

		}
	);

})( jQuery );

jQuery(document).ready(function($){

	jQuery( '.groups-nav > li > a' ).on('click', function(){
		jQuery('#bpgt-groups-nouveau-search-group-type .bpgt-groups-search-group-type').prop('selectedIndex',0);
		
		if( jQuery( this ).parent().hasClass( "bpgt-type-tab" )) {
			var current_group = jQuery( this ).parent().attr('data-bp-scope');
			jQuery.cookie( 'current_bpgt_tab', current_group, { path: '/' } );
			group_all_clicked = false;
			jQuery('.bpgt-groups-search-group-type').val('').trigger('change');
			jQuery('#groups_search').val('').trigger('submit');
		} else {
			group_all_clicked = true;
			jQuery.cookie( 'current_bpgt_tab', '', { path: '/' } );
		}	
	});

});
