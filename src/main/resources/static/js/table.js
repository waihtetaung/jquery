$(document).ready(function() {
    $('#dataTable').DataTable({
        ajax: {
            'contentType': 'application/json',
			'url':'/data',
			'type':'GET',
			'datatype': 'json',
            'dataSrc': ''
		},
        columns: [
            { "data": "id", className: "text-center" },
            { "data": "name", className: "text-center"}
        ]
    });
});