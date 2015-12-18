/**
*@api {get} /lead Get Leads from backend
*@apiName GetLead
*@apiGroup Lead
*
*@apiSuccess {String} firstName First Name from leads
*@apiSuccess {String} emailID EmailID from leads
*@apiSuccess {Integer} phoneNumber Phone Number of Client from leads
*@apiVersion 0.1.0
*@apiSuccessExample Success-Response:
*	HTTP/0.0.1 200 OK
*	{
*		"firstName":"Anup",
*		"emailId":"programmer_anup@hotmail.com",
*		"phoneNumber":9860133116
*	}
*
* @apiError LeadsNotFound The Lead was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/0.0.1 404 Not Found
 *     {
 *       "error": "No Lead Found"
 *     }
*
*/
function getLeads(){
	return leads;
}
/**
*@api {post} /user Post Leads Information
*@apiName PostUser
*@apiGroup Lead
*
*
*@apiSuccess {String} firstName First Name from leads
*@apiSuccess {String} emailID EmailID from leads
*@apiSuccess {Integer} phoneNumber Phone Number of Client from leads
*@apiVersion 0.1.0
*@apiSuccessExample Success-Response:
*       HTTP/0.0.1 200 OK
*       {
*               "firstName":"Anup",
*               "emailId":"programmer_anup@hotmail.com",
*               "phoneNumber":9860133116
*       }
*
* @apiError LeadsNotFound The Lead was not inserted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/0.0.1 404 Not Found
 *     {
 *       "error": "No Leads were inserted"
 *     }
*

*
*
*/
function setLeads(){
	return leads;
}

/**
*@api {get} /sourcing Get Leads from backend
*@apiName GetSourcing
*@apiGroup Sourcing
*
*@apiSuccess {String} firstName First Name from leads
*@apiSuccess {String} emailID EmailID from leads
*@apiSuccess {Integer} phoneNumber Phone Number of Client from leads
*@apiVersion 0.1.0
*@apiSuccessExample Success-Response:
*	HTTP/0.0.1 200 OK
*	{
*		"firstName":"Anup",
*		"emailId":"programmer_anup@hotmail.com",
*		"phoneNumber":9860133116
*	}
*
* @apiError LeadsNotFound The Lead was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/0.0.1 404 Not Found
 *     {
 *       "error": "No Lead Found"
 *     }
*
*/
function getSourcing(){
	return Sourcing;
}



/**
*@api {post} /sourcing Post Leads Information
*@apiName PostSourcing
*@apiGroup Sourcing
*
*
*@apiSuccess {String} firstName First Name from leads
*@apiSuccess {String} emailID EmailID from leads
*@apiSuccess {Integer} phoneNumber Phone Number of Client from leads
*@apiVersion 0.1.0
*@apiSuccessExample Success-Response:
*       HTTP/0.0.1 200 OK
*       {
*               "firstName":"Anup",
*               "emailId":"programmer_anup@hotmail.com",
*               "phoneNumber":9860133116
*       }
*
* @apiError LeadsNotFound The Lead was not inserted.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/0.0.1 404 Not Found
 *     {
 *       "error": "No Leads were inserted"
 *     }
*

*
*
*/
function setLeads(){
	return leads;
}


