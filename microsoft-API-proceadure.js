//LAST TIME I WAS REQUESTING FOR THE TOKEN THROU API REQUEST THE TOKEN ARRIVED BUT IT DIDN'T WOR, THERE WAS AN ISSUE WITH MY PERMISSIONS. I BELEIVE THAT TO SOLVE THIS: YOU NEED TO RUN AN API REQUEST INSIDE THE GRAPHS SITE AND THE SITE WILL PROMPT YOU WITH AN AUTHORIZATION, GIVE THE AUTHORIZATION AND IT MIGHT WORK

/*
*When API requesting you are expected to send an object as such:
headers: {
          //this is the authentication
          "Authorization": `Bearer ${token}`, //token expires every 40min, to obtain a toke follow the steps below
          //this determains the tipe of info I want to fetch
          "Content-Type": "application/json"
        } 

*log into azure: https://azure.microsoft.com/

*go to(search): App registration
 -/new registration
 -register(add name)(select option that matches what is below)
 -Accounts in any organizational directory (Any Azure AD directory - Multitenant) and personal Microsoft accounts (e.g. Skype, Xbox)

*save info from Overview tab:
-Application(client) ID
-directory(tenant) ID

*go to tab certificates $ secrets
new client secret(give it a name and chose expiry date)(max is 24 months)
coppy secret (save it somewhere, it won't show the secret after refreshing asure)

*go to tab API permissions
here you can add permissions(for now no need to change this)

* you can test in postman
-----------
it is really important that to do a request from an extress server in javasctript you need to install qs: 
type in terminal: npm i qs 
require it in your js file: const qs = require('qs')
parse the data in your API request: axios.post(url, qs.stringify(<object>))
-----------
request needs to be a POSTS
url = https://login.microsoft.com/<tenent ID>/oauth2/token
send object with request(in postamn use body tab):
const object = {
  grant_type: client_credentials
  client_id: <from asure>
  client_secret: <from asure>
  resource: https://graph.microsoft.com
}

*here there is microsoft documentation on how to make these requests: https://learn.microsoft.com/en-us/advertising/guides/authentication-oauth-register
*/

