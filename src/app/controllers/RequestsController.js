/**
 *          .::REQUEST CONTROLLER::.
 * All related operations to Request belong here. 
 * 
 */

/*          POST /api/req/send            */
export let send = async(req, res) => {
    var {
        url
    } = req.query;
    if(!url)return res.status(400).json({errorFromIran:"url is missed"})
    var {method,body,headers}=req;
    try{

        var response=await request({
            url,
            json:body,
            headers,
            method
            
        });
        return res.status(200).json(response);
    }catch(e){
        if(!e.statusCode)e.statusCode=500;
        return res.status(e.statusCode).json(e)
    }
    
}