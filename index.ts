// Copyright 2016-2019, Pulumi Corporation.  All rights reserved.

import * as awsx from "@pulumi/awsx";
import { hello } from "./handler";

/**
 * api-gatewayx https://www.pulumi.com/docs/guides/crosswalk/aws/api-gateway/
 */

// Create an API endpoint.
const endpoint = new awsx.apigateway.API("hello-world", {
  routes: [
    {
      path: "/hello",
      method: "GET",
      // Functions can be created inline
      eventHandler: hello,
    },
  ],
});

// Pulumi exports values
// See these outputs using: pulumi stack output endpointUrl
export const endpointUrl = endpoint.url;
