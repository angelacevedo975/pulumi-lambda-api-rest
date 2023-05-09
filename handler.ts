// Copyright 2016-2019, Pulumi Corporation.  All rights reserved.

import * as aws from "@pulumi/aws";
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

/**
 * A simple function that returns hello world.
 *
 * @param {APIGatewayProxyEvent} event -
 * @returns returns a confirmation to the message to the
 */
export const hello: aws.lambda.EventHandler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
