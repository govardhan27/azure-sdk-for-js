/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SingleSignOnConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftDatadogClient } from "../microsoftDatadogClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DatadogSingleSignOnResource,
  SingleSignOnConfigurationsListNextOptionalParams,
  SingleSignOnConfigurationsListOptionalParams,
  SingleSignOnConfigurationsListResponse,
  SingleSignOnConfigurationsCreateOrUpdateOptionalParams,
  SingleSignOnConfigurationsCreateOrUpdateResponse,
  SingleSignOnConfigurationsGetOptionalParams,
  SingleSignOnConfigurationsGetResponse,
  SingleSignOnConfigurationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SingleSignOnConfigurations operations. */
export class SingleSignOnConfigurationsImpl
  implements SingleSignOnConfigurations {
  private readonly client: MicrosoftDatadogClient;

  /**
   * Initialize a new instance of the class SingleSignOnConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftDatadogClient) {
    this.client = client;
  }

  /**
   * List the single sign-on configurations for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    monitorName: string,
    options?: SingleSignOnConfigurationsListOptionalParams
  ): PagedAsyncIterableIterator<DatadogSingleSignOnResource> {
    const iter = this.listPagingAll(resourceGroupName, monitorName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, monitorName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    monitorName: string,
    options?: SingleSignOnConfigurationsListOptionalParams
  ): AsyncIterableIterator<DatadogSingleSignOnResource[]> {
    let result = await this._list(resourceGroupName, monitorName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        monitorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    monitorName: string,
    options?: SingleSignOnConfigurationsListOptionalParams
  ): AsyncIterableIterator<DatadogSingleSignOnResource> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      monitorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List the single sign-on configurations for a given monitor resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    monitorName: string,
    options?: SingleSignOnConfigurationsListOptionalParams
  ): Promise<SingleSignOnConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, options },
      listOperationSpec
    );
  }

  /**
   * Configures single-sign-on for this resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SingleSignOnConfigurationsCreateOrUpdateResponse>,
      SingleSignOnConfigurationsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SingleSignOnConfigurationsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, monitorName, configurationName, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "azure-async-operation"
    });
  }

  /**
   * Configures single-sign-on for this resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsCreateOrUpdateOptionalParams
  ): Promise<SingleSignOnConfigurationsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      monitorName,
      configurationName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the datadog single sign-on resource for the given Monitor.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param configurationName Configuration name
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    monitorName: string,
    configurationName: string,
    options?: SingleSignOnConfigurationsGetOptionalParams
  ): Promise<SingleSignOnConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, configurationName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param monitorName Monitor resource name
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    monitorName: string,
    nextLink: string,
    options?: SingleSignOnConfigurationsListNextOptionalParams
  ): Promise<SingleSignOnConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, monitorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatadogSingleSignOnResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DatadogSingleSignOnResource
    },
    201: {
      bodyMapper: Mappers.DatadogSingleSignOnResource
    },
    202: {
      bodyMapper: Mappers.DatadogSingleSignOnResource
    },
    204: {
      bodyMapper: Mappers.DatadogSingleSignOnResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatadogSingleSignOnResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.monitorName,
    Parameters.configurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatadogSingleSignOnResourceListResponse
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
    Parameters.resourceGroupName,
    Parameters.monitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
