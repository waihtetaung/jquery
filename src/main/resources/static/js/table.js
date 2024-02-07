$(document).ready(function() {
    $('#dataTable').DataTable({
        ajax: "/data",
        columns: [
            { "data": "id" },
            { "data": "name" }
        ]
    });
});