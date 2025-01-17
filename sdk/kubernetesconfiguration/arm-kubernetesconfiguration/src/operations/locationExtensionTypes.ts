/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LocationExtensionTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SourceControlConfigurationClient } from "../sourceControlConfigurationClient";
import {
  ExtensionType,
  LocationExtensionTypesListNextOptionalParams,
  LocationExtensionTypesListOptionalParams,
  LocationExtensionTypesListResponse,
  LocationExtensionTypesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LocationExtensionTypes operations. */
export class LocationExtensionTypesImpl implements LocationExtensionTypes {
  private readonly client: SourceControlConfigurationClient;

  /**
   * Initialize a new instance of the class LocationExtensionTypes class.
   * @param client Reference to the service client
   */
  constructor(client: SourceControlConfigurationClient) {
    this.client = client;
  }

  /**
   * List all Extension Types
   * @param location extension location
   * @param options The options parameters.
   */
  public list(
    location: string,
    options?: LocationExtensionTypesListOptionalParams
  ): PagedAsyncIterableIterator<ExtensionType> {
    const iter = this.listPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(location, options);
      }
    };
  }

  private async *listPagingPage(
    location: string,
    options?: LocationExtensionTypesListOptionalParams
  ): AsyncIterableIterator<ExtensionType[]> {
    let result = await this._list(location, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(location, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    location: string,
    options?: LocationExtensionTypesListOptionalParams
  ): AsyncIterableIterator<ExtensionType> {
    for await (const page of this.listPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * List all Extension Types
   * @param location extension location
   * @param options The options parameters.
   */
  private _list(
    location: string,
    options?: LocationExtensionTypesListOptionalParams
  ): Promise<LocationExtensionTypesListResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location extension location
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    nextLink: string,
    options?: LocationExtensionTypesListNextOptionalParams
  ): Promise<LocationExtensionTypesListNextResponse> {
    return this.client.sendOperationRequest(
      { location, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.KubernetesConfiguration/locations/{location}/extensionTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTypeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionTypeList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