{//code
  //I think the problem might be in setting up azure (specifically in the section 3. Request administrator consent (https://learn.microsoft.com/en-us/graph/auth-v2-service?tabs=http#3-request-administrator-consent))
  const urlToRequestAdminConcent =`https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a/adminconsent?client_id=b76d5f27-1cb1-41bc-a75e-1b46060803c9&state=12345&redirect_uri=http://localhost:8000`
  //there are some links I can't open in Azure that are endpoint for setting up these consents: (search: Enterprise applications)(search: Admin consent settings)(I might not have an account that grants me full access)(here there is some info on messing w user settings: https://www.youtube.com/watch?v=9Wi2CcTOeHI)
  //the issue: if I copy the token from microsoft graph, the API requests work just fine. when I request a token I do get a token back but that token doesn't work when I use it

  
const axios = require('axios');
const qs = require('qs')

const headersForTokenRequest = {
  finalprojectlhl: {
    grant_type: 'client_credentials',
    //grant_type: 'user_credentials', //for this you would use user password and email
    client_id: 'e99c23e3-e715-4f4a-aed5-a2019586b873',
    client_secret: 'wJf8Q~sxP23L.9AV2iscxju~UCGRNZRlffbOQdcr',
    //resource: 'https://graph.microsoft.com',
    scope: 'https://graph.microsoft.com/.default',
    tenant_id: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a'
  },
  youtubeTutorial1: {
    grant_type: 'client_credentials',
    client_id: 'b76d5f27-1cb1-41bc-a75e-1b46060803c9',
    client_secret: 'BfH8Q~M9hfoSEMmv84e.ItqUV1549b9U.bp4Cdge',
    scope: 'https://graph.microsoft.com/.default',
    tenant_id: 'f8cdef31-a31e-4b4a-93e4-5f571e91255a',//not for API request
    object_id: '4b3fb331-6f67-499d-9e0f-8edf7a180d50', //not for API request
    redirectUri: 'https://localhost:8000/' //not for API request
  },
  urlEncoded: {
    grant_type: 'client_credentials',
    client_id: 'b76d5f27-1cb1-41bc-a75e-1b46060803c9',
    client_secret: 'BfH8Q~M9hfoSEMmv84e.ItqUV1549b9U.bp4Cdge',
    scope: 'https%3A%2F%2Fgraph.microsoft.com%2F.default',
  }
}
const tokenFromGraph = {
  tokenFromGraph: 'EwCAA8l6BAAUAOyDv0l6PcCVu89kmzvqZmkWABkAAcd13p4AJgO9/Y5uTMfz6i7VWfUVOgUqy0VgcIoIo3g0bqbMXpOmoDXsGsbODTlC4I1Bhcifn8r046PyWtTrb/BCm/X76YE4QX03gxPSZvlpTiKG13AEMMZh90ierjEkdXzgrc6SRln4qx3T1GtbPeDX99sEKrJj0sgvA8W+/YFyEzEFs1nESKyFl3WVDtQ3jeqzaRtkw/EpqwwlzkA2cGEQJYNg/hg7OrgC9rVck11B+UzEBWgE1JMv/jstd3q39lMiJA814xJUxQzRSX2BP7b34waLZBxa/ak4cQ6JjiTAwF8aCrpTlUw5wwf91v9uxRoWMyS0PQPf3caUBEhs0hIDZgAACEQyHu4lLECcUAIU4wHRzBJ8Qiyxd4I8GtEpjYJeHA2yCrpC/VgOtZGrMjo4Xe/ALLR/kTEucyRBnBrNCXF4BxsYXqcQ23GQWkB0a0z08dahM2QhQoWtoBgmk99T00Vq3A3JV95VknGbAi9caGVaxvzKO5gRvknbt73EEMeFevwZ326xNFw47FIxSIdsbNe/BKx2YxL4c3U4aBsEdZUuno4ANVqzWQUbaNQjOmlmyZjnRxfVBMuYEvw3zgHJ9s0dpA0mXs1psjm8QRgZDqCaXZ2R/KoXDM7eojYN4pSf7MGGb9VICG8hHQWRhNohDGy+UGj4gt2p82RI/sDe3R6Bemu7abknmrAfR2yjWINubumNNdWy3YWi75BS+XSU25DD3aGpQLDYQMYGO1v28E0or7cfBa2z5N0XEEUEUF66MaDw5SStcbG98sDcYveROyqJQmO1OsS06/2pZxLTGo9TP/O0eDAe4rnxBa5kdydVlNx7efmgKXEFCP7x+zdh535IM32Z3jfGGeXR15380QqZvC3rCcD9ZoKg6wEIH5nqBZiech0BaRbqiJrNQDHvZWU+eSCKjvXR81clM36WG+qQODHDwThmdPdAXutYoDDB6nyf1pHvTM6ubCXFCCPDa6Vhme7jYF2n4T0usCSyuxSmUrwQcezXeuAhFuGuzindvA63Oit3BX9hyT9RaPm7w20hfctq65swrdGfMtOW3NSMLimcW1S7pTqbVbdhZloGpYmCNLhwCit3qe/eEk70eI9DguSNFfS2/1ZzFhJwlU/HIBz49cjss1+NM5k6nAI=',
  tokenPartial: 'eyJhdWQiOiJodHRwczovL2dyYXBoLm1pY3Jvc29mdC5jb20iLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mOGNkZWYzMS1hMzFlLTRiNGEtOTNlNC01ZjU3MWU5MTI1NWEvIiwiaWF0IjoxNjkwMzI5MTI3LCJuYmYiOjE2OTAzMjkxMjcsImV4cCI6MTY5MDQxNTgyNywiYWlvIjoiRTJaZ1lEaFF1dlRDVnZzN3U3NU90RDhmNGZ6N0NBQT0iLCJhcHBfZGlzcGxheW5hbWUiOiJ5b3V0dWJlVHV0b3JpYWwxIiwiYXBwaWQiOiJiNzZkNWYyNy0xY2IxLTQxYmMtYTc1ZS0xYjQ2MDYwODAzYzkiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9mOGNkZWYzMS1hMzFlLTRiNGEtOTNlNC01ZjU3MWU5MTI1NWEvIiwiaWR0eXAiOiJhcHAiLCJyaCI6IjAuQVJNQU1lX04tQjZqU2t1VDVGOVhIcEVsV2dNQUFBQUFBQUFBd0FBQUFBQUFBQUFCQUFBLiIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJXVyIsInRpZCI6ImY4Y2RlZjMxLWEzMWUtNGI0YS05M2U0LTVmNTcxZTkxMjU1YSIsInV0aSI6InFsUWZ6ektVSGtxckNXM3puekFOQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjA5OTdhMWQwLTBkMWQtNGFjYi1iNDA4LWQ1Y2E3MzEyMWU5MCJdLCJ4bXNfdGNkdCI6MTMzODMzNjY4NX0',
  decoded : {
    "aud": "https://graph.microsoft.com",
    "iss": "https://sts.windows.net/f8cdef31-a31e-4b4a-93e4-5f571e91255a/",
    "iat": 1690329127,
    "nbf": 1690329127,
    "exp": 1690415827,
    "aio": "E2ZgYDhQuvTCVvs7u75OtD8f4fz7CAA=",
    "app_displayname": "youtubeTutorial1",
    "appid": "b76d5f27-1cb1-41bc-a75e-1b46060803c9",
    "appidacr": "1",
    "idp": "https://sts.windows.net/f8cdef31-a31e-4b4a-93e4-5f571e91255a/",
    "idtyp": "app",
    "rh": "0.ARMAMe_N-B6jSkuT5F9XHpElWgMAAAAAAAAAwAAAAAAAAAABAAA.",
    "tenant_region_scope": "WW",
    "tid": "f8cdef31-a31e-4b4a-93e4-5f571e91255a",
    "uti": "qlQfzzKUHkqrCW3znzANAA",
    "ver": "1.0",
    "wids": [
      "0997a1d0-0d1d-4acb-b408-d5ca73121e90"
    ],
    "xms_tcdt": 1338336685
  }
}
//**********info w variables

const getTokenUrl = {
  v2: `https://login.microsoft.com/${headersForTokenRequest.finalprojectlhl.tenant_id}/oauth2/token`,
  v22: `https://login.microsoftonline.com/${headersForTokenRequest.youtubeTutorial1.tenant_id}/oauth2/v2.0/token`,
}
//**********info w variables
const getDataUrl = {
  1: 'https://graph.microsoft.com/v1.0/users/final.project.lhl@outlook.com',
  2: `https://graph.microsoft.com/v1.0/users/${headersForTokenRequest.youtubeTutorial1.object_id}` //object ID
}
const notes = {
  temp: '/users/{id | userPrincipalsName}',
  1: 'there are 2 types of authentication: Delegated user(retreive data based on user email and password(this is used to pull info from a user that is using yout app). App-only auth(easier to implement)(this type of authentication is used to access info from an account that you have password access to(basically an account you own)))',
  2: 'when creating an app in azure the easiest option to setup is: Accounts in any organizational directory (Any Azure AD directory - Multitenant)',
  3: 'permissions: if you are building an app-only you need to set application permissions. Best way of finding permissions is by going to https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0 and check the permissions needed to access what you need, then search for those permissions in azure',
  4: 'I havent activated grant admin concent',
  5: 'base64 decode'
}

//token request
axios.post(
  //**********info w variables
  getTokenUrl.v22,
  //**********info w variables
  qs.stringify(headersForTokenRequest.youtubeTutorial1)
)
.then((r)=>{
  //console.log(r.data)
  const token = r.data.access_token
  const headersForDataRequest2 = {
    headers: {
      //**********info w variables
      //"Authorization": `Bearer ${token}`,
      "Authorization": `Bearer ${tokenFromGraph.tokenFromGraph}`,
      //"Authorization": `Bearer ${tokenFromGraph.tokenPartial}`,
      //"Authorization": `Bearer ${token}`,
      //"Content-Type": "application/json"
      "Host": 'graph.microsoft.com'
    }
  }

  //----------------------data request
  axios.get(
    //**********info w variables

    getDataUrl[2],
    headersForDataRequest2
  )
  .catch((e)=>{
    //console.log("error not desireble")
    return
  })
  .then((r)=>{
    console.log(r) //r.data is the user info response
  })
})
  
}