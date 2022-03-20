# Misc

```ts
const miscController = new MiscController(client);
```

## Class Name

`MiscController`


# Coin Market

```ts
async coinMarket(
  vsCurrency: string,
  order: string,
  perPage: number,
  page: number,
  sparkline: boolean,
  accept: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vsCurrency` | `string` | Query, Required | - |
| `order` | `string` | Query, Required | - |
| `perPage` | `number` | Query, Required | - |
| `page` | `number` | Query, Required | - |
| `sparkline` | `boolean` | Query, Required | - |
| `accept` | `string` | Header, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const vsCurrency = 'usd';
const order = 'market_cap_desc';
const perPage = 100;
const page = 1;
const sparkline = false;
const accept = 'application/json';
try {
  const { result, ...httpResponse } = await miscController.coinMarket(vsCurrency, order, perPage, page, sparkline, accept);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

