define([],function(){return function(e){e.addEndpointDescription("_get_doc",{methods:["GET"],patterns:["{index}/{type}/{id}"],url_params:{version:1,routing:"",parent:""}}),e.addEndpointDescription("_get_doc_source",{methods:["GET"],patterns:["{index}/{type}/{id}/_source"]}),e.addEndpointDescription("_delete_doc",{methods:["DELETE"],patterns:["{index}/{type}/{id}/"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:""}}),e.addEndpointDescription("index_doc",{methods:["PUT","POST"],patterns:["{index}/{type}/{id}"],url_params:{version:1,version_type:["external","internal"],op_type:["create"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}}),e.addEndpointDescription("create_doc",{methods:["PUT","POST"],patterns:["{index}/{type}/{id}/_create"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}}),e.addEndpointDescription("index_doc_no_id",{methods:["POST"],patterns:["{index}/{type}"],url_params:{version:1,version_type:["external","internal"],routing:"",parent:"",timestamp:"",ttl:"5m",consistency:["qurom","one","all"],replication:["sync","async"],refresh:"__flag__",timeout:"1m"}})}});