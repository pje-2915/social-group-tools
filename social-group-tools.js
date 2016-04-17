/* Auto-invoked js function: */
(function () {
	tinymce.PluginManager.add( 'social_group_tools', function(editor, url ) {
		// Add hidden contact Button to Visual Editor Toolbar
		editor.addButton('hidden_contact', {
            title: 'Hidden Contact',
            image: url + '/zorro.png',
            onclick: function() {
                // Open window
                editor.windowManager.open( {
	                title: 'Contact Info',
	                body: [
	                {
	                    type: 'textbox',
	                    name: 'organiser',
	                    label: 'Organiser'
	                },
                    {
                       type: 'textbox',
                       name: 'phone',
                       label: 'Phone'
                    },
                    {
                       type: 'textbox',
                       name: 'email',
                       label: 'Email'
                    }                           
                    ],
                    onsubmit: function( e ) {
                        // Insert content when the window form is submitted
                        editor.insertContent( '[hiddencontact Organiser=\"' + e.data.organiser + 
                        		' \" Phone=\"' +e.data.phone + ' \" Email=\"' + e.data.email + '\" ]');
                    }

                } );
            }
		});
		// Add rendezvous Button to Visual Editor Toolbar
		editor.addButton('rendezvous', {
            title: 'Rendezvous',
            image: url + '/rendezvous.png',
            onclick: function() {
                // Open window
                editor.windowManager.open( {
	                title: 'Time and Place',
	                body: [
	                {
	                    type: 'textbox',
	                    name: 'description',
	                    label: 'Description'
	                },
                    {
                       type: 'textbox',
                       name: 'postcode',
                       label: 'Postcode'
                    },
                    {
                       type: 'textbox',
                       name: 'time',
                       label: 'Time'
                    }                           
                    ],
                    onsubmit: function( e ) {
                        // Insert content when the window form is submitted
                        editor.insertContent( '[rendezvous Description=\"' + e.data.description + 
                        		' \" Postcode=\"' +e.data.postcode + ' \" Time=\"' + e.data.time + '\" ]');
                    }

                } );
            }
		});
	});
})();
