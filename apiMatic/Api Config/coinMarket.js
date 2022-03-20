import { ApiError, Client, MiscController } from '/home/moiz/Documents/University/trackeristic/hackatonlib';

const client =  new Client({
  timeout: 0,
  

})
const miscController = new MiscController(client);
const vsCurrency = 'usd';
const order = 'market_cap_desc';
const perPage = 100;
const page = 1;
const sparkline = false;
const accept = 'application/json';


try {
  const { result, ...httpResponse } = await miscController.coinMarket(vsCurrency, order, perPage, page, sparkline, accept);
  // Get more response info...
  console.log(vsCurrency)
  

} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result; 
    // const { statusCode, headers } = error;
    console.log(errors)
  }
}
