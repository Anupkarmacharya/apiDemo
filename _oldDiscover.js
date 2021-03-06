/**
*@api {get} /discover Get discover from backend
*@apiName GetDiscover
*@apiGroup Discover
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
function getDiscover(){
	return discover;
}


/**
*@api {post} /discover Post discovers Information
*@apiName PostDiscober
*@apiGroup Discover
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
	return discover;
}
